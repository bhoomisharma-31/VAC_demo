// Mock data simulating a live FinOps Cloud environment.

export const costTrend = [
  { day: "Jul 1", cost: 412, forecast: 420 },
  { day: "Jul 2", cost: 438, forecast: 425 },
  { day: "Jul 3", cost: 401, forecast: 430 },
  { day: "Jul 4", cost: 455, forecast: 435 },
  { day: "Jul 5", cost: 470, forecast: 440 },
  { day: "Jul 6", cost: 448, forecast: 445 },
  { day: "Jul 7", cost: 512, forecast: 450 },
  { day: "Jul 8", cost: 498, forecast: 455 },
  { day: "Jul 9", cost: 533, forecast: 460 },
  { day: "Jul 10", cost: 561, forecast: 465 },
  { day: "Jul 11", cost: 547, forecast: 470 },
  { day: "Jul 12", cost: 519, forecast: 475 },
];

export const costByService = [
  { name: "EC2", value: 5240, color: "#D4AF37" },
  { name: "S3", value: 1380, color: "#7C3AED" },
  { name: "Lambda", value: 620, color: "#D97706" },
  { name: "EKS", value: 2110, color: "#059669" },
  { name: "CloudWatch", value: 340, color: "#DC2626" },
];

export const costByEnv = [
  { env: "production", cost: 6820 },
  { env: "staging", cost: 2140 },
  { env: "dev", cost: 730 },
];

export const ec2Instances = [
  { id: "i-0a3f9c2b1", name: "web-prod-01", type: "t3.large", region: "ap-south-1", status: "running", cpu: 68, mem: 74, cost: 61.2, idle: false },
  { id: "i-0b7e1d4a2", name: "web-prod-02", type: "t3.large", region: "ap-south-1", status: "running", cpu: 71, mem: 69, cost: 61.2, idle: false },
  { id: "i-0c9f2e5b3", name: "api-gateway", type: "m5.xlarge", region: "ap-south-1", status: "running", cpu: 82, mem: 88, cost: 122.4, idle: false },
  { id: "i-0d1a3f6c4", name: "batch-worker-a", type: "c5.large", region: "us-east-1", status: "running", cpu: 4, mem: 12, cost: 54.8, idle: true },
  { id: "i-0e2b4a7d5", name: "batch-worker-b", type: "c5.large", region: "us-east-1", status: "stopped", cpu: 0, mem: 0, cost: 0, idle: false },
  { id: "i-0f3c5b8e6", name: "analytics-node", type: "r5.large", region: "eu-west-1", status: "running", cpu: 6, mem: 18, cost: 91.6, idle: true },
  { id: "i-1a4d6c9f7", name: "staging-app", type: "t3.medium", region: "ap-south-1", status: "running", cpu: 34, mem: 41, cost: 27.4, idle: false },
  { id: "i-1b5e7d0a8", name: "sandbox-test", type: "t3.small", region: "ap-south-1", status: "running", cpu: 2, mem: 9, cost: 13.6, idle: true },
];

export const dockerContainers = [
  { id: "c14a2f", name: "auth-service", image: "finops/auth:1.4.2", status: "running", cpu: 12, mem: 220, restarts: 0 },
  { id: "c25b3e", name: "billing-worker", image: "finops/billing:2.1.0", status: "running", cpu: 34, mem: 512, restarts: 1 },
  { id: "c36c4f", name: "notifier", image: "finops/notify:0.9.7", status: "running", cpu: 4, mem: 96, restarts: 0 },
  { id: "c47d51", name: "report-generator", image: "finops/reports:1.0.3", status: "exited", cpu: 0, mem: 0, restarts: 3 },
  { id: "c58e62", name: "cache-redis", image: "redis:7-alpine", status: "running", cpu: 8, mem: 340, restarts: 0 },
  { id: "c69f73", name: "recommendation-engine", image: "finops/reco:1.2.1", status: "running", cpu: 46, mem: 640, restarts: 0 },
];

export const k8sDeployments = [
  { name: "frontend-deploy", namespace: "production", replicas: "4/4", cpu: 62, mem: 58, image: "finops/frontend:3.2.0", updated: "2h ago" },
  { name: "backend-deploy", namespace: "production", replicas: "6/6", cpu: 74, mem: 81, image: "finops/backend:4.0.1", updated: "6h ago" },
  { name: "worker-deploy", namespace: "production", replicas: "3/4", cpu: 55, mem: 47, image: "finops/worker:2.3.4", updated: "1d ago" },
  { name: "cost-engine", namespace: "finops", replicas: "2/2", cpu: 28, mem: 39, image: "finops/cost-engine:1.1.0", updated: "3d ago" },
  { name: "staging-suite", namespace: "staging", replicas: "2/2", cpu: 19, mem: 24, image: "finops/suite:0.8.5", updated: "5h ago" },
];

export const recommendations = [
  {
    id: 1,
    severity: "high",
    title: "Stop 3 idle EC2 instances",
    detail: "batch-worker-a, analytics-node, and sandbox-test have averaged under 10% CPU for 14 days.",
    savings: 159.0,
    action: "Stop instances",
  },
  {
    id: 2,
    severity: "medium",
    title: "Right-size api-gateway",
    detail: "m5.xlarge is running at 82% CPU peak but 40% average — an m5.large would fit the sustained load.",
    savings: 61.2,
    action: "Resize instance",
  },
  {
    id: 3,
    severity: "medium",
    title: "Remove 6 unattached EBS volumes",
    detail: "Volumes have had zero read/write operations since detachment over 30 days ago.",
    savings: 44.5,
    action: "Delete volumes",
  },
  {
    id: 4,
    severity: "low",
    title: "Move cold S3 objects to Glacier",
    detail: "2.1 TB of objects in finops-archive have not been accessed in over 90 days.",
    savings: 38.9,
    action: "Apply lifecycle rule",
  },
  {
    id: 5,
    severity: "low",
    title: "Consolidate staging replicas",
    detail: "worker-deploy is provisioned for 4 replicas but staging traffic supports 2.",
    savings: 22.0,
    action: "Scale down",
  },
];

export const alerts = [
  { id: 1, type: "cost", level: "critical", message: "Daily spend exceeded budget threshold by 14%", time: "12 min ago" },
  { id: 2, type: "infra", level: "warning", message: "batch-worker-b instance stopped unexpectedly", time: "1 hr ago" },
  { id: 3, type: "deploy", level: "info", message: "backend-deploy rolled out v4.0.1 successfully", time: "6 hr ago" },
  { id: 4, type: "infra", level: "warning", message: "report-generator container restarted 3 times", time: "9 hr ago" },
  { id: 5, type: "cost", level: "info", message: "Weekly cost report generated and emailed", time: "1 day ago" },
];

export const deployHistory = [
  { id: "d-2291", app: "backend-deploy", version: "v4.0.1", status: "success", by: "GitHub Actions", time: "6h ago" },
  { id: "d-2290", app: "frontend-deploy", version: "v3.2.0", status: "success", by: "GitHub Actions", time: "2h ago" },
  { id: "d-2289", app: "cost-engine", version: "v1.1.0", status: "success", by: "GitHub Actions", time: "3d ago" },
  { id: "d-2288", app: "worker-deploy", version: "v2.3.4", status: "failed", by: "GitHub Actions", time: "1d ago" },
  { id: "d-2287", app: "staging-suite", version: "v0.8.5", status: "success", by: "GitHub Actions", time: "5h ago" },
];

export const kpis = {
  monthToDateCost: 9694.32,
  forecastCost: 12480.0,
  potentialSavings: 325.6,
  idleResources: 6,
  activeDeployments: 5,
  budgetUsedPct: 78,
};
