import { Search, Bell, ChevronDown } from "lucide-react";
import { costTrend } from "../data/mockData";

export default function Topbar({ title, subtitle }) {
  const last = costTrend[costTrend.length - 1].cost;
  const prev = costTrend[costTrend.length - 2].cost;
  const delta = (((last - prev) / prev) * 100).toFixed(1);
  const up = last >= prev;

  return (
    <header className="sticky top-0 z-30 h-16 flex items-center justify-between gap-4 px-5 lg:px-8 border-b border-border/70 bg-bg-deep/70 backdrop-blur-md">
      <div className="min-w-0">
        <h1 className="font-display text-[17px] font-semibold text-text-primary tracking-tight truncate">{title}</h1>
        {subtitle && <p className="text-xs text-text-faint mt-0.5 truncate">{subtitle}</p>}
      </div>

      <div className="flex items-center gap-3 lg:gap-4">
        <div className="hidden md:flex items-center gap-2 rounded-lg border border-border bg-bg-surface px-3 py-1.5 text-xs text-text-faint font-mono">
          <span>Today's spend</span>
          <span className="text-text-primary tabular">${last}</span>
          <span className={up ? "text-coral" : "text-teal"}>
            {up ? "▲" : "▼"} {Math.abs(delta)}%
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-2 rounded-lg border border-border bg-bg-surface pl-3 pr-2 py-1.5">
          <Search size={14} className="text-text-faint" />
          <input
            placeholder="Search resources…"
            className="bg-transparent outline-none text-xs text-text-primary placeholder:text-text-faint w-32 lg:w-44"
          />
        </div>

        <button className="relative w-9 h-9 rounded-lg border border-border bg-bg-surface flex items-center justify-center hover:border-teal/40 transition-colors">
          <Bell size={15} className="text-text-muted" />
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-coral text-[9px] font-mono flex items-center justify-center text-white">3</span>
        </button>

        <button className="flex items-center gap-2 rounded-lg border border-border bg-bg-surface pl-1.5 pr-2 py-1.5 hover:border-violet/40 transition-colors">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-violet to-teal" />
          <span className="hidden lg:inline text-xs text-text-primary">admin@finops</span>
          <ChevronDown size={13} className="text-text-faint" />
        </button>
      </div>
    </header>
  );
}
