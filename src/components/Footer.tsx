
import { Link } from 'react-router-dom';
import { Youtube, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#2c3e50] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/e1b250f8-2fe6-45e9-853f-e525774f75ae.png" 
                alt="Torch Bearer Logo" 
                className="h-12 w-auto"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold">TORCH BEARER</span>
                <span className="text-sm text-[#27ae60]">Lightning the future, Transforming the world</span>
              </div>
            </div>
            <p className="text-gray-300 max-w-md">
              Empowering innovation through technology, education, and digital transformation. 
              We light the path to a brighter future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#f1c40f]">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-[#27ae60] transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-[#27ae60] transition-colors">About</Link></li>
              <li><Link to="/companies" className="text-gray-300 hover:text-[#27ae60] transition-colors">Companies</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-[#27ae60] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#f1c40f]">Contact Info</h3>
            <div className="space-y-2 text-gray-300">
              <p>Email: torchbearer.startup@gmail.com</p>
              <p>WhatsApp: +91 6303987443</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-300 hover:text-[#27ae60] transition-colors">
                  <Youtube className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-[#27ae60] transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-[#27ae60] transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Torch Bearer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
