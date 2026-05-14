import React from "react";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-[#f5f5f5] pt-40 pb-60 overflow-hidden">

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-purple-200 to-purple-300 opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 text-center">

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-[#0d2a3c] leading-tight">
          Win More With AI Agents For
        </h1>

        {/* Gradient Text */}
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-semibold bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent mt-3">
          RFP & SecQ.
        </h2>

        {/* Description */}
        <p className="mt-6 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Response accuracy that competes with humans, helping
          our customers improve win rates by 50%+.
        </p>

        {/* Button */}
        <div className="mt-10 flex justify-center">
          <button className="bg-[#e7b287] hover:bg-[#dba678] text-black px-7 py-3 rounded-lg flex items-center gap-2 font-medium transition">
            Book a Demo <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}