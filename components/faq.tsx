"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from "framer-motion"

const faqs = [
  {
    question: "How long does it take to set up Smart.R?",
    answer:
      "Most teams are up and running within a day. Our onboarding team will help you import your existing data and configure the system to match your hiring workflow.",
  },
  {
    question: "Can I import data from my current ATS?",
    answer:
      "Yes! We support imports from all major ATS platforms including Greenhouse, Lever, Workday, and more. Our team will help ensure a smooth transition.",
  },
  {
    question: "Is Smart.R compliant with GDPR and other privacy regulations?",
    answer:
      "Absolutely. We take data privacy seriously and are fully compliant with GDPR, CCPA, and other major privacy regulations. All data is encrypted at rest and in transit.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "All plans include email support with fast response times. Pro and Enterprise plans include dedicated account managers and priority phone support.",
  },
  {
    question: "Can I try Smart.R before committing?",
    answer:
      "Yes! We offer a 14-day free trial with full access to all features. No credit card required to get started.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="relative px-4 py-24 md:px-6 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-white" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />

      <div className="container relative mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="text-balance text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
            Frequently asked <span className="gradient-text">questions</span>
          </h2>
          <p className="mt-6 text-lg text-slate-600 md:text-xl">
            Everything you need to know about Smart.R
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto max-w-3xl"
        >
          <div className="glass-card rounded-2xl p-6 md:p-8 shadow-lg">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-b border-slate-100 last:border-0"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-emerald-600 transition-colors py-6 [&[data-state=open]]:text-emerald-600">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
