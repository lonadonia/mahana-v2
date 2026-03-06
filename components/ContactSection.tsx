import React from 'react';
import FadeIn from './animations/FadeIn';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 sm:py-32 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div className="p-6 sm:p-12">
              <div className="text-center mb-6 sm:mb-8">
                <div className="inline-flex items-center justify-center mb-4">
                  <span className="h-px w-8 bg-primary/50 mr-3"></span>
                  <span className="text-primary font-bold tracking-wider uppercase text-sm">Get Started</span>
                  <span className="h-px w-8 bg-primary/50 ml-3"></span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-sans font-bold text-secondary mb-3 sm:mb-4">
                  Ready to Conquer the Japanese Market?
                </h2>
                <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
                  Fill out the form below. Our strategists will review your site and provide a preliminary market assessment. We typically respond within 24 hours.
                </p>
              </div>
              
              <form className="space-y-4 sm:space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="bg-gray-50 focus:bg-white block w-full rounded-md border-gray-300 focus:border-primary focus:ring-primary text-sm sm:text-base py-3 px-4 border transition-colors outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                    <input
                      type="text"
                      id="company"
                      className="bg-gray-50 focus:bg-white block w-full rounded-md border-gray-300 focus:border-primary focus:ring-primary text-sm sm:text-base py-3 px-4 border transition-colors outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="bg-gray-50 focus:bg-white block w-full rounded-md border-gray-300 focus:border-primary focus:ring-primary text-sm sm:text-base py-3 px-4 border transition-colors outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">What services are you interested in?</label>
                  <select
                    id="service"
                    className="bg-gray-50 focus:bg-white block w-full rounded-md border-gray-300 focus:border-primary focus:ring-primary text-sm sm:text-base py-3 px-4 border transition-colors outline-none"
                    defaultValue=""
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="PPC">PPC</option>
                    <option value="SEO">SEO</option>
                    <option value="Social Media Marketing">Social Media Marketing</option>
                    <option value="Blog Marketing">Blog Marketing</option>
                    <option value="All Services">All Services</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">Comment</label>
                  <textarea
                    id="comment"
                    rows={4}
                    className="bg-gray-50 focus:bg-white block w-full rounded-md border-gray-300 focus:border-primary focus:ring-primary text-sm sm:text-base py-3 px-4 border transition-colors outline-none"
                  ></textarea>
                </div>

                <div className="flex items-start mt-6 mb-2">
                  <div className="flex items-center h-5">
                    <input
                      id="privacy-policy"
                      name="privacy-policy"
                      type="checkbox"
                      required
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded cursor-pointer accent-primary"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="privacy-policy" className="text-gray-600 cursor-pointer select-none text-left block">
                      I have read and agree to the <a href="#" className="text-primary hover:underline font-medium">Privacy Policy</a> and <a href="#" className="text-primary hover:underline font-medium">Terms of Service</a>, and I consent to receiving communications.
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full flex justify-center py-4 px-4 border border-transparent rounded-md text-base sm:text-lg font-bold text-white bg-primary hover:bg-orange-600 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300"
                >
                  Free consultation
                </button>
              </form>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ContactSection;