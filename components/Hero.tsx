import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from './animations/FadeIn';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center bg-secondary">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.5 }}
          src="https://media.istockphoto.com/id/510477672/photo/shinjuku-business-district-tokyo-japan.jpg?s=2048x2048&w=is&k=20&c=kF_ZQqx5kHQzFWCj4FrkKjLD4Svosxq3m6Y5lVwBpsk=" 
          alt="Tokyo Cityscape" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Darker Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-secondary from-10% via-[#003575]/80 via-60% to-[#003176]/40 to-80%"></div>
        
        {/* Subtle Dot Pattern */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{ 
            backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', 
            backgroundSize: '40px 40px' 
          }}
        ></div>

        {/* Ambient Glows */}
        <motion.div 
          animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"
        ></motion.div>
        <motion.div 
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-10">
          
          <FadeIn delay={0.2} className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs sm:text-sm font-bold tracking-wider uppercase mb-2 sm:mb-4 backdrop-blur-sm">
            Japan Market Specialists
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-sans font-bold text-white leading-tight tracking-tight">
              Entering Japan Is Not a <span className="text-primary relative inline-block">
                Marketing Problem
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute bottom-1 left-0 h-1 bg-primary/30 -z-10"
                />
              </span>. <br className="hidden lg:block" />
              It’s a Market Adaptation Problem.
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.6}>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We bridge the gap between global ambition and local reality. Mahana helps foreign executives navigate Japan's unique digital ecosystem with data-backed localization strategies.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.8} className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 pt-4">
            {[
              "Native Japanese SEO & Content",
              "Bilingual Account Management",
              "Culturally Compliant UX"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white/5 px-4 sm:px-5 py-3 rounded-lg border border-white/10 w-full sm:w-auto justify-center hover:border-primary/50 transition-colors duration-300 backdrop-blur-sm">
                <CheckCircle2 className="text-primary flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-white font-medium text-base sm:text-lg">{item}</span>
              </div>
            ))}
          </FadeIn>

          <FadeIn delay={1.0} className="pt-8 sm:pt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="inline-flex items-center justify-center px-8 sm:px-10 py-4 border border-transparent text-base sm:text-lg font-bold rounded-md text-white bg-primary hover:bg-orange-600 transition-all w-full sm:w-auto"
            >
              Free consultation
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.98 }}
              href="#why-us"
              className="inline-flex items-center justify-center px-8 sm:px-10 py-4 border border-white/20 text-base sm:text-lg font-bold rounded-md text-white hover:border-white/40 transition-all w-full sm:w-auto"
            >
              Why us?
            </motion.a>
          </FadeIn>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;