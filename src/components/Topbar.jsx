import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Bell, ChevronDown, LogOut, Globe, ArrowRight, Sparkles } from "lucide-react";
import { costTrend } from "../data/mockData";

export default function Topbar({ title, subtitle }) {
  const navigate = useNavigate();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [lang, setLang] = useState("English");

  const last = costTrend[costTrend.length - 1].cost;
  const prev = costTrend[costTrend.length - 2].cost;
  const delta = (((last - prev) / prev) * 100).toFixed(1);
  const up = last >= prev;

  return (
    <header className="sticky top-0 z-30 h-16 flex items-center justify-between gap-4 px-5 lg:px-8 border-b border-[#1A2E26] bg-[#050807]/90 backdrop-blur-xl">
      <div className="min-w-0">
        <h1 className="font-display text-[17px] font-bold text-white tracking-tight truncate">{title}</h1>
        {subtitle && <p className="text-xs text-text-muted mt-0.5 truncate font-medium">{subtitle}</p>}
      </div>

      <div className="flex items-center gap-3 lg:gap-4">
        {/* Today's Spend Widget */}
        <div className="hidden md:flex items-center gap-2 rounded-full border border-[#1A2E26] bg-[#0F1714] px-3.5 py-1.5 text-xs text-text-faint font-mono shadow-sm">
          <span>Today's spend:</span>
          <span className="text-white font-bold tabular">${last}</span>
          <span className={up ? "text-red-400 font-medium" : "text-[#4ADE80] font-medium"}>
            {up ? "▲" : "▼"} {Math.abs(delta)}%
          </span>
        </div>

        {/* Search Input */}
        <div className="hidden sm:flex items-center gap-2 rounded-full border border-[#1A2E26] bg-[#0F1714] pl-3.5 pr-2.5 py-1.5 focus-within:border-[#22C55E]/60 focus-within:ring-2 focus-within:ring-[#22C55E]/20 transition-all">
          <Search size={14} className="text-text-faint" />
          <input
            placeholder="Search Fxology resources…"
            className="bg-transparent outline-none text-xs text-white placeholder:text-text-faint w-32 lg:w-40"
          />
        </div>

        {/* Language Selector Pill */}
        <div className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full border border-[#1A2E26] bg-[#0F1714] text-xs text-text-muted cursor-pointer hover:border-[#22C55E]/40 transition-colors">
          <Globe size={13} className="text-[#4ADE80]" />
          <span>{lang}</span>
          <ChevronDown size={12} className="text-text-faint" />
        </div>

        {/* Start a Challenge Button */}
        <Link
          to="/login"
          className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#22C55E] hover:bg-[#16A34A] text-[#050807] text-xs font-bold transition-all shadow-md shadow-[#22C55E]/20"
        >
          <span>Start challenge</span>
          <ArrowRight size={13} />
        </Link>

        {/* User Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="flex items-center gap-2 rounded-full border border-[#1A2E26] bg-[#0F1714] pl-1.5 pr-2.5 py-1.5 hover:border-[#22C55E]/50 transition-colors"
          >
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#22C55E] to-[#15803D] flex items-center justify-center text-[#050807] text-[10px] font-bold">
              FX
            </div>
            <span className="hidden lg:inline text-xs font-semibold text-white">trader@fxology.com</span>
            <ChevronDown size={13} className="text-text-faint" />
          </button>

          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-56 rounded-2xl border border-[#1A2E26] bg-[#0F1714] p-2 shadow-2xl z-50 text-xs">
              <div className="px-3 py-2 border-b border-[#1A2E26] mb-1">
                <div className="font-bold text-white">Fxology Trader</div>
                <div className="text-[11px] text-text-faint font-mono">trader@fxology.com</div>
              </div>

              <Link
                to="/login"
                onClick={() => setShowProfileMenu(false)}
                className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-white hover:bg-[#15221E] transition-colors font-medium"
              >
                <Sparkles size={14} className="text-[#4ADE80]" />
                <span>Switch to Login Page</span>
              </Link>

              <button
                onClick={() => {
                  setShowProfileMenu(false);
                  navigate("/login");
                }}
                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-red-400 hover:bg-red-500/10 transition-colors font-medium mt-1"
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
