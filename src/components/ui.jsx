import { motion } from "framer-motion";

export function Card({ children, className = "", ...props }) {
  return (
    <div
      className={`rounded-2xl border border-[#1A2E26] bg-[#0F1714]/90 backdrop-blur-md shadow-card transition-all duration-200 hover:border-[#22C55E]/40 ${className}`}
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

export function StatCard({ icon: Icon, label, value, unit, delta, deltaTone = "neutral", accent = "emerald", index = 0 }) {
  const accentMap = {
    emerald: "text-[#4ADE80] border-[#22C55E]/40 bg-[#22C55E]/10 shadow-glowEmerald",
    gold: "text-[#4ADE80] border-[#22C55E]/40 bg-[#22C55E]/10 shadow-glowEmerald",
    teal: "text-[#10B981] border-[#10B981]/30 bg-[#10B981]/10 shadow-glow",
    violet: "text-[#8B5CF6] border-[#8B5CF6]/30 bg-[#8B5CF6]/10 shadow-glowViolet",
    amber: "text-[#F59E0B] border-[#F59E0B]/30 bg-[#F59E0B]/10",
    coral: "text-[#EF4444] border-[#EF4444]/30 bg-[#EF4444]/10",
  };
  const toneMap = {
    up: "text-[#EF4444] font-medium",
    down: "text-[#4ADE80] font-medium",
    neutral: "text-text-faint",
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
    >
      <Card className="p-5 hover:border-[#22C55E]/60 group relative overflow-hidden transition-colors duration-300">
        <div className="flex items-start justify-between mb-6">
          <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${accentMap[accent] || accentMap.emerald}`}>
            <Icon size={18} strokeWidth={2} />
          </div>
          {delta && <span className={`text-[11px] font-mono px-2 py-0.5 rounded-full bg-[#15221E] border border-[#1A2E26] ${toneMap[deltaTone]}`}>{delta}</span>}
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
        {eyebrow && <div className="text-[10px] font-mono tracking-widest text-[#22C55E] uppercase font-bold mb-1">{eyebrow}</div>}
        <h2 className="font-display text-base font-bold text-text-primary">{title}</h2>
      </div>
      {action}
    </div>
  );
}

const statusStyles = {
  running: "bg-[#22C55E]/15 text-[#4ADE80] border-[#22C55E]/30",
  success: "bg-[#22C55E]/15 text-[#4ADE80] border-[#22C55E]/30",
  stopped: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  exited: "bg-stone-800/80 text-stone-400 border-stone-700",
  failed: "bg-red-500/15 text-red-400 border-red-500/30",
  warning: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  idle: "bg-amber-500/15 text-amber-300 border-amber-500/30",
};

export function StatusBadge({ status }) {
  const cls = statusStyles[status] || "bg-[#15221E] text-text-muted border-[#1A2E26]";
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[11px] font-mono font-medium capitalize ${cls}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${status === "running" || status === "success" ? "bg-[#22C55E] live-dot" : status === "failed" ? "bg-red-500" : "bg-current"}`} />
      {status}
    </span>
  );
}

export function Meter({ value, tone = "emerald" }) {
  const toneMap = {
    emerald: "bg-gradient-to-r from-[#22C55E] to-[#4ADE80]",
    gold: "bg-gradient-to-r from-[#22C55E] to-[#4ADE80]",
    teal: "bg-[#10B981]",
    violet: "bg-[#8B5CF6]",
    amber: "bg-[#F59E0B]",
    coral: "bg-[#EF4444]",
  };
  return (
    <div className="w-full h-1.5 rounded-full bg-[#15221E] overflow-hidden border border-[#1A2E26]">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`h-full rounded-full ${toneMap[tone] || toneMap.emerald}`}
      />
    </div>
  );
}
