"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { GripVertical, Star, Mail, Calendar, MoreHorizontal } from "lucide-react";

const pipelineStages = [
  {
    id: "applied",
    title: "Applied",
    count: 24,
    color: "bg-slate-500",
    candidates: [
      { id: 1, name: "Alex Johnson", role: "Senior Developer", rating: 4.5, initials: "AJ", match: 92 },
      { id: 2, name: "Maria Garcia", role: "Full Stack Eng", rating: 4.2, initials: "MG", match: 88 },
      { id: 3, name: "James Wilson", role: "Backend Dev", rating: 3.8, initials: "JW", match: 85 },
    ]
  },
  {
    id: "screening",
    title: "Screening",
    count: 12,
    color: "bg-amber-500",
    candidates: [
      { id: 4, name: "Sarah Chen", role: "Tech Lead", rating: 4.8, initials: "SC", match: 96 },
      { id: 5, name: "David Kim", role: "Senior Developer", rating: 4.3, initials: "DK", match: 91 },
    ]
  },
  {
    id: "interview",
    title: "Interview",
    count: 6,
    color: "bg-cyan-500",
    candidates: [
      { id: 6, name: "Emily Brown", role: "Staff Engineer", rating: 4.9, initials: "EB", match: 98 },
      { id: 7, name: "Michael Lee", role: "Senior Developer", rating: 4.6, initials: "ML", match: 94 },
    ]
  },
  {
    id: "offer",
    title: "Offer",
    count: 3,
    color: "bg-emerald-500",
    candidates: [
      { id: 8, name: "Lisa Wang", role: "Principal Eng", rating: 5.0, initials: "LW", match: 99 },
    ]
  }
];

function CandidateCard({ candidate, index }: { candidate: typeof pipelineStages[0]["candidates"][0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -2, scale: 1.02, transition: { duration: 0.2 } }}
      className="group cursor-grab rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm transition-all hover:shadow-lg hover:border-emerald-200 kanban-card-hover"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <Avatar className="size-10 border-2 border-white shadow-sm">
            <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-cyan-500 text-white text-sm font-semibold">
              {candidate.initials}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-slate-900 text-sm">{candidate.name}</p>
            <p className="text-xs text-slate-500">{candidate.role}</p>
          </div>
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
          <GripVertical className="size-4 text-slate-300" />
        </div>
      </div>
      
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Star className="size-3.5 text-amber-400 fill-amber-400" />
          <span className="text-xs font-medium text-slate-600">{candidate.rating}</span>
        </div>
        <Badge className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-700 border-0">
          {candidate.match}% match
        </Badge>
      </div>

      <div className="mt-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="flex items-center justify-center size-7 rounded-lg bg-slate-100 hover:bg-emerald-100 hover:text-emerald-600 transition-colors">
          <Mail className="size-3.5" />
        </button>
        <button className="flex items-center justify-center size-7 rounded-lg bg-slate-100 hover:bg-emerald-100 hover:text-emerald-600 transition-colors">
          <Calendar className="size-3.5" />
        </button>
        <button className="flex items-center justify-center size-7 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors ml-auto">
          <MoreHorizontal className="size-3.5" />
        </button>
      </div>
    </motion.div>
  );
}

export function KanbanPipeline() {
  return (
    <section className="relative px-4 py-24 md:px-6 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-50/50" />
      
      <div className="container relative mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <Badge className="mb-6 rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-700 border-0 hover:bg-cyan-500/10">
            Candidate Pipeline
          </Badge>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
            Visualize your entire
            <br /><span className="gradient-text">hiring funnel</span>
          </h2>
          <p className="mt-6 text-lg text-slate-600 md:text-xl">
            Track candidates from application to offer with drag-and-drop kanban boards.
            Keep everyone aligned and move fast.
          </p>
        </motion.div>

        {/* Kanban Board */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto max-w-6xl"
        >
          <div className="rounded-2xl border border-slate-200/60 bg-white/80 p-6 shadow-xl backdrop-blur-sm">
            {/* Board Header */}
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Senior Software Engineer</h3>
                <p className="text-sm text-slate-500">Engineering Team - 45 candidates</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {["SC", "MR", "ET"].map((initials, i) => (
                    <Avatar key={i} className="size-8 border-2 border-white shadow-sm">
                      <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-cyan-500 text-white text-xs">
                        {initials}
                      </AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <span className="text-sm text-slate-500">+3 hiring team</span>
              </div>
            </div>

            {/* Pipeline Columns */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              {pipelineStages.map((stage, stageIndex) => (
                <motion.div
                  key={stage.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + stageIndex * 0.1 }}
                  className="rounded-xl bg-slate-50/80 p-4"
                >
                  {/* Column Header */}
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`size-2.5 rounded-full ${stage.color}`} />
                      <h4 className="font-semibold text-slate-700">{stage.title}</h4>
                    </div>
                    <span className="flex items-center justify-center size-6 rounded-full bg-white text-xs font-medium text-slate-600 shadow-sm">
                      {stage.count}
                    </span>
                  </div>

                  {/* Candidate Cards */}
                  <div className="space-y-3">
                    {stage.candidates.map((candidate, index) => (
                      <CandidateCard key={candidate.id} candidate={candidate} index={index} />
                    ))}
                    
                    {/* Add candidate placeholder */}
                    <div className="rounded-xl border-2 border-dashed border-slate-200 p-4 text-center opacity-0 hover:opacity-100 transition-opacity">
                      <p className="text-xs text-slate-400">Drop candidate here</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
