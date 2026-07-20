import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, CloudCog, LayoutGrid, Server, Boxes, Network, Wallet, Sparkles, FileBarChart, BellRing, LogIn } from "lucide-react";

const nav = [
  { to: "/", label: "Overview", icon: LayoutGrid, end: true },
  { to: "/ec2", label: "EC2 Instances", icon: Server },
  { to: "/docker", label: "Containers", icon: Boxes },
  { to: "/kubernetes", label: "Kubernetes", icon: Network },
  { to: "/cost", label: "Cost Estimation", icon: Wallet },
  { to: "/recommendations", label: "Recommendations", icon: Sparkles },
  { to: "/reports", label: "Reports & Analytics", icon: FileBarChart },
  { to: "/alerts", label: "Alerts", icon: BellRing },
  { to: "/login", label: "Login Page", icon: LogIn },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <div className="lg:hidden sticky top-0 z-40 bg-[#050807]/95 backdrop-blur-xl border-b border-[#1A2E26]">
      <div className="flex items-center justify-between h-14 px-4">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#22C55E] to-[#15803D] flex items-center justify-center text-[#050807] font-black text-xs">
            Fx
          </div>
          <span className="font-display font-extrabold text-sm text-white">
            Fx<span className="text-[#4ADE80]">ology</span>
          </span>
        </div>
        <button onClick={() => setOpen((o) => !o)} className="w-9 h-9 flex items-center justify-center text-text-muted">
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open && (
        <div className="px-3 pb-3 flex flex-col gap-1 bg-[#0F1714] border-b border-[#1A2E26] shadow-2xl">
          {nav.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium ${
                  isActive ? "bg-[#1B2E28] text-[#4ADE80] font-bold border border-[#22C55E]/40" : "text-text-muted hover:text-white"
                }`
              }
            >
              <Icon size={16} strokeWidth={2} className="text-[#4ADE80]" />
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}
