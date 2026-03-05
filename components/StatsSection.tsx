import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from './animations/FadeIn';

const StatsSection: React.FC = () => {
  const stats = [
    { value: "+150%", label: "Lead Volume" },
    { value: "-40%", label: "CPA Reduction" },
    { value: "3X", label: "Organic Traffic" },
    { value: "12+", label: "Industries Served" },
  ];

  return (
    <section className="py-20 sm:py-32 bg-secondary text-white relative overflow-hidden">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-8 md:gap-10">
            {stats.map((stat, idx) => (
              <FadeIn 
                key={idx} 
                delay={idx * 0.1}
              >
                <motion.div 
                  whileHover={{ scale: 1.05, borderColor: "rgba(234, 88, 12, 0.5)" }}
                  className="text-center p-4 sm:p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                >
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-2 sm:mb-3 font-sans tracking-tight">{stat.value}</div>
                  <div className="text-xs sm:text-sm md:text-base text-gray-300 uppercase tracking-widest font-semibold">{stat.label}</div>
                </motion.div>
              </FadeIn>
            ))}
          </div>

          {/* Testimonial */}
          <FadeIn delay={0.4} className="flex flex-col h-full justify-center">
            <Quote className="text-primary/40 mb-6 sm:mb-8 w-12 h-12 sm:w-20 sm:h-20" />
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-light italic leading-relaxed mb-8 sm:mb-10 text-gray-100">
              "Mahana didn't just translate our ads; they rebuilt our entire funnel for the Japanese mindset. The difference in engagement was immediate and profound."
            </blockquote>
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center text-secondary font-bold text-xl sm:text-2xl flex-shrink-0">
                S
              </div>
              <div>
                <div className="font-bold text-white text-lg sm:text-xl">Sarah Jenkins</div>
                <div className="text-sm sm:text-base text-primary font-medium">CMO, TechGlobal Solutions</div>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default StatsSection;