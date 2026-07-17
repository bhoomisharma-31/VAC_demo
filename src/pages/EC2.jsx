import { useState } from "react";
import { Cpu, DollarSign, AlertTriangle } from "lucide-react";
import Topbar from "../components/Topbar";
import { Card, PageTransition, SectionHeading, StatusBadge, Meter } from "../components/ui";
import { ec2Instances } from "../data/mockData";
import { motion } from "framer-motion";

export default function EC2() {
  const [filter, setFilter] = useState("all");
  const filtered = ec2Instances.filter((i) => {
    if (filter === "idle") return i.idle;
    if (filter === "running") return i.status === "running";
    if (filter === "stopped") return i.status === "stopped";
    return true;
  });
  const idleCount = ec2Instances.filter((i) => i.idle).length;
  const totalCost = ec2Instances.reduce((a, b) => a + b.cost, 0);

  return (
    <PageTransition>
      <Topbar title="EC2 Resource Monitoring" subtitle="Instance health, utilization, and spend" />

      <div className="pt-6 space-y-6">
        <div className="grid sm:grid-cols-3 gap-4">
          <MiniStat icon={Cpu} label="Running instances" value={ec2Instances.filter((i) => i.status === "running").length} tone="teal" />
          <MiniStat icon={AlertTriangle} label="Idle & underutilized" value={idleCount} tone="amber" />
          <MiniStat icon={DollarSign} label="Monthly compute cost" value={`$${totalCost.toFixed(2)}`} tone="violet" />
        </div>

        <Card className="p-6">
          <SectionHeading
            eyebrow="Fleet"
            title="Instances"
            action={
              <div className="flex items-center gap-1.5 bg-bg-surface2 border border-border rounded-lg p-1">
                {["all", "running", "idle", "stopped"].map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-mono capitalize transition-colors ${
                      filter === f ? "bg-teal/15 text-teal" : "text-text-faint hover:text-text-muted"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            }
          />

          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[720px]">
              <thead>
                <tr className="text-left text-[10px] font-mono uppercase tracking-widest text-text-faint border-b border-border/70">
                  <th className="py-2.5 font-medium">Instance</th>
                  <th className="py-2.5 font-medium">Type / Region</th>
                  <th className="py-2.5 font-medium w-32">CPU</th>
                  <th className="py-2.5 font-medium w-32">Memory</th>
                  <th className="py-2.5 font-medium">Status</th>
                  <th className="py-2.5 font-medium text-right">Cost / mo</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((i, idx) => (
                  <motion.tr
                    key={i.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: idx * 0.03 }}
                    className="border-b border-border/40 hover:bg-bg-surface2/50 transition-colors"
                  >
                    <td className="py-3">
                      <div className="text-text-primary font-medium">{i.name}</div>
                      <div className="text-[11px] text-text-faint font-mono">{i.id}</div>
                    </td>
                    <td className="py-3 text-text-muted text-xs font-mono">
                      {i.type}
                      <div className="text-text-faint">{i.region}</div>
                    </td>
                    <td className="py-3 pr-4">
                      <div className="flex items-center gap-2">
                        <Meter value={i.cpu} tone={i.cpu < 15 ? "amber" : "teal"} />
                        <span className="text-[11px] font-mono text-text-faint w-8 tabular">{i.cpu}%</span>
                      </div>
                    </td>
                    <td className="py-3 pr-4">
                      <div className="flex items-center gap-2">
                        <Meter value={i.mem} tone={i.mem < 20 ? "amber" : "violet"} />
                        <span className="text-[11px] font-mono text-text-faint w-8 tabular">{i.mem}%</span>
                      </div>
                    </td>
                    <td className="py-3">
                      <StatusBadge status={i.idle ? "idle" : i.status} />
                    </td>
                    <td className="py-3 text-right font-mono text-text-primary tabular">${i.cost.toFixed(2)}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </PageTransition>
  );
}

function MiniStat({ icon: Icon, label, value, tone }) {
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
