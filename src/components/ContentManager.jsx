import React from "react";
import { ArrowRight } from "lucide-react";

export default function ContentManager() {
  return (
    <section className="bg-[#f6f6f6] py-20 -mt-32 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image Card */}
          <div className="bg-[#f3c6a3] rounded-2xl p-6 md:p-10 flex justify-center">
            <img
              src="/images/content-manager.avif"
              alt="AI Content Manager"
              className="rounded-xl shadow-lg w-full max-w-md object-contain"
            />
          </div>

          {/* Content */}
          <div>
            {/* Step Badge */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full border flex items-center justify-center text-lg">
                3
              </div>

              <span className="border px-4 py-1 rounded-full text-sm">
                AI Content Manager
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-semibold text-[#0c2d3a] mb-6 leading-tight">
              No More Stale or Duplicate Content
            </h2>

            {/* Paragraph */}
            <p className="text-gray-600 leading-relaxed mb-8 text-sm md:text-base">
              BidMind’s AI content manager, part of our AI RFP response
              software, automatically detects stale, duplicate, or conflicting
              content across your knowledge sources. It ensures every RFP
              response reflects the most accurate, up-to-date information so
              your proposals stay consistent, credible, and client-ready.
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
