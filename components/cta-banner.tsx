"use client";

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export function CTABanner() {
  return (
    <section className="relative px-4 py-24 md:px-6 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-emerald-500/10 to-transparent rounded-full" />

      <div className="container relative mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl"
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-emerald-400 backdrop-blur-sm border border-white/10">
            <Sparkles className="size-4" />
            Start your free trial today
          </div>

          <h2 className="text-balance text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Ready to transform
            <br />your hiring?
          </h2>
          <p className="mt-6 text-lg text-slate-300 md:text-xl">
            Join thousands of companies using Smart.R to hire faster and smarter.
            No credit card required.
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="group min-w-[200px] rounded-full bg-emerald-500 px-8 py-7 text-lg font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all hover:bg-emerald-400 hover:shadow-xl hover:shadow-emerald-500/30 hover:-translate-y-0.5 animate-float"
            >
              Book a Demo
              <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="min-w-[200px] rounded-full border-2 border-white/20 bg-white/5 px-8 py-7 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10 hover:-translate-y-0.5"
            >
              Start Free Trial
            </Button>
          </motion.div>

          <p className="mt-8 text-sm text-slate-400">
            14-day free trial. No credit card required. Cancel anytime.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
