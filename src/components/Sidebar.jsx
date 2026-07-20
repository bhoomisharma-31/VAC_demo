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
  LogIn,
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
    <aside className="hidden lg:flex flex-col w-64 shrink-0 border-r border-border bg-bg-deep/80 backdrop-blur-md h-screen sticky top-0">
      <div className="flex items-center gap-3 px-6 h-16 border-b border-border">
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#D4AF37] via-[#C59B27] to-[#B45309] flex items-center justify-center shadow-md shadow-[#D4AF37]/30">
          <CloudCog size={18} className="text-white" strokeWidth={2.2} />
        </div>
        <div className="leading-tight">
          <div className="font-display font-bold text-[15px] tracking-tight text-text-primary">
            FinOps<span className="text-[#C59B27]">Cloud</span>
          </div>
          <div className="text-[10px] text-[#92400E] font-mono tracking-wider font-medium">CONTROL PLANE</div>
        </div>
      </div>

      <nav className="flex-1 px-3 py-5 flex flex-col gap-1 overflow-y-auto">
        <div className="px-3 pb-2 text-[10px] font-mono tracking-widest text-text-faint font-semibold uppercase">Monitor</div>
        {nav.slice(0, 4).map((item) => (
          <NavItem key={item.to} {...item} />
        ))}
        <div className="px-3 pt-5 pb-2 text-[10px] font-mono tracking-widest text-text-faint font-semibold uppercase">Optimize</div>
        {nav.slice(4).map((item) => (
          <NavItem key={item.to} {...item} />
        ))}

        <div className="px-3 pt-5 pb-2 text-[10px] font-mono tracking-widest text-text-faint font-semibold uppercase">Access</div>
        <NavItem to="/login" label="Login Page" icon={LogIn} />
      </nav>

      <div className="p-4 border-t border-border">
        <div className="rounded-xl border border-border bg-white p-3.5 shadow-sm">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-[#C59B27] live-dot" />
            <span className="text-[11px] font-mono text-text-muted font-semibold tracking-wide">PIPELINE HEALTHY</span>
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
          className={`relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors duration-200 ${
            isActive ? "text-[#1C1917] font-semibold" : "text-text-muted hover:text-[#1C1917] hover:bg-[#F6F1E7]/60"
          }`}
        >
          {isActive && (
            <motion.div
              layoutId="active-pill"
              className="absolute inset-0 rounded-xl bg-[#EDE5D4] border border-[#D5CCA8] shadow-sm"
              transition={{ type: "spring", stiffness: 400, damping: 32 }}
            />
          )}
          <Icon size={18} className={`relative z-10 ${isActive ? "text-[#C59B27]" : "text-[#78716C]"}`} strokeWidth={2} />
          <span className="relative z-10">{label}</span>
        </div>
      )}
    </NavLink>
  );
}
