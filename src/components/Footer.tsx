import React from 'react';
import { Brain, Mail, Phone, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-8">

          {/* Company Info - First Column */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h2 className="text-lg sm:text-xl font-bold">Intellimark AI</h2>
            </div>
            <div className="space-y-1 sm:space-y-2 text-center md:text-left">
              <p className="text-sm sm:text-base text-gray-300">Re-Engineering</p>
              <p className="text-sm sm:text-base text-gray-300">Revenue Management</p>
            </div>
          </div>

          {/* Contact - Second Column */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-purple-400" />
                <a
                  href="mailto:rahul@intellimark.ai"
                  className="text-sm sm:text-base text-gray-300 hover:text-purple-400 transition-colors duration-200 break-all"
                >
                  rahul@intellimark.ai
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-purple-400" />
                <a
                  href="tel:+919140929770"
                  className="text-sm sm:text-base text-gray-300 hover:text-purple-400 transition-colors duration-200"
                >
                  +91 9140929770
                </a>
              </div>
            </div>
          </div>

          {/* Company & Get In Touch - Third Column */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-6 text-center md:text-left">
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Company</h3>
              <ul className="space-y-1 sm:space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-sm sm:text-base text-gray-300 hover:text-purple-400 transition-colors duration-200"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/About"
                    className="text-sm sm:text-base text-gray-300 hover:text-purple-400 transition-colors duration-200"
                  >
                    About Us
                  </a>
                </li>
                {/* <li>
                  <a
                    href="#"
                    className="text-sm sm:text-base text-gray-300 hover:text-purple-400 transition-colors duration-200"
                  >
                    Products
                  </a>
                </li> */}
              </ul>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-purple-400">
                Get In Touch
              </h3>
              <a
                href="https://www.linkedin.com/company/intellimark-analytics/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-8 h-8 bg-purple-600 hover:bg-purple-700 rounded transition-colors duration-200"
              >
                <Linkedin className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
            © 2025 Intellimark Analytics private limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;