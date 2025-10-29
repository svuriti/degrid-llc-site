import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Bolt, Building2, Cpu, Layers, Mail, Phone, Sparkles, Workflow, CheckCircle2, MapPin } from "lucide-react";

export default function DeGridLLC() {
  const nav = [
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "industries", label: "Industries" },
    { id: "expertise", label: "Expertise" },
    { id: "approach", label: "Approach" },
    { id: "contact", label: "Contact" },
  ];

  const services = [
    {
      icon: <Bolt className="w-6 h-6" aria-hidden />,
      title: "Grid Operations Consulting",
      desc: "Advisory for transmission & distribution control centers—roadmaps, modernization, and operational excellence.",
    },
    {
      icon: <Layers className="w-6 h-6" aria-hidden />,
      title: "Systems Integration",
      desc: "Specification, selection, and integration of EMS/DMS/MMS platforms and adjacent OT/IT systems.",
    },
    {
      icon: <Workflow className="w-6 h-6" aria-hidden />,
      title: "Program & Delivery",
      desc: "RFPs, vendor management, implementation oversight, FAT/SAT, and go‑live stabilization.",
    },
    {
      icon: <Cpu className="w-6 h-6" aria-hidden />,
      title: "Data & Analytics",
      desc: "Model management, SCADA/telemetry, interoperability (CIM, IEC 60870‑5, DNP3), and reliability analytics.",
    },
  ];

  const expertise = [
    {
      title: "EMS — Energy Management Systems",
      points: [
        "SCADA/AGC, state estimation, contingency analysis",
        "Network applications and model management",
        "ICCP/TASE.2 integrations and telemetry hygiene",
      ],
    },
    {
      title: "DMS — Distribution Management Systems",
      points: [
        "Outage management & switching management",
        "Volt/VAR optimization, FLISR, DERMS alignment",
        "ADMS roadmaps and phased deployments",
      ],
    },
    {
      title: "MMS — Market Management Systems",
      points: [
        "Market integration, scheduling & settlements",
        "Forecasting, unit commitment, and dispatch support",
        "Participant on‑boarding and compliance",
      ],
    },
  ];

  const industries = [
    { icon: <Building2 className="w-5 h-5" />, label: "Utilities (IOU, Public Power, Co‑ops)" },
    { icon: <Sparkles className="w-5 h-5" />, label: "IPPs & Developers" },
    { icon: <Cpu className="w-5 h-5" />, label: "Vendors & Platform Providers" },
    { icon: <Layers className="w-5 h-5" />, label: "System Integrators" },
  ];

  return (
    <div className="min-h-screen text-slate-900 bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Top Bar */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="h-8 w-8 rounded-2xl grid place-content-center bg-slate-900 text-white">
              <Bolt className="w-4 h-4" />
            </div>
            <span className="font-semibold tracking-tight text-lg group-hover:opacity-90">DE GRID LLC</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {nav.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="text-slate-600 hover:text-slate-900 transition">
                {n.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900 text-white hover:opacity-90">
              Contact <ArrowRight className="w-4 h-4" />
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full blur-3xl bg-sky-200/60" />
          <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full blur-3xl bg-emerald-200/60" />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-24 md:py-28">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900"
          >
            Accelerating the energy transition through <span className="bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">power‑system expertise</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-5 max-w-3xl text-slate-600 text-lg"
          >
            DE GRID LLC partners with utilities, vendors, and developers across transmission, generation, and distribution to plan, integrate, and deliver high‑reliability EMS/DMS/MMS solutions.
          </motion.p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#services" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 text-white hover:opacity-90">Explore Services</a>
            <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-300 hover:border-slate-400">Talk to Us</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} DE GRID LLC. All rights reserved.</p>
          <div className="text-xs text-slate-500">Decentralized Energy · EMS · DMS · MMS · OT/IT Integration</div>
        </div>
      </footer>
    </div>
  );
}
