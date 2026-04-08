"use client";

import { FileText, Search, Users, CheckCircle2, UserCheck, Briefcase, ShieldCheck, Award } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const allSteps = {
  "Recruiter": [
    {
      icon: FileText,
      step: "01",
      title: "Post Jobs",
      description: "Create compelling job listings and distribute them across multiple job boards with a single click.",
    },
    {
      icon: Search,
      step: "02",
      title: "Receives Applicants",
      description: "AI-powered screening helps you quickly identify top candidates and filter out unqualified applicants.",
    },
    {
      icon: Users,
      step: "03",
      title: "Moves through statuses",
      description: "Schedule interviews, collect team feedback, and keep all stakeholders aligned.",
    },
    {
      icon: CheckCircle2,
      step: "04",
      title: "Schedule interviews",
      description: "Make data-driven decisions and extend offers to the best candidates faster.",
    },
  ],
  "HR": [
    {
      icon: UserCheck,
      step: "01",
      title: "Reviews candidates",
      description: "Build and maintain a strong pipeline of pre-vetted candidates.",
    },
    {
      icon: Briefcase,
      step: "02",
      title: "Gives comments",
      description: "Analyze hiring needs and align recruitment with business goals.",
    },
    {
      icon: Users,
      step: "03",
      title: "Participates in interviews",
      description: "Facilitate collaboration between hiring managers and recruiters.",
    },
    {
      icon: Award,
      step: "04",
      title: "Receives reminders",
      description: "Ensure hiring processes meet legal and diversity requirements.",
    },
  ],
  "Administrator": [
    {
      icon: ShieldCheck,
      step: "01",
      title: "Manages roles",
      description: "Set up roles, permissions, and company-wide hiring workflows.",
    },
    {
      icon: Users,
      step: "02",
      title: "Workflows",
      description: "Manage team access and permissions across the platform.",
    },
    {
      icon: FileText,
      step: "03",
      title: "Company settings",
      description: "Configure automated rules, notifications, and integrations.",
    },
    {
      icon: Award,
      step: "04",
      title: "Data",
      description: "Monitor platform usage, performance, and generate reports.",
    },
  ],
} as const;

const tabs = ["Recruiter", "HR", "Administrator"] as const;

type TabType = (typeof tabs)[number];

export function HowItWorks() {
  const [activeTab, setActiveTab] = useState<TabType>("Recruiter");

  const currentSteps = allSteps[activeTab];

  return (
    <section className="relative px-4 py-24 md:px-6 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-white" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="container relative mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 text-center"
        >
          <h2 className="text-balance text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
            How it <span className="gradient-text">works</span>
          </h2>
          <p className="mt-6 text-lg text-slate-600 md:text-xl">
            Tailored experience for every role
          </p>
        </motion.div>

        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

            {/* LEFT SIDE - Vertical Tabs */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:w-80 flex-shrink-0 w-full"
            >
              <div className="sticky top-32">
                <p className="mb-6 text-sm font-semibold uppercase tracking-wider text-emerald-600">
                  Select Role
                </p>

                <div className="space-y-3">
                  {tabs.map((tab, index) => (
                    <motion.button
                      key={tab}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      onClick={() => setActiveTab(tab)}
                      className={`w-full text-left px-6 py-5 rounded-2xl font-semibold text-xl transition-all duration-300 ${
                        activeTab === tab
                          ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/25"
                          : "bg-slate-50 hover:bg-slate-100 text-slate-700 hover:shadow-md"
                      }`}
                    >
                      {tab}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* RIGHT SIDE - Steps */}
            <div className="flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                >
                  {currentSteps.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                      className="group glass-card rounded-2xl p-8 shadow-lg transition-all hover:shadow-xl"
                    >
                      <div className="flex items-start gap-5">
                        <div className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 text-emerald-600 transition-all group-hover:from-emerald-500 group-hover:to-cyan-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-emerald-500/25">
                          <item.icon className="size-7" />
                        </div>
                        <div className="flex-1">
                          <span className="inline-block mb-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500">
                            STEP {item.step}
                          </span>
                          <h3 className="text-xl font-semibold text-slate-900">
                            {item.title}
                          </h3>
                          <p className="mt-3 text-sm leading-relaxed text-slate-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
