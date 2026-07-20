import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Shield, TrendingUp, CheckCircle, Smartphone, Globe2, Clock, Zap, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function FxologyHero() {
  const [activeStep, setActiveStep] = useState(2); // 1, 2, 3
  const [showCookie, setShowCookie] = useState(true);

  const tickerItems = [
    { name: "Ethereum", price: "3,482 USD", change: "+2.01%", up: true },
    { name: "Solana", price: "148.50 USD", change: "+3.45%", up: true },
    { name: "BNB", price: "582.10 USD", change: "-1.04%", up: false },
    { name: "Tether", price: "1.00 USD", change: "+0.01%", up: true },
    { name: "Bitcoin", price: "64,280 USD", change: "+4.12%", up: true },
    { name: "Cardano", price: "0.42 USD", change: "-2.01%", up: false },
    { name: "XRP", price: "0.58 USD", change: "+1.85%", up: true },
  ];

  return (
    <div className="relative w-full text-white font-body overflow-hidden pb-12">
      {/* Formula & Floating Graphic Grid Overlay */}
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#22C55E]/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Floating Ambient Formulas from Video */}
      <div className="absolute top-24 left-12 font-mono text-[#22C55E]/20 text-sm pointer-events-none select-none">
        (12+12)
      </div>
      <div className="absolute top-44 left-24 font-mono text-[#22C55E]/25 text-lg pointer-events-none select-none">
        -15+6
      </div>
      <div className="absolute top-64 left-16 border border-[#22C55E]/20 rounded-lg p-2 font-mono text-[#22C55E]/30 text-xs pointer-events-none select-none">
        24
      </div>
      <div className="absolute top-28 right-20 font-mono text-[#22C55E]/25 text-base pointer-events-none select-none">
        12
      </div>
      <div className="absolute top-52 right-32 font-mono text-[#22C55E]/20 text-sm pointer-events-none select-none">
        17+6-4
      </div>
      <div className="absolute top-80 right-16 border border-[#22C55E]/20 rounded-lg p-3 font-mono text-[#22C55E]/30 text-xs pointer-events-none select-none">
        5x9 / 8
      </div>

      {/* Hero Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-16 text-center">
        {/* Top Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F1714] border border-[#22C55E]/30 text-xs text-text-muted mb-6 shadow-glowEmerald"
        >
          <span>Our Capital, Your</span>
          <span className="px-2 py-0.5 rounded-md bg-[#22C55E]/20 text-[#4ADE80] font-semibold border border-[#22C55E]/40">
            ❖ Success
          </span>
        </motion.div>

        {/* Hero Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.1] mb-6"
        >
          No Time Limit Prop Firm <br />
          <span className="text-[#4ADE80] glow-text">Conquer the market</span>
        </motion.h1>

        {/* Subtext Badges Pill Row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3 text-xs text-text-muted mb-8 font-medium"
        >
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0F1714] border border-[#1A2E26]">
            🧪 <span className="text-[#4ADE80] font-semibold">The Lab™</span> Native platform
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0F1714] border border-[#1A2E26]">
            📈 Fast progress
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0F1714] border border-[#1A2E26]">
            ⏱️ No time Limit Prop firm
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0F1714] border border-[#1A2E26]">
            ⚡ Unique programs
          </span>
        </motion.div>

        {/* Hero Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <Link
            to="/login"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#22C55E] hover:bg-[#16A34A] text-[#050807] font-bold text-xs tracking-wide shadow-lg shadow-[#22C55E]/30 hover:shadow-xl hover:shadow-[#22C55E]/40 transition-all duration-200"
          >
            <span>Start a challenge</span>
            <div className="w-5 h-5 rounded-full bg-[#050807] text-[#4ADE80] flex items-center justify-center">
              <ArrowRight size={12} />
            </div>
          </Link>

          <Link
            to="/login"
            className="px-6 py-3 rounded-full bg-[#0F1714] hover:bg-[#15221E] text-white font-semibold text-xs border border-[#1A2E26] hover:border-[#22C55E]/50 transition-all duration-200"
          >
            Free trial
          </Link>
        </motion.div>
      </div>

      {/* Marquee Live Market Ticker */}
      <div className="w-full bg-[#050807] border-y border-[#1A2E26] py-3 overflow-hidden mb-16 relative">
        <div className="animate-marquee whitespace-nowrap gap-6">
          {[...tickerItems, ...tickerItems].map((item, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0F1714] border border-[#1A2E26] text-xs font-mono shrink-0"
            >
              <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
              <span className="text-white font-bold">{item.name}</span>
              <span className="text-text-muted">{item.price}</span>
              <span className={`font-semibold ${item.up ? "text-[#4ADE80]" : "text-red-400"}`}>{item.change}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bento Stats Grid Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Traders from more than <br />
            <span className="text-[#4ADE80] glow-text">150 countries around the world</span> have registered
          </h2>
          <p className="text-xs text-text-muted mt-3 leading-relaxed">
            We provide unique trading programs for Forex traders, based upon which we search for the best options to work together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-6 rounded-2xl bg-[#0F1714]/90 border border-[#1A2E26] hover:border-[#22C55E]/50 transition-all group">
            <div className="font-display font-extrabold text-3xl text-white group-hover:text-[#4ADE80] transition-colors tabular">
              $400K<span className="text-[#4ADE80]">+</span>
            </div>
            <p className="text-xs text-text-muted mt-2 font-medium">Paid out to Fxology Traders</p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0F1714]/90 border border-[#1A2E26] hover:border-[#22C55E]/50 transition-all group">
            <div className="font-display font-extrabold text-3xl text-white group-hover:text-[#4ADE80] transition-colors tabular">
              15K<span className="text-[#4ADE80]">+</span>
            </div>
            <p className="text-xs text-text-muted mt-2 font-medium">No. of Fxology traders</p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0F1714]/90 border border-[#1A2E26] hover:border-[#22C55E]/50 transition-all group">
            <div className="font-display font-extrabold text-3xl text-white group-hover:text-[#4ADE80] transition-colors tabular">
              150<span className="text-[#4ADE80]">+</span>
            </div>
            <p className="text-xs text-text-muted mt-2 font-medium">No. of countries with traders registered</p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0F1714]/90 border border-[#1A2E26] hover:border-[#22C55E]/50 transition-all group">
            <div className="font-display font-extrabold text-3xl text-[#4ADE80] transition-colors tabular">
              16h
            </div>
            <p className="text-xs text-text-muted mt-2 font-medium">Avg payout processing time</p>
          </div>
        </div>
      </div>

      {/* Feature & Stacked Vertical Typography Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6 space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#15221E] border border-[#22C55E]/30 text-xs font-semibold text-[#4ADE80]">
            <Sparkles size={13} /> What is Fxology?
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-snug">
            Trade on Forex and other markets with capital up to <span className="text-[#4ADE80]">640,000 USD!</span>
          </h2>
          <p className="text-xs text-text-muted leading-relaxed">
            We provide unique trading programs for Forex traders, based upon which we search for the best options to work together. We provide you with Training accounts that you can use to trade and earn commission without the risk of losing your own funds!
          </p>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0F1714] to-[#15221E] border border-[#22C55E]/30 shadow-lg space-y-4">
            <h3 className="font-display font-bold text-xl text-white">
              Stop losing your own money, join us and start earning!
            </h3>
            <div className="flex items-center gap-3">
              <Link
                to="/login"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#22C55E] text-[#050807] font-bold text-xs shadow-md"
              >
                <span>Join Us</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                to="/login"
                className="px-5 py-2.5 rounded-full bg-[#050807] text-white font-semibold text-xs border border-[#1A2E26]"
              >
                Free trial
              </Link>
            </div>
          </div>
        </div>

        {/* Right Stacked Kinetic Typography Art from Video */}
        <div className="lg:col-span-6 relative flex flex-col items-center justify-center p-8 bg-[#050807] rounded-3xl border border-[#1A2E26] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#22C55E]/10 to-transparent pointer-events-none" />

          {/* 3D Infinity Graphic Overlay */}
          <div className="w-40 h-40 rounded-full border-4 border-[#22C55E]/30 absolute blur-sm animate-pulse" />

          <div className="space-y-1 text-center font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#22C55E] opacity-95 tracking-tighter leading-none select-none glow-text">
            <div>Start earning</div>
            <div className="opacity-80">Start earning</div>
            <div className="opacity-60">Start earning</div>
            <div className="opacity-40">Start earning</div>
            <div className="opacity-25">Start earning</div>
            <div className="opacity-15">Start earning</div>
          </div>
        </div>
      </div>

      {/* Interactive Step-by-Step ("How does it works?") Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">How does it works?</h2>
          <p className="text-xs text-text-muted mt-2">Your pathway to professional trading & infrastructure optimization</p>
        </div>

        {/* Step Tabs */}
        <div className="flex items-center justify-center gap-4 mb-8">
          {[1, 2, 3].map((step) => (
            <button
              key={step}
              onClick={() => setActiveStep(step)}
              className={`px-5 py-2 rounded-full text-xs font-mono font-bold transition-all ${
                activeStep === step
                  ? "bg-[#22C55E] text-[#050807] shadow-lg shadow-[#22C55E]/30"
                  : "bg-[#0F1714] text-text-muted border border-[#1A2E26] hover:text-white"
              }`}
            >
              [ STEP {step} ]
            </button>
          ))}
        </div>

        {/* Step Preview Mockup Card */}
        <div className="p-8 rounded-3xl bg-[#0F1714]/90 border border-[#22C55E]/30 max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative overflow-hidden">
          <div className="md:col-span-6 space-y-4">
            <span className="text-xs font-mono font-bold text-[#4ADE80]">Step {activeStep}</span>
            <h3 className="font-display font-bold text-2xl text-white">
              {activeStep === 1 && "Select Your Challenge & Strategy"}
              {activeStep === 2 && "Pass Training & Verify Performance"}
              {activeStep === 3 && "Earn Profit Share with Funded Account"}
            </h3>
            <p className="text-xs text-text-muted leading-relaxed">
              {activeStep === 1 && "Choose your desired funded capital target and set up your trading risk parameters."}
              {activeStep === 2 && "Your task at this stage is to fulfill the requirements of the given evaluation program."}
              {activeStep === 3 && "When you manage to successfully complete our training program, we cooperate with you on a funded account."}
            </p>
          </div>

          {/* Mobile App UI Mockup from Video */}
          <div className="md:col-span-6 bg-[#050807] p-5 rounded-2xl border border-[#1A2E26] space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#22C55E]/20 text-[#4ADE80] flex items-center justify-center font-bold text-xs">
                  BA
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Basim Albawe</div>
                  <div className="text-[10px] text-text-faint font-mono">Fxology trader</div>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#15221E] text-[#4ADE80] border border-[#22C55E]/30">
                PRO
              </span>
            </div>

            <div className="pt-2 border-t border-[#1A2E26]">
              <div className="text-[10px] text-text-faint font-mono">Current Balance</div>
              <div className="font-mono text-xl font-bold text-white tabular">
                17,389 <span className="text-xs text-[#4ADE80]">USDT</span>
              </div>
              <div className="text-[10px] text-[#4ADE80] font-mono mt-0.5">📈 + $0.02 (2.00%)</div>
            </div>

            {/* Mock Candlestick Chart */}
            <div className="h-24 w-full flex items-end gap-1.5 pt-4">
              {[40, 65, 30, 85, 55, 90, 70, 95, 80, 100].map((val, i) => (
                <div key={i} className="flex-1 bg-[#15221E] rounded-t relative overflow-hidden h-full flex items-end">
                  <div
                    className="w-full bg-[#22C55E] rounded-t"
                    style={{ height: `${val}%` }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Cookie Banner */}
      <AnimatePresence>
        {showCookie && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-xl px-4"
          >
            <div className="p-4 rounded-2xl bg-[#050807]/95 backdrop-blur-xl border border-[#22C55E]/40 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <p className="text-text-muted text-[11px] leading-snug">
                We use cookies and other technology to provide you with our services and for functional and analytical purposes.
              </p>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setShowCookie(false)}
                  className="px-3 py-1.5 rounded-lg bg-[#0F1714] text-text-muted hover:text-white border border-[#1A2E26] text-xs font-semibold"
                >
                  Decline
                </button>
                <button
                  onClick={() => setShowCookie(false)}
                  className="px-4 py-1.5 rounded-lg bg-[#22C55E] text-[#050807] font-bold text-xs shadow-md"
                >
                  Accept
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
