import { Boxes, RefreshCcw, Layers } from "lucide-react";
import { motion } from "framer-motion";
import Topbar from "../components/Topbar";
import { Card, PageTransition, SectionHeading, StatusBadge, Meter } from "../components/ui";
import { dockerContainers } from "../data/mockData";

export default function Docker() {
  const running = dockerContainers.filter((c) => c.status === "running").length;
  const totalMem = dockerContainers.reduce((a, b) => a + b.mem, 0);
  const restarts = dockerContainers.reduce((a, b) => a + b.restarts, 0);

  return (
    <PageTransition>
      <Topbar title="Docker Container Monitoring" subtitle="Live container fleet across the deployment host" />

      <div className="pt-6 space-y-6">
        <div className="grid sm:grid-cols-3 gap-4">
          <Stat icon={Boxes} label="Running containers" value={`${running} / ${dockerContainers.length}`} tone="teal" />
          <Stat icon={Layers} label="Total memory footprint" value={`${totalMem} MB`} tone="violet" />
          <Stat icon={RefreshCcw} label="Restarts (24h)" value={restarts} tone="amber" />
        </div>

        <Card className="p-6">
          <SectionHeading eyebrow="Fleet" title="Containers" />
          <div className="grid md:grid-cols-2 gap-4">
            {dockerContainers.map((c, idx) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="p-4 rounded-xl border border-border bg-bg-surface2/50 hover:border-teal/25 transition-colors"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-medium text-text-primary">{c.name}</span>
                  <StatusBadge status={c.status} />
                </div>
                <div className="text-[11px] font-mono text-text-faint mb-3">{c.image} · {c.id}</div>

                <div className="grid grid-cols-2 gap-3 mb-2">
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-mono text-text-faint mb-1">
                      <span>CPU</span><span>{c.cpu}%</span>
                    </div>
                    <Meter value={c.cpu} tone="teal" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-mono text-text-faint mb-1">
                      <span>Memory</span><span>{c.mem} MB</span>
                    </div>
                    <Meter value={Math.min((c.mem / 700) * 100, 100)} tone="violet" />
                  </div>
                </div>
                {c.restarts > 0 && (
                  <div className="text-[11px] font-mono text-amber mt-2">⟲ {c.restarts} restart{c.restarts > 1 ? "s" : ""} in last 24h</div>
                )}
              </motion.div>
            ))}
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
