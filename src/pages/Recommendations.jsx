import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Check, ArrowRight } from "lucide-react";
import Topbar from "../components/Topbar";
import { Card, PageTransition, SectionHeading } from "../components/ui";
import { recommendations as initialRecs } from "../data/mockData";

const sevStyle = {
  high: "border-coral/30 bg-coral/5",
  medium: "border-amber/30 bg-amber/5",
  low: "border-teal/25 bg-teal/5",
};
const sevDot = { high: "bg-coral", medium: "bg-amber", low: "bg-teal" };

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
            <div className="w-11 h-11 rounded-xl bg-violet/10 border border-violet/25 flex items-center justify-center">
              <Sparkles size={18} className="text-violet" />
            </div>
            <div>
              <div className="text-sm text-text-primary font-medium">
                ${totalSavings.toFixed(2)}/mo identified across {initialRecs.length} recommendations
              </div>
              <div className="text-xs text-text-faint mt-0.5">${capturedSavings.toFixed(2)} captured so far</div>
            </div>
          </div>
          <div className="w-full sm:w-56 h-2 rounded-full bg-bg-surface2 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-teal to-violet"
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
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${sevDot[r.severity]}`} />
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-sm font-medium text-text-primary">{r.title}</h3>
                            <span className="text-[10px] font-mono uppercase tracking-wide text-text-faint px-1.5 py-0.5 rounded border border-border">
                              {r.severity}
                            </span>
                          </div>
                          <p className="text-xs text-text-muted mt-1.5 leading-relaxed">{r.detail}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 shrink-0 pl-6 sm:pl-0">
                        <div className="text-right">
                          <div className="font-mono text-sm text-teal tabular">−${r.savings.toFixed(2)}</div>
                          <div className="text-[10px] text-text-faint">per month</div>
                        </div>
                        <button
                          onClick={() => apply(r.id)}
                          disabled={isApplied}
                          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium transition-colors ${
                            isApplied
                              ? "bg-teal/15 text-teal border border-teal/30"
                              : "bg-bg-surface3 text-text-primary border border-border hover:border-teal/40 hover:text-teal"
                          }`}
                        >
                          {isApplied ? (
                            <>
                              <Check size={13} /> Applied
                            </>
                          ) : (
                            <>
                              {r.action} <ArrowRight size={13} />
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
              <p className="text-sm text-text-muted">All recommendations actioned. New scans run every 6 hours.</p>
            </Card>
          )}
        </div>
      </div>
    </PageTransition>
  );
}
