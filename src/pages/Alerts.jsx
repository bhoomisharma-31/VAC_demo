import { useState } from "react";
import { motion } from "framer-motion";
import { AlertOctagon, AlertTriangle, Info, Wallet, Server, Rocket } from "lucide-react";
import Topbar from "../components/Topbar";
import { Card, PageTransition, SectionHeading } from "../components/ui";
import { alerts as allAlerts } from "../data/mockData";

const levelIcon = { critical: AlertOctagon, warning: AlertTriangle, info: Info };
const levelStyle = {
  critical: "text-coral border-coral/30 bg-coral/10",
  warning: "text-amber border-amber/30 bg-amber/10",
  info: "text-teal border-teal/30 bg-teal/10",
};
const typeIcon = { cost: Wallet, infra: Server, deploy: Rocket };

export default function Alerts() {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? allAlerts : allAlerts.filter((a) => a.level === filter);

  const counts = {
    critical: allAlerts.filter((a) => a.level === "critical").length,
    warning: allAlerts.filter((a) => a.level === "warning").length,
    info: allAlerts.filter((a) => a.level === "info").length,
  };

  return (
    <PageTransition>
      <Topbar title="Notifications & Alerts" subtitle="Cost anomalies, infrastructure events, and deployments" />

      <div className="pt-6 space-y-6">
        <div className="grid sm:grid-cols-3 gap-4">
          <LevelCard level="critical" count={counts.critical} onClick={() => setFilter("critical")} active={filter === "critical"} />
          <LevelCard level="warning" count={counts.warning} onClick={() => setFilter("warning")} active={filter === "warning"} />
          <LevelCard level="info" count={counts.info} onClick={() => setFilter("info")} active={filter === "info"} />
        </div>

        <Card className="p-6">
          <SectionHeading
            eyebrow="Feed"
            title="Recent activity"
            action={
              filter !== "all" && (
                <button onClick={() => setFilter("all")} className="text-[11px] font-mono text-text-faint hover:text-teal transition-colors">
                  Clear filter ×
                </button>
              )
            }
          />
          <div className="space-y-2.5">
            {filtered.map((a, idx) => {
              const LIcon = levelIcon[a.level];
              const TIcon = typeIcon[a.type];
              return (
                <motion.div
                  key={a.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="flex items-start gap-3.5 p-4 rounded-xl border border-border bg-bg-surface2/50"
                >
                  <div className={`w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 ${levelStyle[a.level]}`}>
                    <LIcon size={14} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-text-primary leading-snug">{a.message}</p>
                    <div className="flex items-center gap-2 mt-1.5">
                      <TIcon size={11} className="text-text-faint" />
                      <span className="text-[10px] font-mono text-text-faint capitalize">{a.type}</span>
                      <span className="text-text-faint">·</span>
                      <span className="text-[10px] font-mono text-text-faint">{a.time}</span>
                    </div>
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

function LevelCard({ level, count, onClick, active }) {
  const Icon = levelIcon[level];
  return (
    <button onClick={onClick} className="text-left">
      <Card className={`p-5 flex items-center gap-4 transition-colors ${active ? "border-teal/40" : "hover:border-border-soft"}`}>
        <div className={`w-10 h-10 rounded-lg border flex items-center justify-center ${levelStyle[level]}`}>
          <Icon size={17} strokeWidth={1.8} />
        </div>
        <div>
          <div className="font-mono text-xl text-text-primary tabular font-medium">{count}</div>
          <div className="text-xs text-text-muted capitalize">{level} alerts</div>
        </div>
      </Card>
    </button>
  );
}
