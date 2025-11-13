"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Award, Target, Lightbulb, Users, TrendingUp, Shield } from "lucide-react";

export function About() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const features = [
    {
      icon: Lightbulb,
      title: "Innovation Hub",
      description: "Fostering cutting-edge research in agricultural sciences and technology",
      color: "text-amber-400"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Bringing together scientists, entrepreneurs, and farmers for impactful solutions",
      color: "text-sky-400"
    },
    {
      icon: TrendingUp,
      title: "Growth & Development",
      description: "Supporting startups and businesses in agricultural technology sector",
      color: "text-emerald-400"
    },
    {
      icon: Shield,
      title: "IP Protection",
      description: "Securing intellectual property rights for innovative agricultural solutions",
      color: "text-blue-400"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to achieving the highest standards in research and innovation",
      color: "text-indigo-400"
    },
    {
      icon: Target,
      title: "Impact",
      description: "Creating tangible impact on Kashmir's agricultural landscape and economy",
      color: "text-violet-400"
    }
  ];

  return (
    <section className="py-20 px-4 relative" id="about">
      <div
        ref={ref}
        className={`relative z-10 max-w-7xl mx-auto transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
            About SKIIE Centre
          </h2>
          <p className="text-lg text-gray-100 max-w-3xl mx-auto leading-relaxed">
            The Innovation, Incubation & Entrepreneurship Centre at SKUAST-K is dedicated to
            transforming agricultural research into practical solutions that benefit farmers,
            entrepreneurs, and the wider community.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="glass-card-strong p-8 md:p-12 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-100 leading-relaxed mb-4">
                SKIIE Centre serves as a catalyst for innovation in agricultural sciences,
                bridging the gap between research and practical application. We nurture ideas
                from conception to commercialization, ensuring that groundbreaking research
                reaches those who need it most.
              </p>
              <p className="text-gray-100 leading-relaxed">
                With a portfolio of 78 patents, we are at the forefront of agricultural
                innovation in Kashmir, addressing local challenges with scientific solutions
                that have global relevance.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-6 text-center hover:scale-105 transition-transform">
                <div className="text-4xl font-bold text-sky-400 mb-2">78</div>
                <div className="text-sm text-gray-200">Patents</div>
              </div>
              <div className="glass-card p-6 text-center hover:scale-105 transition-transform">
                <div className="text-4xl font-bold text-blue-400 mb-2">150+</div>
                <div className="text-sm text-gray-200">Researchers</div>
              </div>
              <div className="glass-card p-6 text-center hover:scale-105 transition-transform">
                <div className="text-4xl font-bold text-indigo-400 mb-2">25+</div>
                <div className="text-sm text-gray-200">Research Areas</div>
              </div>
              <div className="glass-card p-6 text-center hover:scale-105 transition-transform">
                <div className="text-4xl font-bold text-violet-400 mb-2">40+</div>
                <div className="text-sm text-gray-200">Collaborations</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`glass-card p-6 hover:scale-105 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <feature.icon className={`w-12 h-12 ${feature.color} mb-4`} />
              <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
              <p className="text-gray-200">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}