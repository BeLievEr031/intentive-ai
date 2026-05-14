import { Cog, Gauge, TrendingUp } from "lucide-react";

export default function Results() {

  const results = [
    {
      value: "50%",
      title: "Higher Win Rates",
      icon: <Cog size={64} />,
    },
    {
      value: "90%",
      title: "Faster Response Time",
      icon: <Gauge size={64} />,
    },
    {
      value: "70%",
      title: "More Efficiency",
      icon: <TrendingUp size={64} />,
    },
  ];

  return (
    <section className="mt-16 py-20 md:py-28 bg-gradient-to-r from-[#efe6e6] to-[#f5e6e5]">

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Title */}
        <h2 className="text-center text-3xl md:text-5xl font-semibold text-[#0c2d3a] mb-12 md:mb-16">
          The Results Speak for Themselves
        </h2>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {results.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 md:p-12 text-center shadow-sm hover:shadow-xl transition"
            >

              {/* Text */}
              <h3 className="text-2xl md:text-3xl font-semibold mb-8">

                <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                  {item.value}
                </span>{" "}
                {item.title}

              </h3>

              {/* Icon */}
              <div className="flex justify-center text-purple-500">
                {item.icon}
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}