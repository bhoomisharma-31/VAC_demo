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
    <aside className="hidden lg:flex flex-col w-64 shrink-0 border-r border-[#1A2E26] bg-[#050807]/90 backdrop-blur-xl h-screen sticky top-0 z-40">
      <div className="flex items-center gap-3 px-6 h-16 border-b border-[#1A2E26]">
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#22C55E] to-[#15803D] flex items-center justify-center shadow-lg shadow-[#22C55E]/30">
          <span className="font-display font-black text-xs text-[#050807]">Fx</span>
        </div>
        <div className="leading-tight">
          <div className="font-display font-extrabold text-lg tracking-tight text-white">
            Fx<span className="text-[#4ADE80]">ology</span>
          </div>
          <div className="text-[10px] text-[#4ADE80] font-mono tracking-widest font-bold uppercase">PROP PLATFORM</div>
        </div>
      </div>

      <nav className="flex-1 px-3 py-5 flex flex-col gap-1 overflow-y-auto">
        <div className="px-3 pb-2 text-[10px] font-mono tracking-widest text-[#22C55E] font-bold uppercase">Monitor</div>
        {nav.slice(0, 4).map((item) => (
          <NavItem key={item.to} {...item} />
        ))}
        <div className="px-3 pt-5 pb-2 text-[10px] font-mono tracking-widest text-[#22C55E] font-bold uppercase">Optimize</div>
        {nav.slice(4).map((item) => (
          <NavItem key={item.to} {...item} />
        ))}

        <div className="px-3 pt-5 pb-2 text-[10px] font-mono tracking-widest text-[#22C55E] font-bold uppercase">Access</div>
        <NavItem to="/login" label="Login / Register" icon={LogIn} />
      </nav>

      <div className="p-4 border-t border-[#1A2E26]">
        <div className="rounded-2xl border border-[#1A2E26] bg-[#0F1714] p-3.5 shadow-card">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-[#22C55E] live-dot" />
            <span className="text-[11px] font-mono text-[#4ADE80] font-bold tracking-wide">SYSTEM ACTIVE</span>
          </div>
          <p className="text-[11px] text-text-muted leading-relaxed">
            Fxology Engine v3.4 · 100% Trading & Cloud Uptime.
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
          className={`relative flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm transition-all duration-200 ${
            isActive ? "text-[#4ADE80] font-bold" : "text-text-muted hover:text-white hover:bg-[#15221E]"
          }`}
        >
          {isActive && (
            <motion.div
              layoutId="active-pill"
              className="absolute inset-0 rounded-xl bg-[#1B2E28] border border-[#22C55E]/40 shadow-glowEmerald"
              transition={{ type: "spring", stiffness: 400, damping: 32 }}
            />
          )}
          <Icon size={18} className={`relative z-10 ${isActive ? "text-[#4ADE80]" : "text-text-faint"}`} strokeWidth={2} />
          <span className="relative z-10">{label}</span>
        </div>
      )}
    </NavLink>
  );
}
