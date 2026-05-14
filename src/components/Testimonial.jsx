import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function TestimonialSlider() {
  const testimonials = [
    {
      title: "Game-Changer for Our Marketing Tenders, RFPs & RFIs",
      desc: "BidMind helps us respond faster and better to tenders, boosting our win rates and saving valuable time.",
      name: "Ravish Bohare",
      role: "Founder",
      img: "/images/person.avif",
    },
    {
      title: "Amazing AI RFP Tool for Proposal Teams",
      desc: "Our team saves hours every week preparing RFP responses with BidMind AI.",
      name: "Sarah Mitchell",
      role: "Head of Sales",
      img: "/images/person.avif",
    },
    {
      title: "Huge Productivity Boost for Our Company",
      desc: "The AI agents make proposal writing incredibly fast and accurate.",
      name: "Daniel Clark",
      role: "VP Marketing",
      img: "/images/person.avif",
    },
    {
      title: "Best Platform for Knowledge Automation",
      desc: "We centralized our knowledge base and improved response quality.",
      name: "Emma Watson",
      role: "Product Manager",
      img: "/images/person.avif",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(slider);
  }, []);

  const nextSlide = () => {
    setIndex((index + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((index - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-gradient-to-r from-[#efe9ec] to-[#e6dde8] py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="bg-white rounded-xl border overflow-hidden grid md:grid-cols-[1fr_80px]">
          {/* Slide Content */}
          <div className="relative p-8 md:p-12 min-h-[300px]">
            {testimonials.map((item, i) => (
              <div
                key={i}
                className={`absolute inset-0 p-8 md:p-12 transition-opacity duration-700 ease-in-out
                ${index === i ? "opacity-100 relative" : "opacity-0"}`}
              >
                <div className="text-5xl md:text-6xl text-purple-200 mb-4">
                  “
                </div>

                <h2 className="text-xl md:text-3xl font-semibold mb-6 bg-gradient-to-r from-purple-700 to-purple-400 text-transparent bg-clip-text">
                  {item.title}
                </h2>

                <p className="text-gray-600 text-sm md:text-lg mb-8">
                  {item.desc}
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={item.img}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover"
                  />

                  <div>
                    <p className="font-semibold text-sm md:text-base">
                      {item.name}
                    </p>
                    <p className="text-gray-500 text-xs md:text-sm">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <div className="border-t md:border-t-0 md:border-l flex md:flex-col">
            <button
              onClick={nextSlide}
              className="flex-1 flex items-center justify-center border-r md:border-r-0 md:border-b hover:bg-gray-50 transition"
            >
              <ArrowRight size={20} />
            </button>

            <button
              onClick={prevSlide}
              className="flex-1 flex items-center justify-center hover:bg-gray-50 transition"
            >
              <ArrowLeft size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
