import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-orange-200 rounded-xl p-6 transition">

      {/* Question */}
      <div
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center cursor-pointer"
      >
        <h3 className="text-lg font-semibold text-[#0c2d3a]">
          {question}
        </h3>

        {open ? <Minus size={20} /> : <Plus size={20} />}
      </div>

      {/* Answer */}
      {open && (
        <p className="text-gray-600 mt-4 leading-relaxed">
          {answer}
        </p>
      )}
    </div>
  );
}