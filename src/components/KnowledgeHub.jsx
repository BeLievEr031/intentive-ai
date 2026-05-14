import React from "react";
import { ArrowRight } from "lucide-react";

export default function KnowledgeHub() {
  return (
    <section className="bg-[#f6f6f6] py-20 -mt-32 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Illustration */}
          <div className="bg-gradient-to-br from-purple-400 via-purple-300 to-purple-200 rounded-2xl p-6 md:p-10 flex justify-center">
            <img
              src="/images/knowledge-hub.avif"
              alt="Knowledge Hub"
              className="rounded-xl w-full max-w-md object-contain"
            />
          </div>

          {/* Right Content */}
          <div>
            {/* Step Badge */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full border flex items-center justify-center text-lg">
                2
              </div>

              <span className="border px-4 py-1 rounded-full text-sm">
                Unified Knowledge Hub
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-semibold text-[#0c2d3a] mb-6 leading-tight">
              Single Hub for All Your Knowledge Sources
            </h2>

            {/* Paragraph */}
            <p className="text-gray-600 leading-relaxed mb-8 text-sm md:text-base">
              BidMind's AI RFP software offers a centralized hub for all your
              knowledge sources. You can upload previous RFPs and relevant
              documents; integrate with your internal data systems such as
              Google Drive, SharePoint & more; upload Q&A from legacy tools or
              spreadsheets; and even add information from your websites.
            </p>

            {/* CTA */}
            <button className="bg-[#e6b187] hover:bg-[#d7a377] text-black px-6 py-3 rounded-lg flex items-center gap-2 font-medium transition">
              Book a Demo <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
