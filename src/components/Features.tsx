import React from 'react';
import { Sprout, BarChart3, Truck, Users } from 'lucide-react';

const features = [
  {
    icon: Sprout,
    title: "Virtual Gardening + Real-Life Integration",
    description: "Seamless blend of digital planning with hands-on cultivation"
  },
  {
    icon: BarChart3,
    title: "Smart Farm Management for Commercial Farmers",
    description: "Advanced analytics and insights for large-scale operations"
  },
  {
    icon: Truck,
    title: "Direct Crop Procurement & Fresh Delivery",
    description: "Streamlined supply chain from farm to table"
  },
  {
    icon: Users,
    title: "Connecting Gardeners and Farmers Together",
    description: "Building a community of agricultural enthusiasts"
  }
];

const Features: React.FC = () => {
  return (
    <section className="mb-14 sm:mb-24">
      <div className="text-center mb-6 sm:mb-12 px-2">
        <h2 className="text-base sm:text-2xl md:text-3xl font-semibold text-forest-800 mb-2 sm:mb-4">
          What We're Building
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`group bg-white/95 backdrop-blur-sm rounded-xl p-3 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-delay-2 feature-delay-${index + 1} border border-emerald-100`}
          >
            <div className="flex flex-col items-center text-center space-y-2 sm:space-y-4">
              <div className="w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-5 h-5 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-sm sm:text-lg font-semibold text-forest-800 leading-tight">
                {feature.title}
              </h3>
              <p className="text-forest-600 text-xs sm:text-sm leading-relaxed font-light">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
