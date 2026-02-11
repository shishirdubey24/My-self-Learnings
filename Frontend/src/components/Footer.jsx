import React from 'react';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn
} from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-bold mb-3">ShopEase</h2>
            <p className="text-gray-400 text-sm mb-4">
              Your trusted online shopping destination for quality products.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <MdPhone className="text-gray-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MdEmail className="text-gray-400" />
                <span className="text-gray-300">support@shopease.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="text-gray-400 hover:text-white transition">About Us</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
              <li><a href="/shipping" className="text-gray-400 hover:text-white transition">Shipping Info</a></li>
              <li><a href="/returns" className="text-gray-400 hover:text-white transition">Returns</a></li>
              <li><a href="/help" className="text-gray-400 hover:text-white transition">Help Center</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex gap-3 mb-4">
              <a href="#" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition">
                <FaTwitter />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition">
                <FaInstagram />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition">
                <FaLinkedinIn />
              </a>
            </div>
            <p className="text-gray-400 text-sm">Stay connected for exclusive deals and updates!</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black py-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2024 ShopEase. All rights reserved.</p>
          <div className="flex gap-6 mt-2 md:mt-0">
            <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;