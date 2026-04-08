"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleLines, setVisibleLines] = useState<number[]>([]);

  const floatingIcons = [
    { src: "/icons/uk.png", size: 48, top: "8%", left: "5%", delay: 0 },
    { src: "/icons/bulgaria.png", size: 52, top: "18%", left: "82%", delay: 1.2 },
    { src: "/icons/german.png", size: 44, top: "28%", left: "12%", delay: 0.8 },
    { src: "/icons/russia.png", size: 55, top: "35%", left: "75%", delay: 2.3 },
    { src: "/icons/world.png", size: 46, top: "45%", left: "8%", delay: 0.4 },
    { src: "/icons/maximize.png", size: 50, top: "52%", left: "85%", delay: 1.7 },
    { src: "/icons/arrow.png", size: 48, top: "62%", left: "15%", delay: 2.5 },
    { src: "/icons/accept.png", size: 53, top: "68%", left: "78%", delay: 0.6 },
    { src: "/icons/chart.png", size: 45, top: "22%", left: "45%", delay: 1.9 },
    { src: "/icons/screen.png", size: 49, top: "48%", left: "55%", delay: 0.9 },
    { src: "/icons/case.png", size: 49, top: "60%", left: "40%", delay: 0.5 },
  ];

  const stats = [
    { text: "Scalable workflows" },
    { text: "Multi-language ready" },
    { text: "Designed for any industry" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleLines([0, 1, 2]);
          } else {
            setVisibleLines([]);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-slate-50" />

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="min-h-[70vh] flex flex-col justify-center relative rounded-3xl bg-white border border-slate-200/60 shadow-xl overflow-hidden">

          {/* Background grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-50" />

          {/* Floating icons */}
          <div className="absolute inset-0 pointer-events-none">
            {floatingIcons.map((icon, i) => (
              <motion.img
                key={i}
                src={icon.src}
                alt=""
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ delay: icon.delay }}
                className="absolute"
                style={{
                  width: icon.size * 1.2,
                  height: icon.size * 1.2,
                  top: icon.top,
                  left: icon.left,
                  animation: `float ${12 + i}s ease-in-out infinite`,
                  animationDelay: `-${icon.delay}s`,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 text-center px-6 py-20">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-lg font-semibold text-emerald-600 mb-12"
            >
              Engineered for flexibility
            </motion.p>

            <div className="space-y-8 md:space-y-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={visibleLines.includes(index) ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <p className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900">
                    {stat.text}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={visibleLines.includes(2) ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 text-xl text-slate-500 font-medium"
            >
              Find what matters instantly
            </motion.p>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translate(0px, 0px); }
          50% { transform: translate(30px, -30px); }
        }
      `}</style>
    </section>
  );
}
