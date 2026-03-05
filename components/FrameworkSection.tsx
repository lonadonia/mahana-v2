import React from 'react';
import { motion } from 'framer-motion';
import FadeIn from './animations/FadeIn';

const FrameworkSection: React.FC = () => {
  const steps = [
    {
      num: 1,
      title: "Audit & Research",
      desc: "Deep-dive analysis of your current assets, competitor benchmarking within the local JP market, and keyword opportunity mapping.",
    },
    {
      num: 2,
      title: "Cultural Adaptation",
      desc: "Localization of messaging, UI/UX adjustments for Japanese preferences, and building necessary trust signals.",
    },
    {
      num: 3,
      title: "Campaign Execution",
      desc: "Launch of targeted PPC campaigns, localized content publication, and B2B lead generation activation.",
    },
    {
      num: 4,
      title: "Continuous Optimization",
      desc: "Weekly data review, A/B testing, and continuous ROI improvement based on actual Japanese user behavior.",
    },
  ];

  return (
    <section id="framework" className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 sm:mb-20 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-secondary mb-4 sm:mb-6 tracking-tight">
              Our 4-Step Japan Market Entry Framework
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              A proven methodology to reduce risk and accelerate growth in one of the world's most unique markets.
            </p>
          </FadeIn>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[2.5rem] lg:top-[3.5rem] left-0 w-full h-1 bg-gray-100 -z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-10 relative z-10">
            {steps.map((step, idx) => (
              <FadeIn 
                key={idx} 
                delay={idx * 0.1}
                className="h-full"
              >
                <motion.div
                  whileHover={{ y: -5, borderColor: "rgba(234, 88, 12, 0.5)" }}
                  className={`bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 text-center md:text-left transition-all duration-300 h-full group`}
                >
                  <div
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center font-bold text-xl sm:text-2xl mb-6 sm:mb-8 mx-auto md:mx-0 ring-4 sm:ring-8 ring-white bg-gray-50 text-secondary border-2 border-gray-200 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors duration-300"
                  >
                    {step.num}
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{step.title}</h4>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">{step.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameworkSection;