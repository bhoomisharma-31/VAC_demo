import { useState, useMemo } from "react";
import { ComposedChart, Bar, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, BarChart } from "recharts";
import { Calculator, Wallet, TrendingUp } from "lucide-react";
import Topbar from "../components/Topbar";
import { Card, PageTransition, SectionHeading } from "../components/ui";
import { costTrend, costByEnv } from "../data/mockData";

const catalog = [
  { key: "t3.medium", label: "EC2 t3.medium", hourly: 0.038 },
  { key: "t3.large", label: "EC2 t3.large", hourly: 0.077 },
  { key: "m5.xlarge", label: "EC2 m5.xlarge", hourly: 0.17 },
  { key: "eks", label: "EKS cluster (base)", hourly: 0.1 },
  { key: "rds", label: "RDS db.t3.medium", hourly: 0.072 },
  { key: "s3", label: "S3 storage (per 100GB)", hourly: 0.032 },
];

export default function Cost() {
  const [counts, setCounts] = useState({ "t3.medium": 2, "t3.large": 2, "m5.xlarge": 1, eks: 1, rds: 1, s3: 3 });

  const monthly = useMemo(() => {
    return catalog.reduce((sum, item) => sum + item.hourly * 730 * (counts[item.key] || 0), 0);
  }, [counts]);

  return (
    <PageTransition>
      <Topbar title="Cost Estimation Engine" subtitle="Model spend before you provision it" />

      <div className="pt-6 space-y-6">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-6">
          <Card className="p-6">
            <SectionHeading eyebrow="Calculator" title="Estimate monthly infrastructure cost" />
            <div className="space-y-4">
              {catalog.map((item) => (
                <div key={item.key} className="flex items-center gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-text-primary">{item.label}</div>
                    <div className="text-[11px] font-mono text-text-faint">${item.hourly.toFixed(3)}/hr</div>
                  </div>
                  <div className="flex items-center gap-2 bg-bg-surface2 border border-border rounded-lg px-1">
                    <button
                      onClick={() => setCounts((c) => ({ ...c, [item.key]: Math.max(0, (c[item.key] || 0) - 1) }))}
                      className="w-7 h-7 rounded-md text-text-muted hover:text-teal hover:bg-bg-surface3 transition-colors"
                    >
                      −
                    </button>
                    <span className="w-6 text-center font-mono text-sm tabular text-text-primary">{counts[item.key] || 0}</span>
                    <button
                      onClick={() => setCounts((c) => ({ ...c, [item.key]: (c[item.key] || 0) + 1 }))}
                      className="w-7 h-7 rounded-md text-text-muted hover:text-teal hover:bg-bg-surface3 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-border/70 flex items-center justify-between">
              <div>
                <div className="text-[10px] font-mono tracking-widest text-text-faint uppercase">Estimated monthly cost</div>
                <div className="font-display text-3xl font-semibold tabular mt-1">
                  ${monthly.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                </div>
              </div>
              <div className="w-11 h-11 rounded-xl bg-teal/10 border border-teal/25 flex items-center justify-center">
                <Calculator size={18} className="text-teal" />
              </div>
            </div>
          </Card>

          <div className="space-y-6">
            <Card className="p-6">
              <SectionHeading eyebrow="Trend" title="Actual vs. forecast" />
              <ResponsiveContainer width="100%" height={200}>
                <ComposedChart data={costTrend} margin={{ left: -20 }}>
                  <CartesianGrid stroke="#E5DEC9" vertical={false} />
                  <XAxis dataKey="day" tick={{ fill: "#78716C", fontSize: 10, fontFamily: "JetBrains Mono" }} axisLine={false} tickLine={false} interval={1} />
                  <YAxis tick={{ fill: "#78716C", fontSize: 10, fontFamily: "JetBrains Mono" }} axisLine={false} tickLine={false} width={36} />
                  <Tooltip contentStyle={{ background: "#FFFFFF", border: "1px solid #D5CCA8", borderRadius: 10, fontSize: 12, boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }} />
                  <Bar dataKey="cost" fill="#D4AF37" radius={[4, 4, 0, 0]} barSize={16} />
                  <Line type="monotone" dataKey="forecast" stroke="#7C3AED" strokeWidth={2} dot={false} />
                </ComposedChart>
              </ResponsiveContainer>
            </Card>

            <Card className="p-6">
              <SectionHeading eyebrow="Environments" title="Spend by environment" />
              <ResponsiveContainer width="100%" height={140}>
                <BarChart data={costByEnv} layout="vertical" margin={{ left: 10 }}>
                  <XAxis type="number" hide />
                  <YAxis dataKey="env" type="category" tick={{ fill: "#57534E", fontSize: 11, fontFamily: "JetBrains Mono" }} axisLine={false} tickLine={false} width={70} />
                  <Tooltip contentStyle={{ background: "#FFFFFF", border: "1px solid #D5CCA8", borderRadius: 10, fontSize: 12, boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }} />
                  <Bar dataKey="cost" fill="#B45309" radius={[0, 6, 6, 0]} barSize={18} />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          <Info icon={Wallet} label="Blended hourly rate" value="$1.42/hr" />
          <Info icon={TrendingUp} label="Projected annual" value={`$${(monthly * 12).toLocaleString(undefined, { maximumFractionDigits: 0 })}`} />
          <Info icon={Calculator} label="Reserved instance savings" value="up to 38%" />
        </div>
      </div>
    </PageTransition>
  );
}

function Info({ icon: Icon, label, value }) {
  return (
    <Card className="p-5 flex items-center gap-4">
      <div className="w-10 h-10 rounded-xl border border-gold/40 bg-gold-light/60 flex items-center justify-center text-[#C59B27] shadow-glowGold">
        <Icon size={18} strokeWidth={2} />
      </div>
      <div>
        <div className="font-mono text-lg text-text-primary tabular font-bold">{value}</div>
        <div className="text-xs text-text-muted font-medium">{label}</div>
      </div>
    </Card>
  );
}
