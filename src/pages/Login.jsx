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
  const [email, setEmail] = useState("trader@fxology.com");
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

    // Simulate authenticating against Fxology Engine API
    setTimeout(() => {
      setIsLoading(false);
      setSuccessMessage("Authentication successful! Welcome to Fxology Platform.");
      setTimeout(() => {
        if (onLogin) onLogin();
        navigate("/");
      }, 600);
    }, 900);
  };

  const handleDemoFill = () => {
    setEmail("trader@fxology.com");
    setPassword("fxology2026!matrix");
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
    <div className="min-h-screen w-full bg-[#080C0B] text-white flex items-center justify-center p-4 sm:p-6 lg:p-10 relative overflow-hidden font-body">
      {/* Background Neon Green Ambient Effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#22C55E]/15 rounded-full blur-[140px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#10B981]/10 rounded-full blur-[150px] pointer-events-none translate-y-1/3" />
      <div className="absolute inset-0 bg-grid opacity-70 pointer-events-none" />

      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-5xl rounded-3xl border border-[#1A2E26] bg-[#0F1714]/90 backdrop-blur-xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 relative z-10"
      >
        {/* Left Side: Brand Showcase & Value Highlights */}
        <div className="lg:col-span-5 bg-[#050807] p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-[#1A2E26] flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#22C55E]/10 rounded-full blur-2xl pointer-events-none" />

          <div>
            {/* Logo Header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#22C55E] to-[#15803D] flex items-center justify-center shadow-lg shadow-[#22C55E]/30">
                <span className="font-display font-black text-sm text-[#050807]">Fx</span>
              </div>
              <div>
                <h1 className="font-display font-extrabold text-xl tracking-tight text-white">
                  Fx<span className="text-[#4ADE80]">ology</span>
                </h1>
                <p className="text-[11px] font-mono tracking-widest text-[#4ADE80] font-bold uppercase">
                  PROP PLATFORM v3.4
                </p>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#15221E] border border-[#22C55E]/30 text-xs font-semibold text-[#4ADE80]">
                <Sparkles size={13} /> High Capital Prop Trading
              </span>
              <h2 className="font-display text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-snug">
                No Time Limit Prop Firm — <span className="text-[#4ADE80] glow-text">Conquer the market</span>
              </h2>
              <p className="text-xs text-text-muted leading-relaxed">
                Trade on Forex and crypto markets with funded accounts up to $640,000 USD and automated cloud infrastructure management.
              </p>
            </div>

            {/* Live Stats Preview Cards */}
            <div className="space-y-3">
              <div className="p-3.5 rounded-2xl bg-[#0F1714] border border-[#1A2E26] flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center shrink-0">
                  <TrendingDown size={18} className="text-[#4ADE80]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white tabular">$400K+ Paid Out</div>
                  <div className="text-[11px] text-text-muted">15,000+ verified active traders</div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#0F1714] border border-[#1A2E26] flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center shrink-0">
                  <ShieldCheck size={18} className="text-[#4ADE80]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white tabular">16h Avg Payout Time</div>
                  <div className="text-[11px] text-text-muted">100% Guaranteed profit share</div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Badge */}
          <div className="mt-8 pt-6 border-t border-[#1A2E26] flex items-center justify-between text-[11px] text-text-muted">
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-[#22C55E] live-dot" /> 150+ Countries Active
            </span>
            <span className="font-mono text-[#4ADE80] font-semibold">The Lab™ Engine</span>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-between bg-[#0F1714]">
          <div>
            {/* Top Navigation Tabs */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#1A2E26]">
              <div className="flex items-center gap-2 bg-[#050807] p-1 rounded-xl border border-[#1A2E26]">
                <button
                  onClick={() => setActiveTab("login")}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === "login"
                      ? "bg-[#1B2E28] text-[#4ADE80] shadow-sm border border-[#22C55E]/40"
                      : "text-text-muted hover:text-white"
                  }`}
                >
                  Account Sign In
                </button>
                <button
                  onClick={() => setActiveTab("sso")}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === "sso"
                      ? "bg-[#1B2E28] text-[#4ADE80] shadow-sm border border-[#22C55E]/40"
                      : "text-text-muted hover:text-white"
                  }`}
                >
                  Enterprise SSO
                </button>
              </div>

              <button
                onClick={handleDemoFill}
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-[#050807] bg-[#22C55E] hover:bg-[#16A34A] px-3.5 py-1.5 rounded-full shadow-md shadow-[#22C55E]/20 transition-all"
                title="Autofill demo login credentials"
              >
                <Sparkles size={13} />
                Demo Credentials
              </button>
            </div>

            {/* Title */}
            <div className="mb-6">
              <h2 className="font-display text-2xl font-extrabold text-white tracking-tight">
                {activeTab === "login" ? "Sign in to Fxology" : "Single Sign-On Authentication"}
              </h2>
              <p className="text-xs text-text-muted mt-1">
                {activeTab === "login"
                  ? "Enter your credentials to access your trader account and control plane."
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
                  className="mb-5 p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2.5"
                >
                  <AlertCircle size={16} className="shrink-0 text-red-400" />
                  <span>{error}</span>
                </motion.div>
              )}
              {successMessage && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-5 p-3.5 rounded-xl bg-[#22C55E]/15 border border-[#22C55E]/30 text-[#4ADE80] text-xs flex items-center gap-2.5"
                >
                  <CheckCircle2 size={16} className="shrink-0 text-[#4ADE80]" />
                  <span>{successMessage}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Login Tab Content */}
            {activeTab === "login" ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-white mb-1.5">Trader Work Email</label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-faint" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="trader@fxology.com"
                      required
                      className="w-full bg-[#050807] border border-[#1A2E26] focus:border-[#22C55E] focus:ring-2 focus:ring-[#22C55E]/20 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white outline-none transition-all placeholder:text-text-faint"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-semibold text-white">Password</label>
                    <button
                      type="button"
                      onClick={() => setShowForgotModal(true)}
                      className="text-xs text-[#4ADE80] font-medium hover:underline"
                    >
                      Forgot password?
                    </button>
                  </div>
                  <div className="relative">
                    <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-faint" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      required
                      className="w-full bg-[#050807] border border-[#1A2E26] focus:border-[#22C55E] focus:ring-2 focus:ring-[#22C55E]/20 rounded-xl pl-10 pr-10 py-2.5 text-xs text-white outline-none transition-all placeholder:text-text-faint"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-text-faint hover:text-white transition-colors"
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
                      className="w-4 h-4 rounded border-[#1A2E26] text-[#22C55E] focus:ring-[#22C55E] bg-[#050807]"
                    />
                    <span className="text-xs text-text-muted">Remember this session</span>
                  </label>

                  <button
                    type="button"
                    onClick={handleDemoFill}
                    className="sm:hidden text-xs text-[#4ADE80] font-semibold underline"
                  >
                    Autofill Demo
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 px-5 rounded-xl bg-[#22C55E] hover:bg-[#16A34A] text-[#050807] font-bold text-xs tracking-wide shadow-lg shadow-[#22C55E]/30 hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 mt-2"
                >
                  {isLoading ? (
                    <div className="w-4 h-4 border-2 border-[#050807] border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Sign In to Fxology</span>
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
                  className="w-full p-3.5 rounded-xl border border-[#1A2E26] bg-[#050807] hover:bg-[#15221E] transition-colors flex items-center justify-between text-xs font-semibold text-white"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-[#22C55E]/15 border border-[#22C55E]/30 text-[#4ADE80] flex items-center justify-center font-bold font-mono">
                      AWS
                    </div>
                    <span>AWS IAM Identity Center (SSO)</span>
                  </div>
                  <ArrowRight size={15} className="text-text-faint" />
                </button>

                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full p-3.5 rounded-xl border border-[#1A2E26] bg-[#050807] hover:bg-[#15221E] transition-colors flex items-center justify-between text-xs font-semibold text-white"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-blue-500/15 border border-blue-500/30 text-blue-400 flex items-center justify-center">
                      <Building2 size={16} />
                    </div>
                    <span>Microsoft Azure Active Directory</span>
                  </div>
                  <ArrowRight size={15} className="text-text-faint" />
                </button>

                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full p-3.5 rounded-xl border border-[#1A2E26] bg-[#050807] hover:bg-[#15221E] transition-colors flex items-center justify-between text-xs font-semibold text-white"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-[#4ADE80] flex items-center justify-center font-bold">
                      G
                    </div>
                    <span>Google Workspace SSO</span>
                  </div>
                  <ArrowRight size={15} className="text-text-faint" />
                </button>
              </div>
            )}

            {/* Quick Demo Footer Action */}
            <div className="mt-8 pt-6 border-t border-[#1A2E26] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-muted">
              <span>Need help signing in? Contact Support</span>
              <button
                onClick={() => {
                  if (onLogin) onLogin();
                  navigate("/");
                }}
                className="text-[#4ADE80] font-semibold hover:underline flex items-center gap-1"
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
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-md bg-[#0F1714] rounded-2xl border border-[#1A2E26] p-6 shadow-2xl space-y-4 text-white"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center">
                  <KeyRound size={20} className="text-[#4ADE80]" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-white">Reset Password</h3>
                  <p className="text-xs text-text-muted">Enter your registered work email address</p>
                </div>
              </div>

              {forgotSent ? (
                <div className="p-4 rounded-xl bg-[#22C55E]/15 border border-[#22C55E]/30 text-[#4ADE80] text-xs flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#4ADE80] shrink-0" />
                  <span>Password reset instructions have been sent to your inbox.</span>
                </div>
              ) : (
                <form onSubmit={handleForgotSubmit} className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-white mb-1">Email</label>
                    <input
                      type="email"
                      value={forgotEmail}
                      onChange={(e) => setForgotEmail(e.target.value)}
                      placeholder="trader@fxology.com"
                      required
                      className="w-full bg-[#050807] border border-[#1A2E26] focus:border-[#22C55E] rounded-xl px-3.5 py-2 text-xs text-white outline-none"
                    />
                  </div>
                  <div className="flex items-center justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setShowForgotModal(false)}
                      className="px-3.5 py-2 rounded-xl text-xs font-medium text-text-muted hover:bg-[#15221E]"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-[#22C55E] hover:bg-[#16A34A] text-[#050807] text-xs font-bold shadow-md"
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
