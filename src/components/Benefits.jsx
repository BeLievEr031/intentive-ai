import { Plus } from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      title: "Context-Aware Answers",
      description:
        "Competitors deliver generic responses. BidMind’s Context Engine goes deeper pulling from your floated documents, meeting notes, and even live web research to deliver highly contextual, tailored answers that sound like your team wrote them.",
      icon: "🧠",
    },
    {
      title: "Next-Gen Knowledge Management",
      description:
        "Forget outdated Q&A libraries. BidMind’s AI RFP software connects with your live tools SharePoint, Google Drive, Notion, Confluence, Salesforce, and more so your knowledge base always stays fresh, accurate, and up to date without manual work.",
      icon: "✔️",
      highlight: true,
    },
    {
      title: "Conflict-Free Accuracy",
      description:
        "Most tools just store answers. BidMind's AI RFP software is the first and only platform with proprietary LLM tech that detects and resolves conflicting information across your sources so your team always responds with consistent, client-ready answers.",
      icon: "🔁",
    },
  ];

  return (
    <section className="bg-[#f5f5f5] py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex justify-center items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">
              <Plus size={16} />
            </div>

            <span className="border px-4 py-1 rounded-full text-sm">
              Benefits
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-semibold text-[#0c2d3a] max-w-4xl mx-auto">
            Achieve a Competitive Edge with BidMind's RFP AI Software
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, index) => (
            <div
              key={index}
              className={`p-8 md:p-10 rounded-xl border bg-white hover:shadow-lg transition
              ${item.highlight ? "border-black shadow-sm" : "border-gray-200"}`}
            >
              {/* Icon */}
              <div className="text-3xl mb-6">{item.icon}</div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-semibold text-[#0c2d3a] mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
