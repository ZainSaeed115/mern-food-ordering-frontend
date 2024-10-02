import { Shield, FileText, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <div className="bg-orange-500 py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Brand name */}
        <span className="text-4xl text-white font-extrabold tracking-tighter">
          MernEats.com
        </span>
        
        {/* Links section */}
        <div className="text-white flex flex-col md:flex-row items-center md:space-x-8 space-y-4 md:space-y-0">
          <div className="flex items-center gap-2 hover:text-gray-200 transition-colors duration-300 cursor-pointer">
            <Shield size={24} />
            <span className="text-xl font-semibold">Privacy Policy</span>
          </div>
          <div className="flex items-center gap-2 hover:text-gray-200 transition-colors duration-300 cursor-pointer">
            <FileText size={24} />
            <span className="text-xl font-semibold">Terms of Service</span>
          </div>
        </div>

        {/* Social media icons */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition-colors duration-300">
            <Facebook size={28} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition-colors duration-300">
            <Instagram size={28} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition-colors duration-300">
            <Linkedin size={28} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
