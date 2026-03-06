import React from 'react';
import { CheckCircle2, ArrowRight, Globe, Users, Smartphone } from 'lucide-react';
import FadeIn from './animations/FadeIn';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-12 lg:pt-36 lg:pb-24 overflow-hidden min-h-[70vh] flex items-center bg-secondary">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://i.postimg.cc/kMtsFN5J/re.png" 
          alt="Tokyo Cityscape" 
          className="w-full h-full object-cover opacity-30 animate-[subtleZoom_20s_ease-in-out_infinite_alternate]"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Darker Background Layer */}
      <div className="absolute inset-0 z-0">
        {/* Simple dark overlay */}
        <div className="absolute inset-0 bg-secondary/47"></div>
        
        {/* Subtle Dot Pattern */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{ 
            backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', 
            backgroundSize: '40px 40px' 
          }}
        ></div>

        {/* Ambient Glows */}
        <div 
          className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse"
          style={{ animationDuration: '8s' }}
        ></div>
        <div 
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse"
          style={{ animationDuration: '10s', animationDelay: '1s' }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Text & Buttons */}
          <div className="lg:col-span-7 text-left space-y-6 sm:space-y-10">
            <FadeIn delay={0.2}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-white leading-[1.2] tracking-tight drop-shadow-md">
                Entering Japan Is Not a <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400 relative inline-block">
                  Marketing Problem
                </span>.<br className="hidden sm:block" />
                <span className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mt-3 sm:mt-4 block font-medium tracking-normal">It’s a Market Adaptation Problem.</span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <p className="text-base sm:text-xl text-gray-300 max-w-2xl leading-relaxed font-light border-l-2 border-primary/50 pl-4 sm:pl-6">
                We bridge the gap between global ambition and local reality. Mahana helps foreign executives navigate Japan's unique digital ecosystem with data-backed localization strategies.
              </p>
            </FadeIn>

            <FadeIn delay={0.6} className="hidden lg:flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 pt-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-xl text-white bg-primary hover:bg-orange-600 hover:scale-105 active:scale-95 transition-all duration-300 w-full sm:w-auto shadow-[0_0_40px_-10px_rgba(242,125,38,0.5)]"
              >
                Free consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#why-us"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-base font-bold rounded-xl text-white hover:bg-white/10 hover:border-white/40 hover:scale-105 active:scale-95 transition-all duration-300 w-full sm:w-auto backdrop-blur-sm"
              >
                Why us?
              </a>
            </FadeIn>
          </div>

          {/* Right Column: Feature Card */}
          <div className="lg:col-span-5 lg:ml-auto w-full max-w-md mx-auto lg:mx-0 mt-8 lg:mt-0">
            <FadeIn delay={0.8}>
              <div className="relative">
                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>

                <div className="space-y-4 relative z-10">
                  {[
                    {
                      title: "Native Japanese SEO & Content",
                    },
                    {
                      title: "Bilingual Account Management",
                    },
                    {
                      title: "Culturally Compliant UX",
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="group relative overflow-hidden rounded-2xl bg-white/3 backdrop-blur-md border-2 border-white/16 p-4 sm:p-5 transition-all duration-300 hover:bg-white/16 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="relative flex items-center gap-4 sm:gap-5">
                        <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                          <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h3 className="text-white font-semibold text-base sm:text-lg tracking-wide truncate group-hover:text-primary-100 transition-colors">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Mobile Buttons */}
          <div className="lg:hidden w-full mt-2">
            <FadeIn delay={0.9} className="flex flex-col gap-3 w-full">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-bold rounded-xl text-white bg-primary hover:bg-orange-600 hover:scale-105 active:scale-95 transition-all duration-300 w-full shadow-[0_0_40px_-10px_rgba(242,125,38,0.5)]"
              >
                Free consultation
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#why-us"
                className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-sm font-bold rounded-xl text-white hover:bg-white/10 hover:border-white/40 hover:scale-105 active:scale-95 transition-all duration-300 w-full backdrop-blur-sm"
              >
                Why us?
              </a>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;