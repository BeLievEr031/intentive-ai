import React from "react";
import { ArrowRight } from "lucide-react";

export default function AgentsHub() {
  return (
    <section className="bg-[#f6f6f6] py-20 -mt-32 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Illustration */}
          <div className="bg-gradient-to-br from-green-300 via-green-200 to-green-100 rounded-2xl p-6 md:p-10 flex justify-center">
            <img
              src="/images/ai-agents.avif"
              alt="AI Agents Hub"
              className="rounded-xl shadow-lg w-full max-w-md object-contain"
            />
          </div>

          {/* Content */}
          <div>
            {/* Step Badge */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full border flex items-center justify-center text-lg">
                4
              </div>

              <span className="border px-4 py-1 rounded-full text-sm">
                AI Agents Hub
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-semibold text-[#0c2d3a] mb-6 leading-tight">
              Higher Productivity & Competitive Advantage
            </h2>

            {/* Paragraph */}
            <p className="text-gray-600 leading-relaxed mb-8 text-sm md:text-base">
              BidMind AI offers a suite of AI agents designed to boost
              productivity and give you a competitive advantage. These agents
              assist with researching competitors, refining RFP responses, and
              brainstorming better answers helping you deliver higher- quality
              proposals, faster.
            </p>

            {/* CTA Button */}
            <button className="bg-[#e6b187] hover:bg-[#d7a377] text-black px-6 py-3 rounded-lg flex items-center gap-2 font-medium transition">
              Book a Demo <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
