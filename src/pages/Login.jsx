import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  CloudCog,
  Lock,
  Mail,
  Eye,
  EyeOff,
  Sparkles,
  ShieldCheck,
  TrendingDown,
  ArrowRight,
  KeyRound,
  CheckCircle2,
  AlertCircle,
  Building2,
} from "lucide-react";

export default function Login({ onLogin }) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("login"); // "login" | "sso"
  const [email, setEmail] = useState("admin@finops.cloud");
  const [password, setPassword] = useState("••••••••");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotSent, setForgotSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter both email address and password.");
      return;
    }

    setIsLoading(true);

    // Simulate authenticating against FinOps Cloud API
    setTimeout(() => {
      setIsLoading(false);
      setSuccessMessage("Authentication successful! Welcome to FinOps Cloud Control Plane.");
      setTimeout(() => {
        if (onLogin) onLogin();
        navigate("/");
      }, 600);
    }, 900);
  };

  const handleDemoFill = () => {
    setEmail("admin@finops.cloud");
    setPassword("finops2026!gold");
    setError("");
  };

  const handleForgotSubmit = (e) => {
    e.preventDefault();
    if (!forgotEmail) return;
    setForgotSent(true);
    setTimeout(() => {
      setShowForgotModal(false);
      setForgotSent(false);
      setForgotEmail("");
    }, 2000);
  };

  return (
    <div className="min-h-screen w-full bg-[#FAF8F5] text-[#1C1917] flex items-center justify-center p-4 sm:p-6 lg:p-10 relative overflow-hidden font-body">
      {/* Background Gold Ambient Effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#D4AF37]/15 to-[#FDE68A]/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-[#D97706]/10 to-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none translate-y-1/3" />
      <div className="absolute inset-0 bg-grid opacity-70 pointer-events-none" />

      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-5xl rounded-3xl border border-[#D5CCA8] bg-white shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 relative z-10"
      >
        {/* Left Side: Brand Showcase & Value Highlights */}
        <div className="lg:col-span-5 bg-gradient-to-br from-[#F5F1E6] via-[#FAF6ED] to-[#EFE7D5] p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-[#E5DEC9] flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none" />

          <div>
            {/* Logo Header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#D4AF37] via-[#C59B27] to-[#B45309] flex items-center justify-center shadow-md shadow-[#D4AF37]/30">
                <CloudCog size={24} className="text-white" strokeWidth={2.2} />
              </div>
              <div>
                <h1 className="font-display font-bold text-xl tracking-tight text-[#1C1917]">
                  FinOps<span className="text-[#C59B27] font-semibold">Cloud</span>
                </h1>
                <p className="text-[11px] font-mono tracking-widest text-[#92400E] font-medium uppercase">
                  Control Plane v3.2
                </p>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FDF4DB] border border-[#D5CCA8] text-xs font-semibold text-[#92400E]">
                <Sparkles size={13} className="text-[#C59B27]" /> Intelligent Cloud Governance
              </span>
              <h2 className="font-display text-2xl lg:text-3xl font-extrabold text-[#1C1917] tracking-tight leading-snug">
                Maximize Cloud Efficiency with AI Rightsizing.
              </h2>
              <p className="text-xs text-[#57534E] leading-relaxed">
                Seamless real-time cost tracking, automated container instance optimization, and instant anomaly prevention across AWS, Azure & Kubernetes.
              </p>
            </div>

            {/* Live Stats Preview Cards */}
            <div className="space-y-3">
              <div className="p-3.5 rounded-2xl bg-white/80 border border-[#E5DEC9] backdrop-blur-sm shadow-sm flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
                  <TrendingDown size={18} className="text-emerald-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#1C1917] tabular">34.8% Average Cost Reduction</div>
                  <div className="text-[11px] text-[#78716C]">Verified across 420+ active workloads</div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/80 border border-[#E5DEC9] backdrop-blur-sm shadow-sm flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-amber-50 border border-[#D5CCA8] flex items-center justify-center shrink-0">
                  <ShieldCheck size={18} className="text-[#C59B27]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#1C1917] tabular">Real-Time Anomaly Guard</div>
                  <div className="text-[11px] text-[#78716C]">Prevents unexpected budget spikes</div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Badge */}
          <div className="mt-8 pt-6 border-t border-[#E5DEC9]/80 flex items-center justify-between text-[11px] text-[#78716C]">
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 live-dot" /> SOC2 Type II Certified
            </span>
            <span className="font-mono text-[#92400E] font-medium">AWS & Azure Partner</span>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-between bg-white">
          <div>
            {/* Top Navigation Tabs */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E5DEC9]">
              <div className="flex items-center gap-2 bg-[#F6F1E7] p-1 rounded-xl border border-[#E5DEC9]">
                <button
                  onClick={() => setActiveTab("login")}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === "login"
                      ? "bg-white text-[#1C1917] shadow-sm border border-[#D5CCA8]"
                      : "text-[#57534E] hover:text-[#1C1917]"
                  }`}
                >
                  Account Sign In
                </button>
                <button
                  onClick={() => setActiveTab("sso")}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === "sso"
                      ? "bg-white text-[#1C1917] shadow-sm border border-[#D5CCA8]"
                      : "text-[#57534E] hover:text-[#1C1917]"
                  }`}
                >
                  Enterprise SSO
                </button>
              </div>

              <button
                onClick={handleDemoFill}
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-[#92400E] bg-[#FDF4DB] hover:bg-[#FCEBAE] px-3 py-1.5 rounded-lg border border-[#D5CCA8] transition-colors"
                title="Autofill demo login credentials"
              >
                <Sparkles size={13} className="text-[#C59B27]" />
                Demo Credentials
              </button>
            </div>

            {/* Title */}
            <div className="mb-6">
              <h2 className="font-display text-2xl font-extrabold text-[#1C1917] tracking-tight">
                {activeTab === "login" ? "Sign in to FinOps Cloud" : "Single Sign-On Authentication"}
              </h2>
              <p className="text-xs text-[#57534E] mt-1">
                {activeTab === "login"
                  ? "Enter your email and password to access the cost intelligence dashboard."
                  : "Connect using your corporate identity provider (AWS IAM, Okta, Azure AD)."}
              </p>
            </div>

            {/* Success / Error Messages */}
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-5 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2.5"
                >
                  <AlertCircle size={16} className="shrink-0 text-red-600" />
                  <span>{error}</span>
                </motion.div>
              )}
              {successMessage && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-5 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2.5"
                >
                  <CheckCircle2 size={16} className="shrink-0 text-emerald-600" />
                  <span>{successMessage}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Login Tab Content */}
            {activeTab === "login" ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1C1917] mb-1.5">Work Email Address</label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#78716C]" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@organization.cloud"
                      required
                      className="w-full bg-[#FAF8F5] border border-[#E5DEC9] focus:border-[#C59B27] focus:ring-2 focus:ring-[#D4AF37]/20 rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#1C1917] outline-none transition-all placeholder:text-[#948B80]"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-semibold text-[#1C1917]">Password</label>
                    <button
                      type="button"
                      onClick={() => setShowForgotModal(true)}
                      className="text-xs text-[#92400E] font-medium hover:underline"
                    >
                      Forgot password?
                    </button>
                  </div>
                  <div className="relative">
                    <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#78716C]" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      required
                      className="w-full bg-[#FAF8F5] border border-[#E5DEC9] focus:border-[#C59B27] focus:ring-2 focus:ring-[#D4AF37]/20 rounded-xl pl-10 pr-10 py-2.5 text-xs text-[#1C1917] outline-none transition-all placeholder:text-[#948B80]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#78716C] hover:text-[#1C1917] transition-colors"
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={remember}
                      onChange={(e) => setRemember(e.target.checked)}
                      className="w-4 h-4 rounded border-[#D5CCA8] text-[#C59B27] focus:ring-[#C59B27]"
                    />
                    <span className="text-xs text-[#57534E]">Remember this session</span>
                  </label>

                  <button
                    type="button"
                    onClick={handleDemoFill}
                    className="sm:hidden text-xs text-[#92400E] font-semibold underline"
                  >
                    Autofill Demo
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 px-5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B45309] hover:from-[#C59B27] hover:to-[#92400E] text-white font-semibold text-xs tracking-wide shadow-lg shadow-[#D4AF37]/25 hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 mt-2"
                >
                  {isLoading ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Sign In to Control Plane</span>
                      <ArrowRight size={15} />
                    </>
                  )}
                </button>
              </form>
            ) : (
              /* SSO Tab Content */
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full p-3.5 rounded-xl border border-[#E5DEC9] bg-[#FAF8F5] hover:bg-[#F5F1E6] transition-colors flex items-center justify-between text-xs font-semibold text-[#1C1917]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-700 flex items-center justify-center font-bold font-mono">
                      AWS
                    </div>
                    <span>AWS IAM Identity Center (SSO)</span>
                  </div>
                  <ArrowRight size={15} className="text-[#78716C]" />
                </button>

                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full p-3.5 rounded-xl border border-[#E5DEC9] bg-[#FAF8F5] hover:bg-[#F5F1E6] transition-colors flex items-center justify-between text-xs font-semibold text-[#1C1917]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-700 flex items-center justify-center">
                      <Building2 size={16} />
                    </div>
                    <span>Microsoft Azure Active Directory</span>
                  </div>
                  <ArrowRight size={15} className="text-[#78716C]" />
                </button>

                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full p-3.5 rounded-xl border border-[#E5DEC9] bg-[#FAF8F5] hover:bg-[#F5F1E6] transition-colors flex items-center justify-between text-xs font-semibold text-[#1C1917]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 flex items-center justify-center font-bold">
                      G
                    </div>
                    <span>Google Workspace SSO</span>
                  </div>
                  <ArrowRight size={15} className="text-[#78716C]" />
                </button>
              </div>
            )}

            {/* Quick Demo Footer Action */}
            <div className="mt-8 pt-6 border-t border-[#E5DEC9] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#78716C]">
              <span>Need help signing in? Contact IT Support</span>
              <button
                onClick={() => {
                  if (onLogin) onLogin();
                  navigate("/");
                }}
                className="text-[#92400E] font-semibold hover:underline flex items-center gap-1"
              >
                <span>Explore Dashboard directly</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Forgot Password Modal */}
      <AnimatePresence>
        {showForgotModal && (
          <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-md bg-white rounded-2xl border border-[#D5CCA8] p-6 shadow-2xl space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FDF4DB] border border-[#D5CCA8] flex items-center justify-center">
                  <KeyRound size={20} className="text-[#C59B27]" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-[#1C1917]">Reset Password</h3>
                  <p className="text-xs text-[#57534E]">Enter your registered work email address</p>
                </div>
              </div>

              {forgotSent ? (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                  <span>Password reset instructions have been sent to your inbox.</span>
                </div>
              ) : (
                <form onSubmit={handleForgotSubmit} className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#1C1917] mb-1">Email</label>
                    <input
                      type="email"
                      value={forgotEmail}
                      onChange={(e) => setForgotEmail(e.target.value)}
                      placeholder="admin@finops.cloud"
                      required
                      className="w-full bg-[#FAF8F5] border border-[#E5DEC9] focus:border-[#C59B27] rounded-xl px-3.5 py-2 text-xs text-[#1C1917] outline-none"
                    />
                  </div>
                  <div className="flex items-center justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setShowForgotModal(false)}
                      className="px-3.5 py-2 rounded-xl text-xs font-medium text-[#57534E] hover:bg-[#F6F1E7]"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-[#C59B27] hover:bg-[#B45309] text-white text-xs font-semibold shadow-md"
                    >
                      Send Reset Link
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
