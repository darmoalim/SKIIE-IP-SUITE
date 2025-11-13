"use client";

import { Patent } from "@/data/patents";
import { Calendar, FileText, Hash, Users, Lightbulb, FileCheck, Image as ImageIcon } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";
import Image from "next/image";

interface PatentCardProps {
  patent: Patent;
  delay?: number;
}

export function PatentCard({ patent, delay = 0 }: PatentCardProps) {
  const { ref, isVisible } = useScrollAnimation(0.15);
  const [imageError, setImageError] = useState(false);

  return (
    <div
      ref={ref}
      className={`glass-card-strong p-8 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* LEFT – Details */}
        <div className="lg:col-span-8 space-y-6">
          {/* Category */}
          <div className="flex items-center gap-3">
            <span className="inline-block px-4 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-sky-500/20 to-blue-500/20 text-sky-300">
              {patent.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            {patent.title}
          </h3>

          {/* Quick info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="glass-card p-4">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-4 h-4 text-sky-400" />
                <span className="text-xs font-semibold text-gray-300">Grant Date</span>
              </div>
              <p className="text-sm font-bold text-white">{patent.grantDate}</p>
            </div>

            <div className="glass-card p-4">
              <div className="flex items-center gap-2 mb-2">
                <FileText className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-semibold text-gray-300">Patent No</span>
              </div>
              <p className="text-xs font-bold text-white font-mono">{patent.patentNumber}</p>
            </div>

            <div className="glass-card p-4">
              <div className="flex items-center gap-2 mb-2">
                <Hash className="w-4 h-4 text-indigo-400" />
                <span className="text-xs font-semibold text-gray-300">Application</span>
              </div>
              <p className="text-xs font-bold text-white font-mono">{patent.applicationNumber}</p>
            </div>
          </div>

          {/* Inventors */}
          <div className="glass-card p-5">
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-5 h-5 text-sky-400" />
              <h4 className="text-lg font-bold text-white">Inventors</h4>
              <span className="ml-auto text-xs font-semibold px-3 py-1 rounded-full bg-sky-500/20 text-sky-300">
                {patent.inventors.length}
              </span>
            </div>
            <ul className="space-y-2">
              {patent.inventors.map((inventor, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-100">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-500" />
                  <span className="font-medium text-sm">{inventor}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Abstract */}
          <div className="glass-card p-5">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="w-5 h-5 text-amber-400" />
              <h4 className="text-lg font-bold text-white">Abstract</h4>
            </div>
            <p className="text-gray-100 leading-relaxed text-sm">{patent.abstract}</p>
          </div>

          {/* Claims */}
          <div className="glass-card p-5">
            <div className="flex items-center gap-2 mb-4">
              <FileCheck className="w-5 h-5 text-emerald-400" />
              <h4 className="text-lg font-bold text-white">Key Claims</h4>
            </div>
            <ul className="space-y-3">
              {patent.claims.map((claim, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 text-white text-xs font-bold flex items-center justify-center shadow-md">
                    {index + 1}
                  </span>
                  <span className="text-gray-100 pt-1 text-sm leading-relaxed">{claim}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT – Patent Image (sticky on lg+) */}
        <div className="lg:col-span-4 lg:sticky lg:top-8 self-start">
          <div className="glass-card p-6">
            <div className="relative w-full aspect-[210/297] rounded-xl overflow-hidden">
              {!imageError ? (
                <Image
                  src={`/patents/${patent.id}.png`}
                  alt={patent.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="flex flex-col items-center justify-center gap-4 text-center p-6">
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-sky-500/20 to-blue-500/20">
                    <ImageIcon className="w-16 h-16 text-sky-400" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-200">Patent Image</p>
                    <p className="text-xs text-gray-300 max-w-xs">
                      Add as <span className="font-mono bg-sky-500/20 px-2 py-1 rounded text-sky-300">{patent.id}.png</span> in
                      <span className="font-mono bg-sky-500/20 px-2 py-1 rounded text-sky-300"> public/patents/</span>
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-4 glass-card px-4 py-2 text-center">
              <div className="flex items-center justify-center gap-2">
                <FileText className="w-4 h-4 text-sky-400" />
                <span className="text-xs font-bold text-white">Patent #{patent.id}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
