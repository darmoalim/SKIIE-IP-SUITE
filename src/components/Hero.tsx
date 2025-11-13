"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation(0.2);
  const { ref: contactRef, isVisible: contactVisible } = useScrollAnimation(0.2);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 py-20 overflow-hidden">
      {/* Floating orbs with sky blue theme */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-sky-400/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-400/15 rounded-full blur-3xl animate-pulse-slow" />

      <div
        ref={heroRef}
        className={`relative z-10 max-w-7xl w-full transition-all duration-1000 ease-out ${
          heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Top Section : SKUAST + Laurels */}
        <div className="glass-card p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-6 rounded-3xl backdrop-blur-md bg-white/10 border border-sky-300/20 shadow-[0_0_30px_rgba(56,189,248,0.25)] min-h-[140px]">
          {/* Left: SKUAST PNG — reduced left padding */}
          <div className="flex items-center justify-start w-full md:w-auto pl-2 md:pl-4">
            <Image
              src="/branding/skuast-logo.png"
              alt="SKUAST Logo"
              width={2410}
              height={562}
              priority
              className="w-full max-w-[320px] md:max-w-[350px] h-auto object-contain"
            />
          </div>

          {/* Right: Laurels PNG — reduced right padding */}
          <div className="flex items-center justify-end w-full md:w-auto pr-2 md:pr-4">
            <Image
              src="/branding/laurels.png"
              alt="Laurels"
              width={1200}
              height={600}
              priority
              className="w-full max-w-[320px] md:max-w-[350px] h-auto object-contain"
            />
          </div>
        </div>

        {/* Main Banner — IP Suite */}
        <div className="glass-card-strong p-4 text-center mb-8 relative overflow-hidden rounded-3xl">
          {/* Glow Effects */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-sky-300/15 to-transparent rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-300/15 to-transparent rounded-full blur-2xl" />

          <div className="relative z-10">
            <Image
              src="/branding/ip-suite-hero-2410x876.png"
              alt="SKUAST-K IP Suite Banner"
              width={2410}
              height={876}
              priority
              className="w-full max-w-[1200px] h-auto object-contain mx-auto"
            />
          </div>
        </div>

        {/* Contact Information Bar */}
        <div
          ref={contactRef}
          className={`glass-card p-6 transition-all duration-1000 delay-300 ease-out ${
            contactVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col md:flex-row items-center justify-around gap-6 text-sm md:text-base">
            <div className="flex items-center gap-3 group cursor-pointer hover:scale-105 transition-transform">
              <Phone className="w-5 h-5 text-sky-400 group-hover:rotate-12 transition-transform" />
              <span className="text-white">+91-7006831280</span>
            </div>
            <div className="flex items-center gap-3 group cursor-pointer hover:scale-105 transition-transform">
              <Mail className="w-5 h-5 text-blue-400 group-hover:rotate-12 transition-transform" />
              <span className="text-white">skiie@skuastkashmir.ac.in</span>
            </div>
            <div className="flex items-center gap-3 group cursor-pointer hover:scale-105 transition-transform">
              <MapPin className="w-5 h-5 text-indigo-400 group-hover:rotate-12 transition-transform" />
              <span className="text-white">Shalimar, Srinagar, J&amp;K - 190025</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
