import { motion } from "framer-motion";

export function Card({ children, className = "", ...props }) {
  return (
    <div
      className={`rounded-2xl border border-border bg-bg-surface shadow-card transition-all duration-200 ${className}`}
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

export function StatCard({ icon: Icon, label, value, unit, delta, deltaTone = "neutral", accent = "gold", index = 0 }) {
  const accentMap = {
    gold: "text-gold border-gold/40 bg-gold-light/60 shadow-glowGold",
    teal: "text-teal border-teal/30 bg-teal/10 shadow-glow",
    violet: "text-violet border-violet/30 bg-violet/10 shadow-glowViolet",
    amber: "text-amber border-amber/30 bg-amber/10",
    coral: "text-coral border-coral/30 bg-coral/10",
  };
  const toneMap = {
    up: "text-coral font-medium",
    down: "text-teal font-medium",
    neutral: "text-text-faint",
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
    >
      <Card className="p-5 hover:border-gold/50 group relative overflow-hidden transition-colors duration-300">
        <div className="flex items-start justify-between mb-6">
          <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${accentMap[accent] || accentMap.gold}`}>
            <Icon size={18} strokeWidth={2} />
          </div>
          {delta && <span className={`text-[11px] font-mono px-2 py-0.5 rounded-full bg-bg-surface2 border border-border ${toneMap[deltaTone]}`}>{delta}</span>}
        </div>
        <div className="font-mono text-2xl text-text-primary tabular font-bold tracking-tight">
          {value}
          {unit && <span className="text-sm text-text-faint ml-1 font-normal">{unit}</span>}
        </div>
        <div className="text-xs text-text-muted mt-1.5 font-medium">{label}</div>
      </Card>
    </motion.div>
  );
}

export function SectionHeading({ eyebrow, title, action }) {
  return (
    <div className="flex items-end justify-between mb-4">
      <div>
        {eyebrow && <div className="text-[10px] font-mono tracking-widest text-gold-dim uppercase font-semibold mb-1">{eyebrow}</div>}
        <h2 className="font-display text-base font-bold text-text-primary">{title}</h2>
      </div>
      {action}
    </div>
  );
}

const statusStyles = {
  running: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
  success: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
  stopped: "bg-amber-50/80 text-amber-900 border-amber-200/80",
  exited: "bg-stone-100 text-stone-600 border-stone-200",
  failed: "bg-red-50 text-red-700 border-red-200",
  warning: "bg-amber-50 text-amber-800 border-amber-300",
  idle: "bg-amber-50 text-amber-700 border-amber-200",
};

export function StatusBadge({ status }) {
  const cls = statusStyles[status] || "bg-bg-surface2 text-text-muted border-border";
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[11px] font-mono font-medium capitalize ${cls}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${status === "running" || status === "success" ? "bg-emerald-500 live-dot" : status === "failed" ? "bg-red-500" : "bg-current"}`} />
      {status}
    </span>
  );
}

export function Meter({ value, tone = "gold" }) {
  const toneMap = {
    gold: "bg-gradient-to-r from-amber-400 to-amber-600",
    teal: "bg-emerald-500",
    violet: "bg-violet-500",
    amber: "bg-amber-500",
    coral: "bg-red-500",
  };
  return (
    <div className="w-full h-1.5 rounded-full bg-bg-surface2 overflow-hidden border border-border/40">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`h-full rounded-full ${toneMap[tone] || toneMap.gold}`}
      />
    </div>
  );
}
