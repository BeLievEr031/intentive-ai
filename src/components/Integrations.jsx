import { Plus } from "lucide-react";

export default function Integrations() {

  const integrations = [
    {
      name: "Notion",
      type: "Productivity",
      icon: "/images/Notion.svg",
    },
    {
      name: "Confluence",
      type: "Productivity",
      icon: "/images/confluence.svg",
    },
    {
      name: "Google Drive",
      type: "Productivity",
      icon: "/images/gdrive.svg",
    },
    {
      name: "Slack",
      type: "Chat",
      icon: "/images/slack.svg",
    },
  ];

  return (
    <section className="bg-[#f6f6f6] py-20 md:py-24">

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">

          <div className="flex justify-center items-center gap-3 mb-4">

            <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
              <Plus size={16} />
            </div>

            <span className="border px-4 py-1 rounded-full text-sm">
              Integrations
            </span>

          </div>

          <h2 className="text-3xl md:text-5xl font-semibold text-[#0c2d3a]">
            Connect to the Tools You Already Use
          </h2>

        </div>

        {/* Cards */}
        <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 scroll-smooth">

          {integrations.map((item, index) => (
            <div
              key={index}
              className="min-w-[220px] md:min-w-[260px] bg-white border rounded-xl p-5 md:p-6 flex items-center gap-4 hover:shadow-lg transition"
            >

              <img
                src={item.icon}
                alt={item.name}
                className="w-9 h-9 md:w-10 md:h-10"
              />

              <div>
                <p className="font-semibold text-base md:text-lg">
                  {item.name}
                </p>

                <p className="text-gray-500 text-xs md:text-sm">
                  {item.type}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}