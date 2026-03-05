import React from 'react';
import { Check, X } from 'lucide-react';
import FadeIn from './animations/FadeIn';

const ComparisonSection: React.FC = () => {
  const rows = [
    { feature: "Content Strategy", global: "Direct Translation", mahana: "Cultural Transcreation" },
    { feature: "Platform Expertise", global: "Google Only", mahana: "Google + Yahoo! Japan + LINE" },
    { feature: "Reporting", global: "Automated English Dashboards", mahana: "Bilingual Analysis & Insights" },
    { feature: "Local Presence", global: "Outsourced / None", mahana: "Based in Tokyo" },
    { feature: "Speed to Market", global: "Slow (Multiple Timezones)", mahana: "Fast (Direct Local Execution)" },
  ];

  return (
    <section id="why-us" className="py-20 sm:py-32 bg-gray-50 border-y border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-secondary tracking-tight">
              Why Partner with Mahana?
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-4 sm:mt-6 text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              We are not a generalist agency. We are specialists focused entirely on bridging the gap between global brands and the Japanese market.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.4}>
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 overflow-hidden shadow-sm">
            
            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-secondary text-white">
                    <th className="p-4 sm:p-6 lg:p-8 text-sm sm:text-base font-semibold w-1/3 uppercase tracking-wider">Feature</th>
                    <th className="p-4 sm:p-6 lg:p-8 text-sm sm:text-base font-semibold w-1/3 text-center uppercase tracking-wider bg-secondary/90">Typical Global Agency</th>
                    <th className="p-4 sm:p-6 lg:p-8 text-sm sm:text-base font-bold bg-primary w-1/3 text-center uppercase tracking-wider">Mahana</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {rows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition-colors">
                      <td className="p-4 sm:p-6 lg:p-8 text-base sm:text-lg font-medium text-gray-900">{row.feature}</td>
                      <td className="p-4 sm:p-6 lg:p-8 text-center text-base sm:text-lg text-gray-500">
                        <span className="flex flex-col items-center gap-1 sm:gap-2">
                          <X className="text-red-400 w-5 h-5 sm:w-6 sm:h-6" />
                          {row.global}
                        </span>
                      </td>
                      <td className="p-4 sm:p-6 lg:p-8 text-center text-base sm:text-lg font-bold text-secondary bg-primary/5 border-l-2 border-primary">
                        <span className="flex flex-col items-center gap-1 sm:gap-2">
                          <Check className="text-green-500 w-6 h-6 sm:w-7 sm:h-7" />
                          {row.mahana}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden divide-y divide-gray-100">
              {rows.map((row, idx) => (
                <div key={idx} className="p-5 hover:bg-gray-50 transition-colors">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 text-center border-b border-gray-100 pb-3">{row.feature}</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-3 bg-gray-50 rounded-xl border border-gray-100 flex flex-col justify-between">
                      <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-2">Typical Agency</div>
                      <span className="flex flex-col items-center gap-2 mt-auto">
                        <X className="text-red-400 w-6 h-6" />
                        <span className="text-sm text-gray-600 leading-tight">{row.global}</span>
                      </span>
                    </div>
                    <div className="text-center p-3 bg-primary/5 rounded-xl border border-primary/20 flex flex-col justify-between shadow-sm">
                      <div className="text-[10px] font-bold text-primary uppercase tracking-wider mb-2">Mahana</div>
                      <span className="flex flex-col items-center gap-2 mt-auto">
                        <Check className="text-green-500 w-6 h-6" />
                        <span className="text-sm font-bold text-secondary leading-tight">{row.mahana}</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ComparisonSection;