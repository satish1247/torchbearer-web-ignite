
import { Link } from 'react-router-dom';
import { Youtube, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1e1e1e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 - Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/e1b250f8-2fe6-45e9-853f-e525774f75ae.png" 
                alt="Torch Bearer Logo" 
                className="h-12 w-auto"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold">TORCH BEARER</span>
                <span className="text-sm text-[#f1c40f]">Lightning the future, Transforming the world</span>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-300 mb-2">Sub-companies:</p>
              <ul className="space-y-1 text-gray-300">
                <li>• TB Academy</li>
                <li>• TB Solutions</li>
                <li>• TB Digital</li>
              </ul>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <span>Made in India</span>
              <span className="text-lg">🇮🇳</span>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#f1c40f]">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-[#f1c40f] transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-[#f1c40f] transition-colors">About</Link></li>
              <li><Link to="/tb-academy" className="text-gray-300 hover:text-[#f1c40f] transition-colors">TB Academy</Link></li>
              <li><Link to="/tb-solutions" className="text-gray-300 hover:text-[#f1c40f] transition-colors">TB Solutions</Link></li>
              <li><Link to="/tb-digital" className="text-gray-300 hover:text-[#f1c40f] transition-colors">TB Digital</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-[#f1c40f] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3 - Connect With Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#f1c40f]">Connect With Us</h3>
            <div className="space-y-3">
              <a 
                href="http://linkedin.com/in/satyanarayanaganisetti" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-[#f1c40f] transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://youtube.com/@torchbearer-tb02?si=jIIyz-TkssBknkt7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-[#f1c40f] transition-colors"
              >
                <Youtube className="h-5 w-5" />
                <span>YouTube</span>
              </a>
              <a 
                href="https://www.instagram.com/torchbearer.inc?igsh=dWhpZHVza3MyYWkw&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-[#f1c40f] transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span>Instagram</span>
              </a>
              <a 
                href="mailto:torchbearer.startup@gmail.com"
                className="flex items-center space-x-2 text-gray-300 hover:text-[#f1c40f] transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>torchbearer.startup@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 Torch Bearer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
