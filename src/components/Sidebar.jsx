import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LayoutGrid,
  Server,
  Boxes,
  Network,
  Wallet,
  Sparkles,
  FileBarChart,
  BellRing,
  CloudCog,
} from "lucide-react";

const nav = [
  { to: "/", label: "Overview", icon: LayoutGrid, end: true },
  { to: "/ec2", label: "EC2 Instances", icon: Server },
  { to: "/docker", label: "Containers", icon: Boxes },
  { to: "/kubernetes", label: "Kubernetes", icon: Network },
  { to: "/cost", label: "Cost Estimation", icon: Wallet },
  { to: "/recommendations", label: "Recommendations", icon: Sparkles },
  { to: "/reports", label: "Reports & Analytics", icon: FileBarChart },
  { to: "/alerts", label: "Alerts", icon: BellRing },
];

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex flex-col w-64 shrink-0 border-r border-border/70 bg-bg-deep/60 backdrop-blur-sm h-screen sticky top-0">
      <div className="flex items-center gap-2.5 px-6 h-16 border-b border-border/70">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal to-violet flex items-center justify-center shadow-glow">
          <CloudCog size={18} className="text-bg-deep" strokeWidth={2.5} />
        </div>
        <div className="leading-tight">
          <div className="font-display font-semibold text-[15px] tracking-tight text-text-primary">FinOps Cloud</div>
          <div className="text-[10px] text-text-faint font-mono tracking-wide">CONTROL PLANE</div>
        </div>
      </div>

      <nav className="flex-1 px-3 py-5 flex flex-col gap-1 overflow-y-auto">
        <div className="px-3 pb-2 text-[10px] font-mono tracking-widest text-text-faint uppercase">Monitor</div>
        {nav.slice(0, 4).map((item) => (
          <NavItem key={item.to} {...item} />
        ))}
        <div className="px-3 pt-5 pb-2 text-[10px] font-mono tracking-widest text-text-faint uppercase">Optimize</div>
        {nav.slice(4).map((item) => (
          <NavItem key={item.to} {...item} />
        ))}
      </nav>

      <div className="p-4 border-t border-border/70">
        <div className="rounded-xl border border-border bg-bg-surface p-3.5">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-teal live-dot" />
            <span className="text-[11px] font-mono text-text-muted tracking-wide">PIPELINE HEALTHY</span>
          </div>
          <p className="text-[11px] text-text-faint leading-relaxed">
            Last deploy 2h ago via GitHub Actions → ECR → Kubernetes.
          </p>
        </div>
      </div>
    </aside>
  );
}

function NavItem({ to, label, icon: Icon, end }) {
  return (
    <NavLink to={to} end={end} className="relative">
      {({ isActive }) => (
        <div
          className={`relative flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors duration-200 ${
            isActive ? "text-text-primary" : "text-text-muted hover:text-text-primary hover:bg-bg-surface/60"
          }`}
        >
          {isActive && (
            <motion.div
              layoutId="active-pill"
              className="absolute inset-0 rounded-lg bg-bg-surface3 border border-teal/25 shadow-glow"
              transition={{ type: "spring", stiffness: 400, damping: 32 }}
            />
          )}
          <Icon size={17} className={`relative z-10 ${isActive ? "text-teal" : ""}`} strokeWidth={1.8} />
          <span className="relative z-10 font-medium">{label}</span>
        </div>
      )}
    </NavLink>
  );
}
