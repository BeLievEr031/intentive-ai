import React from "react";
import { ArrowRight, Plus } from "lucide-react";

export default function RfpFeature() {
  return (
    <section className="bg-[#f6f6f6] py-20 md:py-24 pb-40">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Top Badge */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
            <Plus size={16} />
          </div>

          <span className="border px-4 py-1 rounded-full text-sm">
            AI RFP Software
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-semibold text-[#0c2d3a] mb-12 md:mb-16 max-w-3xl">
          Simplify RFP Workflows With AI RFP Software
        </h2>

        {/* Content Layout */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="bg-gradient-to-br from-blue-400 to-blue-200 rounded-2xl p-6 md:p-10">
            <img
              src="/images/rfp-ui.avif"
              alt="RFP AI UI"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div>
            {/* Step Badge */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full border flex items-center justify-center text-lg">
                1
              </div>

              <span className="border px-4 py-1 rounded-full text-sm">
                AI RFP Responses
              </span>
            </div>

            {/* Heading */}
            <h3 className="text-2xl md:text-4xl font-semibold text-[#0c2d3a] mb-6 leading-tight">
              10X Faster Drafts With 95% Context-Aware Accuracy
            </h3>

            {/* Paragraph */}
            <p className="text-gray-600 leading-relaxed mb-8 text-sm md:text-base">
              Using BidMind’s AI RFP Contextual Engine, your team gets first
              drafts 10X faster not just generic answers, but responses that
              adapt to the question, pull directly from your knowledge base, and
              stay aligned with your organization’s language and compliance
              standards. Every draft feels like it was written by your experts,
              ready for your team to refine in minutes.
            </p>

            {/* Button */}
            <button className="bg-[#e6b187] hover:bg-[#d7a377] text-black px-6 py-3 rounded-lg flex items-center gap-2 font-medium transition">
              Book a Demo <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
