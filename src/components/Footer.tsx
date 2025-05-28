import { Code, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Code className="h-8 w-8 text-navy-400 mr-2" strokeWidth={2.5} />
              <span className="text-2xl font-bold">Erkhem Consulting</span>
            </div>
            <p className="text-gray-400 mb-6">
              We craft exceptional web experiences that drive growth and deliver results for businesses of all sizes.
            </p>
            <div className="flex space-x-4">
              {/* <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-navy-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a> */}
              <a href="https://www.facebook.com/telmuun.narankhuu.1" className="bg-gray-800 p-2 rounded-full hover:bg-navy-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              {/* <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-navy-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a> */}
              {/* <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-navy-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a> */}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-navy-400 transition-colors">Custom Web Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-navy-400 transition-colors">Graphic Design</a></li>
              {/* <li><a href="#" className="text-gray-400 hover:text-navy-400 transition-colors">E-commerce Solutions</a></li> */}
              <li><a href="#" className="text-gray-400 hover:text-navy-400 transition-colors">Digital Strategy</a></li>
              {/* <li><a href="#" className="text-gray-400 hover:text-navy-400 transition-colors">SEO Optimization</a></li> */}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-navy-400 transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-navy-400 transition-colors">Services</a></li>
              {/* <li><a href="#portfolio" className="text-gray-400 hover:text-navy-400 transition-colors">Portfolio</a></li> */}
              <li><a href="#pricing" className="text-gray-400 hover:text-navy-400 transition-colors">Pricing</a></li>
              {/* <li><a href="#blog" className="text-gray-400 hover:text-navy-400 transition-colors">Blog</a></li> */}
              <li><a href="#contact" className="text-gray-400 hover:text-navy-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-800 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <div className="mb-4 md:mb-0">
            © 2025 Erkhem Consulting. All rights reserved.
          </div>
          <div className="flex space-x-6">
            {/* <Link to="/privacy-policy" className="hover:text-navy-400 transition-colors">Privacy Policy</Link> */}
            <Link to="/terms-conditions" className="hover:text-navy-400 transition-colors">Terms of Service</Link>
            {/* <a href="#" className="hover:text-navy-400 transition-colors">Cookie Policy</a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;