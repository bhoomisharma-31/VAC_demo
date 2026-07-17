# FinOps Cloud — Frontend

Cloud cost optimization & infrastructure management dashboard, built with React + Vite.

## Stack
- React 19 + Vite
- Tailwind CSS (custom dark "control plane" theme — deep navy, teal + violet accents, mono data type)
- Framer Motion (page transitions, animated meters, active-nav pill)
- Recharts (cost trend, breakdown, forecast charts)
- Lucide React (icons)
- React Router (client-side routing)

## Pages
- **Overview** — live cost pulse, budget radial, KPI row, top recommendations, recent alerts, idle instance strip
- **EC2 Instances** — fleet table with CPU/memory meters, idle detection, filters
- **Containers** — Docker container cards with CPU/memory, restart tracking
- **Kubernetes** — deployment list with replica health, namespace tagging
- **Cost Estimation** — interactive calculator + actual-vs-forecast + spend-by-environment charts
- **Recommendations** — actionable savings cards you can "apply" (animates out, updates captured savings)
- **Reports & Analytics** — spend trend, exportable report list, CI/CD deploy history
- **Alerts** — filterable critical/warning/info notification feed

## Run locally
```bash
npm install
npm run dev
```
Then open http://localhost:5173

## Build for production
```bash
npm run build
npm run preview
```

## Notes
- All data in `src/data/mockData.js` is mock data — wire it up to your backend/API layer (Spring Boot / Node.js per the proposal) by replacing the imports with real fetch calls or a data-fetching hook.
- Design tokens (colors, fonts, shadows) live in `tailwind.config.js`.
