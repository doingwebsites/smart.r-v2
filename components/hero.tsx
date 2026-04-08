"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pt-32 pb-20 md:pt-40 md:pb-32">
      {/* Background decorations */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-emerald-500/5 to-transparent rounded-full" />
      
      <div className="container relative mx-auto">
        <div className="mx-auto max-w-5xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-700 border border-emerald-500/20"
          >
            <Sparkles className="size-4" />
            Built by recruiters, for recruiters
          </motion.div>

          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8 flex justify-center"
          >
            <Image
              src="/smart-logo.png"
              alt="Smart.R Logo"
              width={180}
              height={60}
              className="h-14 w-auto"
              priority
            />
          </motion.div>

          {/* Main headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-balance text-5xl font-bold tracking-tight text-slate-900 md:text-6xl lg:text-7xl xl:text-8xl"
          >
            The All-in-One
            <br />
            <span className="gradient-text">AI-Powered ATS.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mx-auto mt-8 max-w-2xl text-pretty text-xl text-slate-600 md:text-2xl"
          >
            From candidate sourcing to hire in one go.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button 
              size="lg"
              className="group min-w-[200px] rounded-full bg-emerald-500 px-8 py-7 text-lg font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all hover:bg-emerald-600 hover:shadow-xl hover:shadow-emerald-500/30 hover:-translate-y-0.5 animate-float"
            >
              Book a Demo
              <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="min-w-[200px] rounded-full border-2 border-slate-200 bg-white/80 px-8 py-7 text-lg font-semibold text-slate-700 backdrop-blur-sm transition-all hover:border-emerald-500/50 hover:bg-white hover:-translate-y-0.5"
            >
              <Play className="mr-2 size-5 text-emerald-500" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Social proof */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 flex flex-col items-center gap-4"
          >
            <p className="text-sm text-slate-500">Trusted by forward-thinking teams</p>
            <div className="flex items-center gap-8 opacity-50">
              <div className="h-8 w-24 rounded bg-slate-300" />
              <div className="h-8 w-28 rounded bg-slate-300" />
              <div className="h-8 w-20 rounded bg-slate-300" />
              <div className="hidden sm:block h-8 w-24 rounded bg-slate-300" />
              <div className="hidden md:block h-8 w-28 rounded bg-slate-300" />
            </div>
          </motion.div>
        </div>

        {/* Dashboard Preview */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mx-auto mt-20 max-w-6xl"
        >
          <div className="relative rounded-2xl border border-slate-200/60 bg-white/50 p-2 shadow-2xl shadow-slate-900/10 backdrop-blur-sm">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 rounded-t-xl bg-slate-100/80 px-4 py-3">
              <div className="flex gap-2">
                <div className="size-3 rounded-full bg-red-400" />
                <div className="size-3 rounded-full bg-amber-400" />
                <div className="size-3 rounded-full bg-emerald-400" />
              </div>
              <div className="ml-4 flex-1">
                <div className="mx-auto max-w-md rounded-md bg-white/80 px-4 py-1.5 text-xs text-slate-400">
                  app.smartr.io/dashboard
                </div>
              </div>
            </div>
            
            {/* Dashboard image */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-b-xl">
              <Image
                src="/system-image.png"
                alt="Smart.R Dashboard Preview"
                fill
                className="object-cover object-top"
                priority
              />
              {/* Subtle gradient overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/90 to-transparent" />
            </div>
          </div>

          {/* Floating elements around dashboard */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute -left-4 top-1/3 hidden lg:block"
          >
            <div className="glass-card rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-emerald-500/10">
                  <Sparkles className="size-5 text-emerald-500" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">AI Screening</p>
                  <p className="text-xs text-slate-500">Active</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="absolute -right-4 top-1/2 hidden lg:block"
          >
            <div className="glass-card rounded-xl p-4 shadow-lg">
              <p className="text-2xl font-bold text-emerald-500">87%</p>
              <p className="text-xs text-slate-500">Match Rate</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
