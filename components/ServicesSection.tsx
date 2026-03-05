import React from 'react';
import { TrendingUp, MousePointerClick, FileEdit, Handshake } from 'lucide-react';
import FadeIn from './animations/FadeIn';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Japan SEO Strategy",
      desc: "Technical and content SEO optimized specifically for Yahoo! Japan and Google Japan algorithms. We build sustainable organic growth through deep keyword research and local intent mapping."
    },
    {
      icon: <MousePointerClick className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Localized PPC Campaigns",
      desc: "High-performing ad campaigns on Google Ads, Yahoo! Ads, and Facebook/Instagram. We manage budgets efficiently to lower CPA while capturing high-intent B2B and B2C leads."
    },
    {
      icon: <FileEdit className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Content Transcreation",
      desc: "More than translation—we rewrite blogs, LPs, and whitepapers from the ground up to ensure they resonate with Japanese cultural nuances and business etiquette."
    },
    {
      icon: <Handshake className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "B2B Trade & Sales Support",
      desc: "Digital support for trade shows, B2B lead generation, and sales enablement assets. We help your local sales team close deals with localized pitch decks and case studies."
    }
  ];

  return (
    <section id="services" className="py-20 sm:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-secondary tracking-tight">
              Comprehensive Market Entry Services
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-4 sm:mt-6 text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              End-to-end digital support for your Japanese expansion. We don't just advise; we execute.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, idx) => (
            <FadeIn 
              key={idx} 
              delay={idx * 0.1}
              className="h-full"
            >
              <div 
                className="bg-white p-6 sm:p-10 rounded-2xl border border-gray-200 group cursor-default flex flex-col sm:flex-row gap-4 sm:gap-6 items-start h-full transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/50"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-secondary border border-gray-100 group-hover:border-primary">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-12 sm:mt-20 text-center">
          <FadeIn delay={0.4}>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 sm:px-10 py-4 border border-transparent text-base sm:text-lg font-bold rounded-md text-white bg-primary hover:bg-orange-600 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Free consultation
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;