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
    <div className="lg:hidden sticky top-0 z-40 bg-bg-deep/90 backdrop-blur-md border-b border-border">
      <div className="flex items-center justify-between h-14 px-4">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#B45309] flex items-center justify-center text-white">
            <CloudCog size={15} strokeWidth={2.2} />
          </div>
          <span className="font-display font-bold text-sm text-[#1C1917]">
            FinOps<span className="text-[#C59B27]">Cloud</span>
          </span>
        </div>
        <button onClick={() => setOpen((o) => !o)} className="w-9 h-9 flex items-center justify-center text-text-muted">
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open && (
        <div className="px-3 pb-3 flex flex-col gap-1 bg-white border-b border-border shadow-lg">
          {nav.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium ${
                  isActive ? "bg-[#EDE5D4] text-[#1C1917] font-semibold border border-[#D5CCA8]" : "text-text-muted hover:text-[#1C1917]"
                }`
              }
            >
              <Icon size={16} strokeWidth={2} className="text-[#C59B27]" />
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}
