"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const showcaseImages = [
    {
        id: 1,
        url: "/system-image.png",
        title: "Powerful Dashboard",
        description: "Real-time insights and complete control in one place",
    },
    {
        id: 2,
        url: "/system-image-2.png",
        title: "Hiring board",
        description: "Real-time overview of metrics across everything you do"
    },
    {
        id: 3,
        url: "/system-image-3.png",
        title: "Customization",
        description: "Customize the system your own way.",
    },
]

export function ProductShowcase() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % showcaseImages.length)
        }, 3500)

        return () => clearInterval(interval)
    }, [isAutoPlaying])

    const goToSlide = (index: number) => {
        setCurrentIndex(index)
        setIsAutoPlaying(false)
        setTimeout(() => setIsAutoPlaying(true), 5000)
    }

    return (
        <section className="relative py-24 md:py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/50 to-white" />

            <div className="container relative mx-auto px-4 md:px-6">
                {/* Live Demo Badge */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center mb-16"
                >
                    <Badge className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white border-0 hover:bg-slate-800">
                        <span className="relative flex size-2 mr-2">
                            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex size-2 rounded-full bg-emerald-500"></span>
                        </span>
                        Live Demo
                    </Badge>
                </motion.div>

                {/* Showcase Container */}
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mx-auto max-w-6xl"
                >
                    <div className="relative aspect-[16/9] w-full rounded-3xl border border-slate-200/60 bg-white shadow-2xl shadow-slate-900/10 overflow-hidden">
                        {/* Images */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0"
                            >
                                <img
                                    src={showcaseImages[currentIndex].url}
                                    alt={showcaseImages[currentIndex].title}
                                    className="w-full h-full object-cover"
                                />

                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />

                                {/* Content overlay */}
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="absolute inset-0 flex flex-col items-center justify-center p-8 md:p-12"
                                >
                                    <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight text-center mb-4">
                                        {showcaseImages[currentIndex].title}
                                    </h3>
                                    <p className="text-lg md:text-xl text-white/80 text-center max-w-2xl">
                                        {showcaseImages[currentIndex].description}
                                    </p>
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Dots navigation */}
                    <div className="flex justify-center gap-3 mt-8">
                        {showcaseImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    index === currentIndex
                                        ? "w-10 bg-emerald-500"
                                        : "w-2 bg-slate-300 hover:bg-slate-400"
                                }`}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
