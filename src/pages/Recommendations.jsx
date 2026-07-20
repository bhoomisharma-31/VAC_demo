import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Check, ArrowRight } from "lucide-react";
import Topbar from "../components/Topbar";
import { Card, PageTransition, SectionHeading } from "../components/ui";
import { recommendations as initialRecs } from "../data/mockData";

const sevStyle = {
  high: "border-red-200 bg-red-50/50",
  medium: "border-amber-300 bg-amber-50/50",
  low: "border-[#D5CCA8] bg-[#FDF4DB]/50",
};
const sevDot = { high: "bg-red-500", medium: "bg-amber-500", low: "bg-[#C59B27]" };

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
            <div className="w-11 h-11 rounded-xl bg-gold-light/80 border border-gold/40 flex items-center justify-center shadow-glowGold">
              <Sparkles size={20} className="text-[#C59B27]" />
            </div>
            <div>
              <div className="text-sm text-text-primary font-bold">
                ${totalSavings.toFixed(2)}/mo identified across {initialRecs.length} recommendations
              </div>
              <div className="text-xs text-text-faint mt-0.5 font-medium">${capturedSavings.toFixed(2)} captured so far</div>
            </div>
          </div>
          <div className="w-full sm:w-56 h-2.5 rounded-full bg-[#F6F1E7] overflow-hidden border border-border">
            <motion.div
              className="h-full bg-gradient-to-r from-[#D4AF37] to-[#B45309]"
              animate={{ width: `${(capturedSavings / totalSavings) * 100}%` }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        </Card>

        <SectionHeading eyebrow="FinOps engine" title="Open recommendations" />
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
                            <h3 className="text-sm font-bold text-text-primary">{r.title}</h3>
                            <span className="text-[10px] font-mono font-semibold uppercase tracking-wide text-text-faint px-2 py-0.5 rounded border border-border bg-white">
                              {r.severity}
                            </span>
                          </div>
                          <p className="text-xs text-text-muted mt-1.5 leading-relaxed font-medium">{r.detail}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 shrink-0 pl-6 sm:pl-0">
                        <div className="text-right">
                          <div className="font-mono text-sm text-[#C59B27] font-bold tabular">−${r.savings.toFixed(2)}</div>
                          <div className="text-[10px] text-text-faint font-mono">per month</div>
                        </div>
                        <button
                          onClick={() => apply(r.id)}
                          disabled={isApplied}
                          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                            isApplied
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-300"
                              : "bg-[#C59B27] hover:bg-[#B45309] text-white shadow-md shadow-[#D4AF37]/20"
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
