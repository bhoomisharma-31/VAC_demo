import { Network, GitBranch, Layers3 } from "lucide-react";
import { motion } from "framer-motion";
import Topbar from "../components/Topbar";
import { Card, PageTransition, SectionHeading, Meter } from "../components/ui";
import { k8sDeployments } from "../data/mockData";

const nsColor = {
  production: "text-teal border-teal/25 bg-teal/10",
  finops: "text-violet border-violet/25 bg-violet/10",
  staging: "text-amber border-amber/25 bg-amber/10",
};

export default function Kubernetes() {
  return (
    <PageTransition>
      <Topbar title="Kubernetes Deployment Monitoring" subtitle="Cluster workloads across all namespaces" />

      <div className="pt-6 space-y-6">
        <div className="grid sm:grid-cols-3 gap-4">
          <Stat icon={Network} label="Deployments" value={k8sDeployments.length} tone="teal" />
          <Stat icon={GitBranch} label="Namespaces" value={new Set(k8sDeployments.map((d) => d.namespace)).size} tone="violet" />
          <Stat icon={Layers3} label="Total replicas desired" value="21" tone="amber" />
        </div>

        <Card className="p-6">
          <SectionHeading eyebrow="Cluster" title="Deployments" />
          <div className="space-y-3">
            {k8sDeployments.map((d, idx) => {
              const nsClass = nsColor[d.namespace] || "text-teal border-teal/25 bg-teal/10";
              const [ready, desired] = d.replicas.split("/").map(Number);
              const healthy = ready === desired;
              return (
                <motion.div
                  key={d.name}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="grid md:grid-cols-[1.5fr_1fr_1fr_1fr_0.8fr] gap-3 items-center p-4 rounded-xl border border-border bg-bg-surface2/50"
                >
                  <div>
                    <div className="text-sm font-medium text-text-primary">{d.name}</div>
                    <div className="text-[11px] font-mono text-text-faint">{d.image}</div>
                  </div>
                  <span className={`justify-self-start text-[11px] font-mono px-2 py-0.5 rounded-full border ${nsClass}`}>
                    {d.namespace}
                  </span>
                  <div>
                    <div className="text-[11px] font-mono text-text-faint mb-1">CPU {d.cpu}%</div>
                    <Meter value={d.cpu} tone="teal" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-text-faint mb-1">Mem {d.mem}%</div>
                    <Meter value={d.mem} tone="violet" />
                  </div>
                  <div className="justify-self-end flex items-center gap-2">
                    <span className={`text-xs font-mono tabular ${healthy ? "text-teal" : "text-amber"}`}>{d.replicas}</span>
                    <span className="text-[10px] text-text-faint">{d.updated}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Card>
      </div>
    </PageTransition>
  );
}

function Stat({ icon: Icon, label, value, tone }) {
  const toneMap = { teal: "text-teal border-teal/25", amber: "text-amber border-amber/25", violet: "text-violet border-violet/25" };
  return (
    <Card className="p-5 flex items-center gap-4">
      <div className={`w-10 h-10 rounded-lg border flex items-center justify-center bg-bg-surface2 ${toneMap[tone]}`}>
        <Icon size={17} strokeWidth={1.8} />
      </div>
      <div>
        <div className="font-mono text-xl text-text-primary tabular font-medium">{value}</div>
        <div className="text-xs text-text-muted">{label}</div>
      </div>
    </Card>
  );
}
