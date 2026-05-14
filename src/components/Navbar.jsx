import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [shadow, setShadow] = useState(false);

  // Add shadow when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setShadow(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-white transition-all duration-300 ${
        shadow ? "shadow-md border-b" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-xl font-bold">BidMind</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 text-[16px] font-medium font-semibold text-gray-700">
          <li className="cursor-pointer hover:text-black transition">Home</li>

          <li className="cursor-pointer hover:text-black transition">
            Features
          </li>

          <li className="flex items-center gap-1 cursor-pointer hover:text-black transition">
            Solutions <ChevronDown size={16} />
          </li>

          <li className="cursor-pointer hover:text-black transition">
            ROI Calculator
          </li>

          <li className="flex items-center gap-1 cursor-pointer hover:text-black transition">
            Resources <ChevronDown size={16} />
          </li>
        </ul>

        {/* Right Section */}
        <div className="hidden lg:flex items-center gap-6">
          <button className="text-gray-700 hover:text-black text-[16px] font-semibold font-medium transition">
            Customer Login
          </button>

          <button className="bg-[#e7b287] hover:bg-[#d79c6e] text-black px-5 py-2.5 rounded-lg flex items-center gap-2 font-medium transition">
            Book a Demo <ArrowRight size={16} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white border-t transition-all duration-300 overflow-hidden ${
          open ? "max-h-[400px]" : "max-h-0"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-5 text-gray-700 font-medium">
          <p className="cursor-pointer hover:text-black">Home</p>
          <p className="cursor-pointer hover:text-black">Features</p>
          <p className="cursor-pointer hover:text-black">Solutions</p>
          <p className="cursor-pointer hover:text-black">ROI Calculator</p>
          <p className="cursor-pointer hover:text-black">Resources</p>
          <p className="cursor-pointer hover:text-black">Customer Login</p>

          <button className="bg-[#e7b287] hover:bg-[#d79c6e] py-3 rounded-lg flex items-center justify-center gap-2 font-medium transition">
            Book a Demo <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </nav>
  );
}
