"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "Smart.R has completely transformed how we hire. We've reduced our time-to-hire by 40% and our hiring managers love the collaboration features.",
    author: "Sarah Chen",
    role: "VP of People",
    company: "TechCorp",
    initials: "SC",
  },
  {
    quote: "The AI-powered screening saves us hours every week. We can now focus on building relationships with top candidates instead of sifting through resumes.",
    author: "Michael Rodriguez",
    role: "Talent Acquisition Lead",
    company: "Innovate Inc",
    initials: "MR",
  },
  {
    quote: "Finally, an ATS that doesn't feel like it was built in 2005. The interface is intuitive and our entire team was onboarded in under a day.",
    author: "Emma Thompson",
    role: "HR Director",
    company: "GrowthStartup",
    initials: "ET",
  },
  {
    quote: "The pipeline view is incredibly powerful. We went from chaotic spreadsheets to a clean, visual hiring process that everyone actually enjoys using.",
    author: "David Kim",
    role: "Head of Talent",
    company: "Nexus Labs",
    initials: "DK",
  },
  {
    quote: "Integration with our existing tools was seamless. The automation features have cut our manual work by more than half.",
    author: "Priya Patel",
    role: "Recruiting Manager",
    company: "ScaleFlow",
    initials: "PP",
  },
  {
    quote: "Best investment we've made in HR tech. Our offer acceptance rate increased significantly after switching to Smart.R.",
    author: "James Okoro",
    role: "Chief People Officer",
    company: "Vanguard Health",
    initials: "JO",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (testimonials.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + (testimonials.length - 2)) % (testimonials.length - 2));
  };

  return (
    <section className="relative px-4 py-24 md:px-6 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl" />

      <div className="container relative mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="text-balance text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
            Loved by hiring teams <span className="gradient-text">everywhere</span>
          </h2>
          <p className="mt-6 text-lg text-slate-600 md:text-xl">
            See what our customers have to say about Smart.R
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-6xl">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute -left-4 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg hover:bg-slate-50 hover:shadow-xl transition-all md:flex border border-slate-100"
          >
            <ChevronLeft className="h-5 w-5 text-slate-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-4 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg hover:bg-slate-50 hover:shadow-xl transition-all md:flex border border-slate-100"
          >
            <ChevronRight className="h-5 w-5 text-slate-600" />
          </button>

          {/* Testimonials Container */}
          <div className="overflow-hidden px-4">
            <motion.div
              className="flex gap-6"
              animate={{ x: `-${currentIndex * 33.33}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={index} 
                  className="w-full min-w-[100%] md:min-w-[50%] lg:min-w-[33.333%]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-0 bg-white shadow-lg rounded-2xl overflow-hidden">
                    <CardContent className="p-8">
                      <div className="mb-6 flex size-10 items-center justify-center rounded-full bg-emerald-500/10">
                        <Quote className="size-5 text-emerald-500" />
                      </div>
                      <blockquote className="mb-8 text-slate-700 leading-relaxed">
                        &ldquo;{testimonial.quote}&rdquo;
                      </blockquote>
                      <div className="flex items-center gap-4">
                        <Avatar className="size-12 border-2 border-white shadow-md">
                          <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-cyan-500 text-white font-semibold">
                            {testimonial.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-slate-900">{testimonial.author}</p>
                          <p className="text-sm text-slate-500">
                            {testimonial.role}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Dots indicator */}
          <div className="mt-10 flex justify-center gap-2">
            {Array.from({ length: testimonials.length - 2 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === index
                    ? "w-8 bg-emerald-500"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
