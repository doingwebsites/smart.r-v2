"use client";

import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Brain, Zap, Target } from "lucide-react";

const aiFeatures = [
  {
    icon: Brain,
    title: "Smart Matching",
    description: "AI analyzes skills, experience, and culture fit"
  },
  {
    icon: Target,
    title: "Precision Ranking",
    description: "Candidates scored and ranked automatically"
  },
  {
    icon: Zap,
    title: "Instant Insights",
    description: "Get recommendations in seconds, not hours"
  }
];

export function DashboardShowcase() {
  return (
    <section className="relative px-4 py-24 md:px-6 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="container relative mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <Badge className="mb-6 rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-700 border-0 hover:bg-emerald-500/10">
            <Sparkles className="mr-2 size-4" />
            Smart.R AI
          </Badge>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
            An <span className="gradient-text">AI agent</span> that thinks
            <br />like a recruiter
          </h2>
          <p className="mt-6 text-lg text-slate-600 md:text-xl">
            Analyzes your needs to quickly deliver the most relevant candidates.
          </p>
        </motion.div>

        {/* AI Features Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mb-16 max-w-4xl"
        >
          <div className="grid gap-6 md:grid-cols-3">
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group glass-card rounded-2xl p-6 text-center shadow-lg transition-shadow hover:shadow-xl"
              >
                <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/25 transition-transform group-hover:scale-110">
                  <feature.icon className="size-7" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">{feature.title}</h3>
                <p className="text-sm text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Dashboard Image */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto max-w-5xl"
        >
          <div className="relative rounded-2xl border border-slate-200/60 bg-white p-1 shadow-2xl shadow-slate-900/10">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 rounded-t-xl bg-slate-50 px-4 py-3 border-b border-slate-100">
              <div className="flex gap-2">
                <div className="size-3 rounded-full bg-red-400" />
                <div className="size-3 rounded-full bg-amber-400" />
                <div className="size-3 rounded-full bg-emerald-400" />
              </div>
              <span className="ml-4 text-xs text-slate-400">
                Smart.R AI Dashboard
              </span>
              <div className="ml-auto flex items-center gap-2">
                <div className="relative flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex size-2 rounded-full bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-medium text-emerald-700">AI Active</span>
                </div>
              </div>
            </div>

            {/* Dashboard Image */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-b-xl">
              <Image
                src="/ai-system.png"
                alt="Smart.R AI Dashboard Preview"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Floating stat cards */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute -left-6 top-1/2 hidden xl:block"
          >
            <div className="glass-card rounded-xl p-4 shadow-xl">
              <p className="text-3xl font-bold text-emerald-500">2.3s</p>
              <p className="text-xs text-slate-500">Avg. Analysis Time</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute -right-6 top-1/3 hidden xl:block"
          >
            <div className="glass-card rounded-xl p-4 shadow-xl">
              <p className="text-3xl font-bold text-cyan-500">94%</p>
              <p className="text-xs text-slate-500">Accuracy Rate</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
