import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Bell, ChevronDown, LogOut, User, Sparkles } from "lucide-react";
import { costTrend } from "../data/mockData";

export default function Topbar({ title, subtitle }) {
  const navigate = useNavigate();
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const last = costTrend[costTrend.length - 1].cost;
  const prev = costTrend[costTrend.length - 2].cost;
  const delta = (((last - prev) / prev) * 100).toFixed(1);
  const up = last >= prev;

  return (
    <header className="sticky top-0 z-30 h-16 flex items-center justify-between gap-4 px-5 lg:px-8 border-b border-border bg-bg-deep/80 backdrop-blur-md">
      <div className="min-w-0">
        <h1 className="font-display text-[17px] font-bold text-text-primary tracking-tight truncate">{title}</h1>
        {subtitle && <p className="text-xs text-text-faint mt-0.5 truncate font-medium">{subtitle}</p>}
      </div>

      <div className="flex items-center gap-3 lg:gap-4">
        {/* Today's Spend Widget */}
        <div className="hidden md:flex items-center gap-2 rounded-xl border border-border bg-white px-3 py-1.5 text-xs text-text-faint font-mono shadow-sm">
          <span>Today's spend:</span>
          <span className="text-[#1C1917] font-bold tabular">${last}</span>
          <span className={up ? "text-coral font-medium" : "text-emerald-600 font-medium"}>
            {up ? "▲" : "▼"} {Math.abs(delta)}%
          </span>
        </div>

        {/* Search Input */}
        <div className="hidden sm:flex items-center gap-2 rounded-xl border border-border bg-white pl-3 pr-2 py-1.5 shadow-sm focus-within:border-gold/60 focus-within:ring-2 focus-within:ring-gold/20 transition-all">
          <Search size={14} className="text-text-faint" />
          <input
            placeholder="Search resources…"
            className="bg-transparent outline-none text-xs text-text-primary placeholder:text-text-faint w-32 lg:w-44"
          />
        </div>

        {/* Notifications Button */}
        <button className="relative w-9 h-9 rounded-xl border border-border bg-white flex items-center justify-center hover:border-gold/60 shadow-sm transition-colors">
          <Bell size={16} className="text-text-muted" />
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-500 text-[9px] font-mono font-bold flex items-center justify-center text-white">3</span>
        </button>

        {/* User Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="flex items-center gap-2.5 rounded-xl border border-border bg-white pl-1.5 pr-2.5 py-1.5 hover:border-gold/60 shadow-sm transition-colors"
          >
            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#B45309] flex items-center justify-center text-white text-[10px] font-bold">
              FA
            </div>
            <span className="hidden lg:inline text-xs font-semibold text-text-primary">admin@finops.cloud</span>
            <ChevronDown size={13} className="text-text-faint" />
          </button>

          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-56 rounded-2xl border border-border bg-white p-2 shadow-xl z-50 text-xs">
              <div className="px-3 py-2 border-b border-border/60 mb-1">
                <div className="font-bold text-[#1C1917]">FinOps Administrator</div>
                <div className="text-[11px] text-[#78716C] font-mono">admin@finops.cloud</div>
              </div>

              <Link
                to="/login"
                onClick={() => setShowProfileMenu(false)}
                className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-[#1C1917] hover:bg-[#F6F1E7] transition-colors font-medium"
              >
                <Sparkles size={14} className="text-[#C59B27]" />
                <span>Switch to Login Page</span>
              </Link>

              <button
                onClick={() => {
                  setShowProfileMenu(false);
                  navigate("/login");
                }}
                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-red-600 hover:bg-red-50 transition-colors font-medium mt-1"
              >
                <LogOut size={14} />
                <span>Sign Out</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
