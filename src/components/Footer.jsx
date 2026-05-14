import { ArrowRight, Linkedin, X } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#eab18f] via-[#b58ec0] to-[#7a67d8] text-white pt-16 md:pt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Top Grid */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {/* Logo + Description */}
          <div className="space-y-4">
            <h1 className="text-xl font-bold">BidMind</h1>

            <p className="text-sm opacity-90 max-w-xs">
              Faster RFP workflows with genAI-first content management & AI
              agents.
            </p>

            <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-md w-fit hover:opacity-90 transition">
              Book a Demo <ArrowRight size={16} />
            </button>
          </div>

          {/* Column 1 */}
          <div>
            <h4 className="font-semibold mb-4">All pages</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li className="hover:opacity-100 cursor-pointer">Home</li>
              <li className="hover:opacity-100 cursor-pointer">Features</li>
              <li className="hover:opacity-100 cursor-pointer">Contact us</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>RFPs</li>
              <li>RFIs</li>
              <li>Security Questionnaires</li>
              <li>RFP Automation</li>
              <li>AI RFP for Sales Team</li>
              <li>AI RFP for Revenue Team</li>
              <li>AI RFP for Solutions Team</li>
              <li>AI RFP for Proposal Team</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Blog</li>
              <li>Ebooks</li>
              <li>Podcasts</li>
              <li>Case Studies</li>
              <li>Glossary</li>
              <li>Integrations</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Terms & conditions</li>
              <li>Security</li>
              <li>Privacy</li>
            </ul>
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap justify-center items-center gap-8 mt-14 md:mt-16">
          <img
            src="/images/badge1.png"
            alt="badge1"
            className="h-24 md:h-32 object-contain"
          />

          <img
            src="/images/badge2.avif"
            alt="badge2"
            className="h-28 md:h-40 object-contain"
          />

          <img
            src="/images/badge3.png"
            alt="badge3"
            className="h-24 md:h-32 object-contain"
          />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-white text-gray-700 mt-16 md:mt-20 py-4">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-center md:text-left">
            © 2026 BidMind. All rights reserved.
          </p>

          <div className="flex gap-4">
            <X
              size={18}
              className="cursor-pointer hover:text-black transition"
            />
            <Linkedin
              size={18}
              className="cursor-pointer hover:text-black transition"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
