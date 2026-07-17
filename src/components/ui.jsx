import { motion } from "framer-motion";

export function Card({ children, className = "", ...props }) {
  return (
    <div
      className={`rounded-2xl border border-border bg-bg-surface/80 shadow-card ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function StatCard({ icon: Icon, label, value, unit, delta, deltaTone = "neutral", accent = "teal", index = 0 }) {
  const accentMap = {
    teal: "text-teal border-teal/25 shadow-glow",
    violet: "text-violet border-violet/25 shadow-glowViolet",
    amber: "text-amber border-amber/25",
    coral: "text-coral border-coral/25",
  };
  const toneMap = {
    up: "text-coral",
    down: "text-teal",
    neutral: "text-text-faint",
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
    >
      <Card className="p-5 hover:border-border-soft group relative overflow-hidden transition-colors duration-300">
        <div className="flex items-start justify-between mb-6">
          <div className={`w-9 h-9 rounded-lg border flex items-center justify-center ${accentMap[accent]} bg-bg-surface2`}>
            <Icon size={16} strokeWidth={1.8} />
          </div>
          {delta && <span className={`text-[11px] font-mono ${toneMap[deltaTone]}`}>{delta}</span>}
        </div>
        <div className="font-mono text-2xl text-text-primary tabular font-medium">
          {value}
          {unit && <span className="text-sm text-text-faint ml-1">{unit}</span>}
        </div>
        <div className="text-xs text-text-muted mt-1.5">{label}</div>
      </Card>
    </motion.div>
  );
}

export function SectionHeading({ eyebrow, title, action }) {
  return (
    <div className="flex items-end justify-between mb-4">
      <div>
        {eyebrow && <div className="text-[10px] font-mono tracking-widest text-text-faint uppercase mb-1">{eyebrow}</div>}
        <h2 className="font-display text-base font-semibold text-text-primary">{title}</h2>
      </div>
      {action}
    </div>
  );
}

const statusStyles = {
  running: "bg-teal/10 text-teal border-teal/25",
  success: "bg-teal/10 text-teal border-teal/25",
  stopped: "bg-text-faint/10 text-text-faint border-border",
  exited: "bg-text-faint/10 text-text-faint border-border",
  failed: "bg-coral/10 text-coral border-coral/25",
  warning: "bg-amber/10 text-amber border-amber/25",
  idle: "bg-amber/10 text-amber border-amber/25",
};

export function StatusBadge({ status }) {
  const cls = statusStyles[status] || "bg-border text-text-muted border-border";
  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border text-[11px] font-mono capitalize ${cls}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${status === "running" || status === "success" ? "bg-teal live-dot" : status === "failed" ? "bg-coral" : "bg-current"}`} />
      {status}
    </span>
  );
}

export function Meter({ value, tone = "teal" }) {
  const toneMap = { teal: "bg-teal", violet: "bg-violet", amber: "bg-amber", coral: "bg-coral" };
  return (
    <div className="w-full h-1.5 rounded-full bg-bg-surface2 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`h-full rounded-full ${toneMap[tone]}`}
      />
    </div>
  );
}
