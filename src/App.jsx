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
      desc: "RFPs, vendor management, implementation oversight, FAT/SAT, and go-live stabilization.",
    },
    {
      icon: <Cpu className="w-6 h-6" aria-hidden />,
      title: "Data & Analytics",
      desc: "Model management, SCADA/telemetry, interoperability (CIM, IEC 60870-5, DNP3), and reliability analytics.",
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
        "Participant on-boarding and compliance",
      ],
    },
  ];

  const industries = [
    { icon: <Building2 className="w-5 h-5" />, label: "Utilities (IOU, Public Power, Co-ops)" },
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
            Accelerating the energy transition through <span className="bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">power-system expertise</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-5 max-w-3xl text-slate-600 text-lg"
          >
            DE GRID LLC partners with utilities, vendors, and developers across transmission, generation, and distribution to plan, integrate, and deliver high-reliability EMS/DMS/MMS solutions.
          </motion.p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#services" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 text-white hover:opacity-90">Explore Services</a>
            <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-300 hover:border-slate-400">Talk to Us</a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-24 mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Who we are</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              We are a consulting firm focused on operational technologies for power systems. Our mission is to help clients
              modernize grid operations, integrate advanced applications, and deliver measurable reliability and business outcomes.
              From strategy and roadmaps to hands-on delivery, we meet you where you are and accelerate impact.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white shadow-sm border border-slate-200">
            <h3 className="font-semibold">At a glance</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 w-4 h-4 text-emerald-600"/> North America focus; global experience</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 w-4 h-4 text-emerald-600"/> Utility, vendor, and developer partnerships</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 w-4 h-4 text-emerald-600"/> OT/IT integration with security-first mindset</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 w-4 h-4 text-emerald-600"/> Outcome-driven, vendor-neutral advice</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-24 bg-slate-50/60 border-y border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">What we do</h2>
          <p className="mt-4 text-slate-600 max-w-3xl">End-to-end consulting across the EMS/DMS/MMS lifecycle: assess → design → integrate → validate → operationalize.</p>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.title} className="p-6 rounded-2xl bg-white shadow-sm border border-slate-200 hover:shadow-md transition">
                <div className="h-10 w-10 rounded-xl bg-slate-900 text-white grid place-content-center">{s.icon}</div>
                <h3 className="mt-4 font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="scroll-mt-24 mx-auto max-w-7xl px-4 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Who we serve</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((i) => (
            <div key={i.label} className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 bg-white">
              <div className="h-8 w-8 rounded-lg bg-slate-900 text-white grid place-content-center">{i.icon}</div>
              <span className="text-sm text-slate-700">{i.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="scroll-mt-24 bg-slate-50/60 border-y border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Platform expertise</h2>
          <p className="mt-4 text-slate-600 max-w-3xl">Deep experience across market-leading EMS, DMS/ADMS, and MMS platforms and the integration fabric that connects them.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {expertise.map((e) => (
              <div key={e.title} className="p-6 rounded-2xl bg-white shadow-sm border border-slate-200">
                <h3 className="font-semibold">{e.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700 list-disc list-inside">
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="scroll-mt-24 mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">How we work</h2>
            <p className="mt-4 text-slate-600">A pragmatic, outcome-driven delivery model that reduces risk and speeds value realization.</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 w-4 h-4 text-emerald-600"/> Discovery & roadmap aligned to reliability and regulatory needs</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 w-4 h-4 text-emerald-600"/> Clear architecture and integration patterns for OT/IT</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 w-4 h-4 text-emerald-600"/> Governance, testing (FAT/SAT), and cutover planning</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 w-4 h-4 text-emerald-600"/> Knowledge transfer and operational readiness</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-white shadow-sm border border-slate-200">
            <h3 className="font-semibold">Selected outcomes</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li>Reduced outage restoration time via FLISR tuning</li>
              <li>Improved dispatch efficiency with enhanced AGC/SE workflows</li>
              <li>Streamlined market settlements & participant onboarding</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Let’s talk</h2>
              <p className="mt-4 text-slate-200">Tell us about your EMS/DMS/MMS initiative or challenge. We’ll respond within one business day.</p>
              <div className="mt-6 space-y-3 text-sm">
                <p className="flex items-center gap-2"><Mail className="w-4 h-4"/> <a className="underline underline-offset-4" href="mailto:contact@degridllc.com">contact@degridllc.com</a></p>
                <p className="flex items-center gap-2"><Phone className="w-4 h-4"/> <a className="underline underline-offset-4" href="tel:+1-425-615-5029">+1-425-615-5029</a></p>
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4"/> <span>Washington, USA</span></p>
              </div>
            </div>
            <form onSubmit={(e)=>e.preventDefault()} className="p-6 rounded-2xl bg-white text-slate-900 space-y-4">
              <div>
                <label className="text-sm text-slate-700">Name</label>
                <input className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="Your name"/>
              </div>
              <div>
                <label className="text-sm text-slate-700">Email</label>
                <input type="email" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="you@company.com"/>
              </div>
              <div>
                <label className="text-sm text-slate-700">How can we help?</label>
                <textarea rows={4} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="Briefly describe your project or challenge"/>
              </div>
              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 text-white w-full justify-center">Send inquiry <ArrowRight className="w-4 h-4"/></button>
              <p className="text-xs text-slate-500 text-center">This demo form does not submit anywhere yet.</p>
            </form>
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