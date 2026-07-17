import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, CloudCog, LayoutGrid, Server, Boxes, Network, Wallet, Sparkles, FileBarChart, BellRing } from "lucide-react";

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

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <div className="lg:hidden sticky top-0 z-40 bg-bg-deep/90 backdrop-blur-md border-b border-border/70">
      <div className="flex items-center justify-between h-14 px-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-gradient-to-br from-teal to-violet flex items-center justify-center">
            <CloudCog size={15} className="text-bg-deep" strokeWidth={2.5} />
          </div>
          <span className="font-display font-semibold text-sm">FinOps Cloud</span>
        </div>
        <button onClick={() => setOpen((o) => !o)} className="w-9 h-9 flex items-center justify-center text-text-muted">
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open && (
        <div className="px-3 pb-3 flex flex-col gap-1">
          {nav.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm ${
                  isActive ? "bg-bg-surface3 text-teal border border-teal/25" : "text-text-muted"
                }`
              }
            >
              <Icon size={16} strokeWidth={1.8} />
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}
