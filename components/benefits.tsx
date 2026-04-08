"use client";

import { Clock, TrendingUp, Heart, Eye } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: Clock,
    title: "Save Time",
    description:
      "Reduce time-to-hire by up to 50% with automated workflows and AI-powered candidate matching.",
    stat: "50%",
    statLabel: "Faster hiring"
  },
  {
    icon: TrendingUp,
    title: "Reduce Hiring Bottlenecks",
    description:
      "Identify and eliminate inefficiencies in your recruitment process with real-time analytics.",
    stat: "3x",
    statLabel: "More efficient"
  },
  {
    icon: Heart,
    title: "Improve Candidate Experience",
    description:
      "Keep candidates engaged with timely updates and a seamless application process.",
    stat: "92%",
    statLabel: "Satisfaction rate"
  },
  {
    icon: Eye,
    title: "Gain Visibility",
    description:
      "Get complete transparency into your recruitment pipeline with comprehensive reporting.",
    stat: "100%",
    statLabel: "Pipeline visibility"
  },
];

export function Benefits() {
  return (
    <section className="relative px-4 py-24 md:px-6 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50" />
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="container relative mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="text-balance text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
            Why teams choose <span className="gradient-text">Smart.R</span>
          </h2>
          <p className="mt-6 text-lg text-slate-600 md:text-xl">
            Join thousands of companies who have transformed their hiring process
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group glass-card rounded-2xl p-8 shadow-lg transition-all hover:shadow-xl"
            >
              <div className="flex items-start gap-6">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 text-emerald-600 transition-all group-hover:from-emerald-500 group-hover:to-cyan-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-emerald-500/25">
                  <benefit.icon className="size-7" />
                </div>
                <div className="flex-1">
                  <div className="mb-3 flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-emerald-500">{benefit.stat}</span>
                    <span className="text-sm text-slate-500">{benefit.statLabel}</span>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-slate-900">{benefit.title}</h3>
                  <p className="leading-relaxed text-slate-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
