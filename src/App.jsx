import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Sidebar from "./components/Sidebar";
import Overview from "./pages/Overview";
import EC2 from "./pages/EC2";
import Docker from "./pages/Docker";
import Kubernetes from "./pages/Kubernetes";
import Cost from "./pages/Cost";
import Recommendations from "./pages/Recommendations";
import Reports from "./pages/Reports";
import Alerts from "./pages/Alerts";
import Login from "./pages/Login";
import MobileNav from "./components/MobileNav";

export default function App() {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  if (location.pathname === "/login") {
    return <Login onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="flex min-h-screen bg-bg text-text-primary font-body">
      <Sidebar />
      <div className="flex-1 min-w-0 flex flex-col">
        <MobileNav />
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6 max-w-[1400px] w-full mx-auto">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Overview />} />
              <Route path="/ec2" element={<EC2 />} />
              <Route path="/docker" element={<Docker />} />
              <Route path="/kubernetes" element={<Kubernetes />} />
              <Route path="/cost" element={<Cost />} />
              <Route path="/recommendations" element={<Recommendations />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/alerts" element={<Alerts />} />
              <Route path="/login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
            </Routes>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
