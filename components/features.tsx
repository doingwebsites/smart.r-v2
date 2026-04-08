"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, MessageSquare, Zap, BarChart3 } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    id: "Candidates",
    icon: Users,
    title: "Candidate Pipeline",
    description:
      "Visualize your entire hiring funnel with drag-and-drop kanban boards. Track candidates from application to offer seamlessly.",
    color: "from-emerald-500 to-teal-500"
  },
  {
    id: "Team",
    icon: MessageSquare,
    title: "Team Collaboration",
    description:
      "Share feedback, compare candidates, and make hiring decisions together. Keep everyone aligned with @mentions and comments.",
    color: "from-cyan-500 to-blue-500"
  },
  {
    id: "Automation",
    icon: Zap,
    title: "Automated Workflows",
    description:
      "Eliminate repetitive tasks with smart automation. Auto-schedule interviews, send follow-ups, and move candidates automatically.",
    color: "from-amber-500 to-orange-500"
  },
  {
    id: "Reporting",
    icon: BarChart3,
    title: "Reporting & Analytics",
    description:
      "Get actionable insights into your hiring process. Track time-to-hire, source effectiveness, and team performance.",
    color: "from-violet-500 to-purple-500"
  },
];

const tabs = ["Candidates", "Team", "Automation", "Reporting"];

export function Features() {
  const [activeTab, setActiveTab] = useState("Candidates");

  const activeFeature = features.find((f) => f.id === activeTab)!;

  return (
    <section id="product" className="relative px-4 py-24 md:px-6 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-white" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="container relative mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="text-balance text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
            Everything you need to
            <br /><span className="gradient-text">hire smarter</span>
          </h2>
        </motion.div>

        {/* Tab Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12 flex justify-center"
        >
          <div className="inline-flex items-center rounded-full bg-slate-100 p-1.5 shadow-inner">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? "text-white"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 shadow-lg shadow-emerald-500/25"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Animated Feature Card */}
        <div className="mx-auto max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="border-0 glass-card shadow-xl rounded-3xl overflow-hidden">
                <CardHeader className="pb-4 pt-12 px-12">
                  <motion.div 
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`mb-8 flex size-24 items-center justify-center rounded-3xl bg-gradient-to-br ${activeFeature.color} mx-auto shadow-lg`}
                  >
                    <activeFeature.icon className="size-12 text-white" />
                  </motion.div>
                  <CardTitle className="text-center text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                    {activeFeature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center px-12 pb-12">
                  <CardDescription className="text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto">
                    {activeFeature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Feature grid below */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-16 max-w-5xl"
        >
          <div className="grid gap-6 md:grid-cols-4">
            {features.map((feature, index) => (
              <motion.button
                key={feature.id}
                onClick={() => setActiveTab(feature.id)}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`group text-left p-6 rounded-2xl transition-all ${
                  activeTab === feature.id
                    ? "bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border-2 border-emerald-500/30"
                    : "bg-slate-50 hover:bg-slate-100 border-2 border-transparent"
                }`}
              >
                <div className={`mb-4 flex size-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} text-white shadow-md`}>
                  <feature.icon className="size-6" />
                </div>
                <h3 className="font-semibold text-slate-900">{feature.title}</h3>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
