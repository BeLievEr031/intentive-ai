import FeatureCard from "./FeatureCard";
import { Zap, Users, Shuffle } from "lucide-react";

export default function FeatureCards() {
  const features = [
    {
      icon: <Zap size={32} />,
      title: "Strategic AI RFP Agents",
      description:
        "Beyond RFP response automation, BidMind gives you agents for competitive research and brainstorming, helping you surface differentiators and win themes that improve win rates.",
    },
    {
      icon: <Users size={32} />,
      title: "Share & Collaborate",
      description:
        "Easily add teammates to any project with customizable permission controls. Assign tasks, leave comments, and streamline management, all within a single platform.",
    },
    {
      icon: <Shuffle size={32} />,
      title: "End-to-End Flexibility",
      description:
        "From Excel-based questionnaires to long-form narrative proposals, BidMind generates compliant responses in any format. Reviewers on G2 love how easy it is to adapt BidMind to any RFP style.",
    },
  ];

  return (
    <section className="bg-[#f5f5f5] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
