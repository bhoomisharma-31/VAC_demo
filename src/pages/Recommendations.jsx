import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Check, ArrowRight } from "lucide-react";
import Topbar from "../components/Topbar";
import { Card, PageTransition, SectionHeading } from "../components/ui";
import { recommendations as initialRecs } from "../data/mockData";

const sevStyle = {
  high: "border-red-500/30 bg-red-500/10",
  medium: "border-amber-500/30 bg-amber-500/10",
  low: "border-[#22C55E]/30 bg-[#22C55E]/10",
};
const sevDot = { high: "bg-red-500", medium: "bg-amber-500", low: "bg-[#22C55E]" };

export default function Recommendations() {
  const [recs, setRecs] = useState(initialRecs);
  const [applied, setApplied] = useState([]);

  const apply = (id) => {
    setApplied((a) => [...a, id]);
    setTimeout(() => setRecs((r) => r.filter((x) => x.id !== id)), 500);
  };

  const totalSavings = initialRecs.reduce((a, b) => a + b.savings, 0);
  const capturedSavings = initialRecs.filter((r) => applied.includes(r.id)).reduce((a, b) => a + b.savings, 0);

  return (
    <PageTransition>
      <Topbar title="Optimization Recommendations" subtitle="Actionable ways to reduce cloud spend" />

      <div className="pt-6 space-y-6">
        <Card className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center shadow-glowEmerald">
              <Sparkles size={20} className="text-[#4ADE80]" />
            </div>
            <div>
              <div className="text-sm text-white font-bold">
                ${totalSavings.toFixed(2)}/mo identified across {initialRecs.length} recommendations
              </div>
              <div className="text-xs text-[#4ADE80] mt-0.5 font-mono">${capturedSavings.toFixed(2)} captured so far</div>
            </div>
          </div>
          <div className="w-full sm:w-56 h-2.5 rounded-full bg-[#050807] overflow-hidden border border-[#1A2E26]">
            <motion.div
              className="h-full bg-gradient-to-r from-[#22C55E] to-[#4ADE80]"
              animate={{ width: `${(capturedSavings / totalSavings) * 100}%` }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        </Card>

        <SectionHeading eyebrow="Fxology engine" title="Open recommendations" />
        <div className="space-y-3">
          <AnimatePresence>
            {recs.map((r) => {
              const isApplied = applied.includes(r.id);
              return (
                <motion.div
                  key={r.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: 40, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Card className={`p-5 border ${sevStyle[r.severity]}`}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-start gap-3 min-w-0">
                        <span className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${sevDot[r.severity]}`} />
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-sm font-bold text-white">{r.title}</h3>
                            <span className="text-[10px] font-mono font-semibold uppercase tracking-wide text-[#4ADE80] px-2 py-0.5 rounded border border-[#1A2E26] bg-[#050807]">
                              {r.severity}
                            </span>
                          </div>
                          <p className="text-xs text-text-muted mt-1.5 leading-relaxed font-medium">{r.detail}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 shrink-0 pl-6 sm:pl-0">
                        <div className="text-right">
                          <div className="font-mono text-sm text-[#4ADE80] font-bold tabular">−${r.savings.toFixed(2)}</div>
                          <div className="text-[10px] text-text-muted font-mono">per month</div>
                        </div>
                        <button
                          onClick={() => apply(r.id)}
                          disabled={isApplied}
                          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                            isApplied
                              ? "bg-[#22C55E]/20 text-[#4ADE80] border border-[#22C55E]/40"
                              : "bg-[#22C55E] hover:bg-[#16A34A] text-[#050807] shadow-lg shadow-[#22C55E]/20"
                          }`}
                        >
                          {isApplied ? (
                            <>
                              <Check size={14} /> Applied
                            </>
                          ) : (
                            <>
                              {r.action} <ArrowRight size={14} />
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
          {recs.length === 0 && (
            <Card className="p-10 text-center">
              <p className="text-sm text-text-muted font-medium">All recommendations actioned. New scans run every 6 hours.</p>
            </Card>
          )}
        </div>
      </div>
    </PageTransition>
  );
}
