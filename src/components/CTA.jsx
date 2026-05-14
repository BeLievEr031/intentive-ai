import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-16 md:py-20 bg-[#f5f5f5]">

      <div className="max-w-6xl mx-auto px-6 md:px-10">

        <div className="bg-gradient-to-r from-[#eee6e6] via-[#e9e3e7] to-[#e8c6d3] 
        rounded-3xl py-16 md:py-24 text-center px-6">

          <h2 className="text-3xl md:text-5xl font-semibold text-[#0c2d3a] mb-8 md:mb-10">
            90% Faster RFPs. 50% More Wins.
          </h2>

          <button className="inline-flex items-center gap-2 bg-[#e4b083] 
          px-6 md:px-7 py-3 rounded-lg text-black font-medium hover:opacity-90 transition">

            Book a Demo
            <ArrowRight size={18} />

          </button>

        </div>

      </div>

    </section>
  );
}