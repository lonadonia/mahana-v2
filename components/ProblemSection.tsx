import React from 'react';
import { Languages, Search, ShieldAlert } from 'lucide-react';
import FadeIn from './animations/FadeIn';

const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: <Languages className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: "Direct Translation Fails",
      description: "Japanese consumers distrust direct translations. Nuance, honorifics (Keigo), and context are critical for building brand authority. A literal translation often sounds unnatural and damages trust before a user even considers your product.",
      colorClass: "bg-blue-100 text-secondary",
    },
    {
      icon: <Search className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: "Unique Keyword Behavior",
      description: "Japanese users search differently. They use unique phrasing, combinations, and three different writing systems (Kanji, Hiragana, Katakana) that Western keyword tools often miss completely, leaving massive search volume untapped.",
      colorClass: "bg-orange-100 text-primary",
    },
    {
      icon: <ShieldAlert className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: "Risk-Averse Culture",
      description: "Trust is the currency of Japan. Without specific trust signals, detailed company information, and comprehensive FAQs, conversion rates remain stagnant. Japanese B2B buyers need absolute certainty before making a decision.",
      colorClass: "bg-purple-100 text-purple-700",
    },
  ];

  return (
    <section id="problem" className="py-20 sm:py-32 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-secondary mb-4 sm:mb-6 tracking-tight">
              Why Most Foreign Companies Struggle in Japan
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-gray-600 text-lg sm:text-xl leading-relaxed">
              It's rarely about the product quality. It's about a fundamental disconnect in communication. What works in the US or Europe often falls flat in Tokyo.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {problems.map((prob, idx) => (
            <FadeIn 
              key={idx} 
              delay={idx * 0.1}
              className="h-full"
            >
              <div
                className="p-6 sm:p-10 rounded-2xl bg-gray-50 border border-gray-100 transition-all duration-300 group h-full hover:-translate-y-1 hover:border-orange-500/50"
              >
                <div className={`w-16 h-16 sm:w-20 sm:h-20 ${prob.colorClass} rounded-2xl flex items-center justify-center mb-6 sm:mb-8 transition-transform group-hover:scale-110`}>
                  {prob.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{prob.title}</h3>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  {prob.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;