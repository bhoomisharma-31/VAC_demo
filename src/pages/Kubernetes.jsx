import { Network, GitBranch, Layers3 } from "lucide-react";
import { motion } from "framer-motion";
import Topbar from "../components/Topbar";
import { Card, PageTransition, SectionHeading, Meter } from "../components/ui";
import { k8sDeployments } from "../data/mockData";

const nsColor = {
  production: "text-[#4ADE80] border-[#22C55E]/30 bg-[#22C55E]/15",
  finops: "text-[#8B5CF6] border-[#8B5CF6]/30 bg-[#8B5CF6]/15",
  staging: "text-amber-400 border-amber-500/30 bg-amber-500/15",
};

export default function Kubernetes() {
  return (
    <PageTransition>
      <Topbar title="Kubernetes Deployment Monitoring" subtitle="Cluster workloads across all namespaces" />

      <div className="pt-6 space-y-6">
        <div className="grid sm:grid-cols-3 gap-4">
          <Stat icon={Network} label="Deployments" value={k8sDeployments.length} tone="emerald" />
          <Stat icon={GitBranch} label="Namespaces" value={new Set(k8sDeployments.map((d) => d.namespace)).size} tone="violet" />
          <Stat icon={Layers3} label="Total replicas desired" value="21" tone="amber" />
        </div>

        <Card className="p-6">
          <SectionHeading eyebrow="Cluster" title="Deployments" />
          <div className="space-y-3">
            {k8sDeployments.map((d, idx) => {
              const nsClass = nsColor[d.namespace] || "text-[#4ADE80] border-[#22C55E]/30 bg-[#22C55E]/15";
              const [ready, desired] = d.replicas.split("/").map(Number);
              const healthy = ready === desired;
              return (
                <motion.div
                  key={d.name}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="grid md:grid-cols-[1.5fr_1fr_1fr_1fr_0.8fr] gap-3 items-center p-4 rounded-2xl border border-[#1A2E26] bg-[#050807]/60 hover:border-[#22C55E]/50 transition-colors"
                >
                  <div>
                    <div className="text-sm font-bold text-white">{d.name}</div>
                    <div className="text-[11px] font-mono text-text-muted">{d.image}</div>
                  </div>
                  <span className={`justify-self-start text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full border ${nsClass}`}>
                    {d.namespace}
                  </span>
                  <div>
                    <div className="text-[11px] font-mono text-text-muted font-medium mb-1">CPU {d.cpu}%</div>
                    <Meter value={d.cpu} tone="emerald" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-text-muted font-medium mb-1">Mem {d.mem}%</div>
                    <Meter value={d.mem} tone="violet" />
                  </div>
                  <div className="justify-self-end flex items-center gap-2">
                    <span className={`text-xs font-mono font-bold tabular ${healthy ? "text-[#4ADE80]" : "text-amber-400"}`}>{d.replicas}</span>
                    <span className="text-[10px] text-text-muted font-mono">{d.updated}</span>
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
  const toneMap = {
    emerald: "text-[#4ADE80] border-[#22C55E]/30 bg-[#22C55E]/10 shadow-glowEmerald",
    amber: "text-amber-400 border-amber-500/30 bg-amber-500/10",
    violet: "text-[#8B5CF6] border-[#8B5CF6]/30 bg-[#8B5CF6]/10",
  };
  return (
    <Card className="p-5 flex items-center gap-4">
      <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${toneMap[tone] || toneMap.emerald}`}>
        <Icon size={18} strokeWidth={2} />
      </div>
      <div>
        <div className="font-mono text-xl text-white tabular font-bold">{value}</div>
        <div className="text-xs text-text-muted font-medium">{label}</div>
      </div>
    </Card>
  );
}
