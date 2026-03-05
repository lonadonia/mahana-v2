import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';
import FadeIn from './animations/FadeIn';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            
            <div className="col-span-1 md:col-span-2">
              <img 
                src="https://i.ibb.co/HTC9hMQm/logo.png" 
                alt="Mahana Logo" 
                className="h-10 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
                Helping global brands succeed in Japan through data-driven digital marketing and cultural adaptation.
              </p>
              <div className="mt-6 flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-300">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-300">
                  <Twitter size={18} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-gray-500">Services</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li><a href="#" className="hover:text-primary transition-colors">SEO & Content</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">PPC Advertising</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Market Research</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Web Localization</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-gray-500">Company</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>© 2024 Mahana Digital Agency. Tokyo, Japan. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
};

export default Footer;