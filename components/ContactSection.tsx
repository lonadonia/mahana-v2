import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 sm:py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="p-6 sm:p-12">
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-secondary mb-3 sm:mb-4 text-center">
              Ready to Conquer the Japanese Market?
            </h2>
            <p className="text-gray-600 text-base sm:text-lg text-center mb-8 sm:mb-10">
              Fill out the form below. Our strategists will review your site and provide a preliminary market assessment. We typically respond within 24 hours.
            </p>
            
            <form className="space-y-4 sm:space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="bg-gray-50 focus:bg-white block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary text-sm sm:text-base py-3 px-4 border transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                  <input
                    type="text"
                    id="company"
                    className="bg-gray-50 focus:bg-white block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary text-sm sm:text-base py-3 px-4 border transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 focus:bg-white block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary text-sm sm:text-base py-3 px-4 border transition-colors"
                />
              </div>

              <div>
                <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">Comment</label>
                <textarea
                  id="comment"
                  rows={4}
                  className="bg-gray-50 focus:bg-white block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary text-sm sm:text-base py-3 px-4 border transition-colors"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-4 px-4 border border-transparent rounded-md shadow-md text-base sm:text-lg font-bold text-white bg-primary hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all mt-4"
              >
                Free consultation
              </button>
              
              <p className="text-xs sm:text-sm text-center text-gray-500 mt-4">
                By submitting this form, you agree to our <a href="#" className="text-primary hover:underline">Privacy Policy</a>. We respect your inbox.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;