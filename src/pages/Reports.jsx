import { FileText, Download, CheckCircle2, XCircle } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { motion } from "framer-motion";
import Topbar from "../components/Topbar";
import { Card, PageTransition, SectionHeading } from "../components/ui";
import { costTrend, deployHistory } from "../data/mockData";

const reports = [
  { name: "Monthly Cost Summary — June 2026", size: "412 KB", date: "Jul 1, 2026" },
  { name: "Idle Resource Audit — Q2 2026", size: "218 KB", date: "Jun 28, 2026" },
  { name: "Kubernetes Utilization Report", size: "356 KB", date: "Jun 20, 2026" },
  { name: "Optimization Savings Log", size: "129 KB", date: "Jun 14, 2026" },
];

export default function Reports() {
  return (
    <PageTransition>
      <Topbar title="Reports & Analytics" subtitle="Historical trends and exportable summaries" />

      <div className="pt-6 space-y-6">
        <Card className="p-6">
          <SectionHeading eyebrow="Trend" title="Spend trajectory, last 12 days" />
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={costTrend} margin={{ left: -20 }}>
              <CartesianGrid stroke="#1A2E26" vertical={false} />
              <XAxis dataKey="day" tick={{ fill: "#9CA3AF", fontSize: 10, fontFamily: "JetBrains Mono" }} axisLine={false} tickLine={false} interval={1} />
              <YAxis tick={{ fill: "#9CA3AF", fontSize: 10, fontFamily: "JetBrains Mono" }} axisLine={false} tickLine={false} width={36} />
              <Tooltip contentStyle={{ background: "#050807", border: "1px solid #22C55E", borderRadius: 10, fontSize: 12, color: "#FFF" }} />
              <Line type="monotone" dataKey="cost" stroke="#22C55E" strokeWidth={2.5} dot={{ r: 3.5, fill: "#050807", stroke: "#4ADE80", strokeWidth: 2 }} />
              <Line type="monotone" dataKey="forecast" stroke="#8B5CF6" strokeWidth={1.5} strokeDasharray="4 4" dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <SectionHeading eyebrow="Exports" title="Generated reports" />
            <div className="space-y-2.5">
              {reports.map((r, idx) => (
                <motion.div
                  key={r.name}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="flex items-center gap-3 p-3 rounded-2xl border border-[#1A2E26] bg-[#050807]/60 hover:border-[#22C55E]/40 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center text-[#4ADE80] shrink-0">
                    <FileText size={15} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs text-white truncate font-semibold">{r.name}</div>
                    <div className="text-[10px] font-mono text-text-muted mt-0.5">{r.date} · {r.size}</div>
                  </div>
                  <button className="w-8 h-8 rounded-lg flex items-center justify-center text-text-muted group-hover:text-[#4ADE80] transition-colors">
                    <Download size={14} />
                  </button>
                </motion.div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <SectionHeading eyebrow="CI/CD" title="Deployment history" />
            <div className="space-y-2.5">
              {deployHistory.map((d, idx) => (
                <motion.div
                  key={d.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="flex items-center gap-3 p-3 rounded-2xl border border-[#1A2E26] bg-[#050807]/60"
                >
                  {d.status === "success" ? (
                    <CheckCircle2 size={16} className="text-[#4ADE80] shrink-0" />
                  ) : (
                    <XCircle size={16} className="text-red-400 shrink-0" />
                  )}
                  <div className="min-w-0 flex-1">
                    <div className="text-xs text-white font-semibold">
                      {d.app} <span className="text-text-muted font-mono">{d.version}</span>
                    </div>
                    <div className="text-[10px] font-mono text-text-muted mt-0.5">{d.by} · {d.time}</div>
                  </div>
                  <span className="text-[10px] font-mono text-text-muted">{d.id}</span>
                </motion.div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </PageTransition>
  );
}
