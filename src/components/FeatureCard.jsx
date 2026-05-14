export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-10 hover:shadow-lg transition">

      {/* Icon */}
      <div className="mb-6 text-3xl">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-[#0c2d3a] mb-4">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>

    </div>
  );
}