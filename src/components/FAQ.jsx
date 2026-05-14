import { Plus } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      question: "What is RFP AI software?",
      answer: [
        "RFP AI refers to artificial intelligence technology used to automate the RFP (Request for Proposal) process. With an RFP AI platform like BidMind AI, companies can create, manage, and respond to RFPs faster by using intelligent automation, saving time and increasing win rates.",
      ],
    },
    {
      question:
        "How is BidMind AI different from tools like Loopio or Responsive?",
      answer: [
        "Unlike legacy RFP automation tools, BidMind AI goes beyond basic content retrieval. Our AI Agents dynamically learn from your past responses and knowledge sources (Google Drive, OneDrive, SharePoint, web pages) to generate highly accurate, context-aware answers.",
        "This deep automation ensures responses are not just fast, but also tailored and strategic—helping you win more bids with less effort.",
        "With our AI chatbot, you can also store and leverage competitor insights to refine your strategy and approach.",
        "Additionally, BidMind integrates seamlessly with your knowledge sources, enabling implementation in a fraction of the time required by traditional solutions.",
      ],
    },
    {
      question: "Can BidMind AI integrate with my existing tech stack?",
      answer: [
        "Yes! BidMind AI integrates with popular CRM platforms (Salesforce), collaboration tools (Slack), Google Drive, SharePoint, Notion, Confluence, Zendesk and more.",
      ],
    },
    {
      question: "How secure is my data with BidMind AI?",
      answer: [
        "Keeping your data secure is our top priority. We use end-to-end encryption, SOC 2 compliance, and role-based access controls.",
        "Your data is never shared with third parties, and we adhere to GDPR and CCPA standards.",
      ],
    },
    {
      question: "How accurate are the AI-generated responses?",
      answer: [
        "Our AI RFP response software achieves over 95% accuracy by leveraging your historical RFP data and approved content libraries. It also delivers over 90% accuracy using real-time feedback and knowledge sources.",
        "To enhance reliability, we provide AI-powered confidence ratings, allowing you to quickly spot gaps where additional input may be needed.",
        "We've also implemented safeguards against AI hallucinations. If your content library lacks the necessary information, our AI won't fabricate responses. Instead, it flags gaps so you remain in control of accuracy.",
      ],
    },
    {
      question: "What makes BidMind AI the best AI RFP response software?",
      answer: [
        "BidMind AI is built from the ground up, not just another tool with ChatGPT added in.",
        "Our platform leverages a blend of advanced LLMs and proprietary AI Agents, each designed to handle specific RFP tasks with precision.",
        "This approach ensures faster, more accurate responses while maintaining enterprise-grade security (SOC 2 compliance) and seamless integrations tailored to your workflow.",
      ],
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-[#f5f5f5]">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex justify-center items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">
              <Plus size={16} />
            </div>

            <span className="border px-4 py-1 rounded-full text-sm">
              RFP AI FAQs
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold text-[#0c2d3a] mb-4">
            AI-Driven RFP Software FAQ
          </h2>

          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            To address any concerns or curiosities you might have, here are
            answers to some frequently asked questions about AI RFP response
            software.
          </p>
        </div>

        {/* FAQ Cards */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-orange-200 rounded-2xl p-6 md:p-8 bg-white hover:shadow-md transition"
            >
              <h3 className="text-lg md:text-xl font-semibold text-[#0c2d3a] mb-4">
                {faq.question}
              </h3>

              <div className="space-y-3 text-gray-600 text-sm md:text-base leading-relaxed">
                {faq.answer.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
