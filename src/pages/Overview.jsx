import { Wallet, TrendingUp, Sparkles, Server as ServerIcon, Rocket, PiggyBank } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, PieChart, Pie, Cell } from "recharts";
import Topbar from "../components/Topbar";
import { Card, PageTransition, StatCard, SectionHeading, StatusBadge, Meter } from "../components/ui";
import { costTrend, costByService, costByEnv, kpis, recommendations, alerts, ec2Instances } from "../data/mockData";
import { motion } from "framer-motion";

export default function Overview() {
  const topRecs = recommendations.slice(0, 3);
  const topAlerts = alerts.slice(0, 4);
  const idleInstances = ec2Instances.filter((i) => i.idle);

  return (
    <PageTransition>
      <Topbar title="Cloud Overview" subtitle="Live posture across compute, containers, and spend" />

      <div className="pt-6 space-y-6">
        {/* Signature hero: cost pulse strip */}
        <Card className="p-0 overflow-hidden relative">
          <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
          <div className="relative grid lg:grid-cols-[1.3fr_1fr] gap-0">
            <div className="p-6 lg:p-7 border-b lg:border-b-0 lg:border-r border-border/70">
              <div className="flex items-center justify-between mb-1">
                <div className="text-[10px] font-mono tracking-widest text-text-faint uppercase flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal live-dot" /> Live cost pulse — 12 day trend
                </div>
                <span className="text-[11px] font-mono text-text-faint">AWS · ap-south-1</span>
              </div>
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-display text-3xl font-semibold tabular">$9,694.32</span>
                <span className="text-xs font-mono text-coral">▲ 8.2% vs last week</span>
              </div>
              <ResponsiveContainer width="100%" height={180}>
                <AreaChart data={costTrend} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="costFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2DD9C4" stopOpacity={0.35} />
                      <stop offset="100%" stopColor="#2DD9C4" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="#182339" vertical={false} />
                  <XAxis dataKey="day" tick={{ fill: "#5A6685", fontSize: 10, fontFamily: "JetBrains Mono" }} axisLine={false} tickLine={false} interval={1} />
                  <YAxis tick={{ fill: "#5A6685", fontSize: 10, fontFamily: "JetBrains Mono" }} axisLine={false} tickLine={false} width={40} />
                  <Tooltip
                    contentStyle={{ background: "#111A2E", border: "1px solid #212C46", borderRadius: 10, fontSize: 12, fontFamily: "JetBrains Mono" }}
                    labelStyle={{ color: "#8794AD" }}
                  />
                  <Area type="monotone" dataKey="forecast" stroke="#8B7FF6" strokeWidth={1.5} strokeDasharray="4 4" fill="none" />
                  <Area type="monotone" dataKey="cost" stroke="#2DD9C4" strokeWidth={2} fill="url(#costFill)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="p-6 lg:p-7 flex flex-col justify-center">
              <div className="text-[10px] font-mono tracking-widest text-text-faint uppercase mb-4">Budget utilization</div>
              <div className="flex items-center gap-5 mb-5">
                <RadialBudget pct={kpis.budgetUsedPct} />
                <div>
                  <div className="font-display text-2xl font-semibold tabular">{kpis.budgetUsedPct}%</div>
                  <div className="text-xs text-text-muted">of $12,480 monthly budget</div>
                </div>
              </div>
              <div className="space-y-2.5">
                {costByEnv.map((e) => (
                  <div key={e.env} className="flex items-center gap-3">
                    <span className="w-16 text-[11px] font-mono text-text-faint capitalize">{e.env}</span>
                    <Meter value={(e.cost / 6820) * 100} tone={e.env === "production" ? "teal" : e.env === "staging" ? "violet" : "amber"} />
                    <span className="w-14 text-right text-[11px] font-mono text-text-muted tabular">${e.cost}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* KPI row */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
          <StatCard index={0} icon={Wallet} label="Month to date" value="9,694" unit="USD" accent="teal" delta="▲ 8.2%" deltaTone="up" />
          <StatCard index={1} icon={TrendingUp} label="Forecast (EOM)" value="12,480" unit="USD" accent="violet" delta="on budget" deltaTone="neutral" />
          <StatCard index={2} icon={PiggyBank} label="Potential savings" value="325.60" unit="USD/mo" accent="amber" delta="5 actions" deltaTone="neutral" />
          <StatCard index={3} icon={ServerIcon} label="Idle resources" value={kpis.idleResources} accent="coral" delta="flagged" deltaTone="up" />
          <StatCard index={4} icon={Rocket} label="Active deployments" value={kpis.activeDeployments} accent="teal" delta="all healthy" deltaTone="down" />
          <StatCard index={5} icon={Sparkles} label="Optimization score" value="82" unit="/100" accent="violet" delta="▲ 4 pts" deltaTone="down" />
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Cost by service */}
          <Card className="p-6 lg:col-span-1">
            <SectionHeading eyebrow="Breakdown" title="Cost by service" />
            <ResponsiveContainer width="100%" height={190}>
              <PieChart>
                <Pie data={costByService} dataKey="value" nameKey="name" innerRadius={52} outerRadius={78} paddingAngle={3} strokeWidth={0}>
                  {costByService.map((s, i) => (
                    <Cell key={i} fill={s.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ background: "#111A2E", border: "1px solid #212C46", borderRadius: 10, fontSize: 12 }} />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {costByService.map((s) => (
                <div key={s.name} className="flex items-center gap-2 text-xs">
                  <span className="w-2 h-2 rounded-full" style={{ background: s.color }} />
                  <span className="text-text-muted">{s.name}</span>
                  <span className="ml-auto font-mono text-text-faint tabular">${s.value}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Top recommendations */}
          <Card className="p-6 lg:col-span-1">
            <SectionHeading eyebrow="FinOps engine" title="Top recommendations" />
            <div className="space-y-3">
              {topRecs.map((r) => (
                <div key={r.id} className="p-3 rounded-xl border border-border bg-bg-surface2/60">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-xs text-text-primary font-medium leading-snug">{r.title}</p>
                    <span className="text-[11px] font-mono text-teal shrink-0">−${r.savings}</span>
                  </div>
                  <p className="text-[11px] text-text-faint mt-1 leading-relaxed">{r.detail}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Idle resources + alerts */}
          <Card className="p-6 lg:col-span-1">
            <SectionHeading eyebrow="Attention" title="Recent alerts" />
            <div className="space-y-3">
              {topAlerts.map((a) => (
                <div key={a.id} className="flex items-start gap-3">
                  <span
                    className={`mt-1 w-1.5 h-1.5 rounded-full shrink-0 ${
                      a.level === "critical" ? "bg-coral" : a.level === "warning" ? "bg-amber" : "bg-teal"
                    }`}
                  />
                  <div className="min-w-0">
                    <p className="text-xs text-text-primary leading-snug">{a.message}</p>
                    <p className="text-[10px] text-text-faint font-mono mt-0.5">{a.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Idle instance strip */}
        <Card className="p-6">
          <SectionHeading eyebrow="EC2" title={`${idleInstances.length} idle instances detected`} />
          <div className="grid sm:grid-cols-3 gap-3">
            {idleInstances.map((i) => (
              <div key={i.id} className="p-3.5 rounded-xl border border-amber/20 bg-amber/5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-text-primary">{i.name}</span>
                  <StatusBadge status="idle" />
                </div>
                <div className="text-[11px] text-text-faint font-mono">{i.type} · {i.region}</div>
                <div className="flex items-center gap-3 mt-2 text-[11px] font-mono text-text-muted">
                  <span>CPU {i.cpu}%</span>
                  <span>${i.cost}/mo</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </PageTransition>
  );
}

function RadialBudget({ pct }) {
  const r = 34;
  const c = 2 * Math.PI * r;
  const offset = c - (pct / 100) * c;
  return (
    <svg width="88" height="88" viewBox="0 0 88 88">
      <circle cx="44" cy="44" r={r} fill="none" stroke="#182339" strokeWidth="8" />
      <motion.circle
        cx="44"
        cy="44"
        r={r}
        fill="none"
        stroke="url(#budgetGrad)"
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray={c}
        initial={{ strokeDashoffset: c }}
        animate={{ strokeDashoffset: offset }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        transform="rotate(-90 44 44)"
      />
      <defs>
        <linearGradient id="budgetGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2DD9C4" />
          <stop offset="100%" stopColor="#8B7FF6" />
        </linearGradient>
      </defs>
    </svg>
  );
}
