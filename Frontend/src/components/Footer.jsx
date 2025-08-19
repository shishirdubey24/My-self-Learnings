import React from 'react';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaYoutube,
  FaCreditCard,
  FaPaypal,
  FaApplePay,
  FaGooglePay
} from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200">
      {/* Newsletter Subscription */}
      <div className="bg-gray-50 py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Stay Updated</h3>
              <p className="text-gray-600">Subscribe to get special offers, free giveaways, and updates.</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-80 px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
              />
              <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-r-lg font-semibold transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">ShopEase</h2>
              <p className="text-gray-600 mt-2">
                Your trusted online shopping destination for quality products at unbeatable prices.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <MdPhone className="text-gray-500" />
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MdEmail className="text-gray-500" />
                <span className="text-gray-600">support@shopease.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MdLocationOn className="text-gray-500" />
                <span className="text-gray-600">123 Commerce St, City, State 12345</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-600 hover:text-gray-900 transition duration-300">About Us</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-gray-900 transition duration-300">Contact Us</a></li>
              <li><a href="/careers" className="text-gray-600 hover:text-gray-900 transition duration-300">Careers</a></li>
              <li><a href="/blog" className="text-gray-600 hover:text-gray-900 transition duration-300">Blog</a></li>
              <li><a href="/testimonials" className="text-gray-600 hover:text-gray-900 transition duration-300">Testimonials</a></li>
              <li><a href="/press" className="text-gray-600 hover:text-gray-900 transition duration-300">Press</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="/help" className="text-gray-600 hover:text-gray-900 transition duration-300">Help Center</a></li>
              <li><a href="/shipping" className="text-gray-600 hover:text-gray-900 transition duration-300">Shipping Info</a></li>
              <li><a href="/returns" className="text-gray-600 hover:text-gray-900 transition duration-300">Returns & Exchanges</a></li>
              <li><a href="/size-guide" className="text-gray-600 hover:text-gray-900 transition duration-300">Size Guide</a></li>
              <li><a href="/track-order" className="text-gray-600 hover:text-gray-900 transition duration-300">Track Your Order</a></li>
              <li><a href="/warranty" className="text-gray-600 hover:text-gray-900 transition duration-300">Warranty</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Shop Categories</h3>
            <ul className="space-y-2">
              <li><a href="/electronics" className="text-gray-600 hover:text-gray-900 transition duration-300">Electronics</a></li>
              <li><a href="/clothing" className="text-gray-600 hover:text-gray-900 transition duration-300">Clothing</a></li>
              <li><a href="/home-garden" className="text-gray-600 hover:text-gray-900 transition duration-300">Home & Garden</a></li>
              <li><a href="/sports" className="text-gray-600 hover:text-gray-900 transition duration-300">Sports & Outdoors</a></li>
              <li><a href="/beauty" className="text-gray-600 hover:text-gray-900 transition duration-300">Beauty & Health</a></li>
              <li><a href="/books" className="text-gray-600 hover:text-gray-900 transition duration-300">Books & Media</a></li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold mb-2 text-gray-900">We Accept</h4>
              <div className="flex space-x-4">
                <FaCreditCard className="text-2xl text-gray-500 hover:text-gray-700 transition duration-300" />
                <FaPaypal className="text-2xl text-gray-500 hover:text-gray-700 transition duration-300" />
                <FaApplePay className="text-2xl text-gray-500 hover:text-gray-700 transition duration-300" />
                <FaGooglePay className="text-2xl text-gray-500 hover:text-gray-700 transition duration-300" />
              </div>
            </div>
            
            {/* Social Media Links */}
            <div>
              <h4 className="text-lg font-semibold mb-2 text-center md:text-left text-gray-900">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full transition duration-300">
                  <FaFacebookF className="text-lg" />
                </a>
                <a href="#" className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full transition duration-300">
                  <FaTwitter className="text-lg" />
                </a>
                <a href="#" className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full transition duration-300">
                  <FaInstagram className="text-lg" />
                </a>
                <a href="#" className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full transition duration-300">
                  <FaLinkedinIn className="text-lg" />
                </a>
                <a href="#" className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full transition duration-300">
                  <FaYoutube className="text-lg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-50 py-4 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-500 text-sm">
              © 2024 ShopEase. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-2 md:mt-0">
              <a href="/privacy" className="text-gray-500 hover:text-gray-700 text-sm transition duration-300">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-500 hover:text-gray-700 text-sm transition duration-300">
                Terms of Service
              </a>
              <a href="/cookies" className="text-gray-500 hover:text-gray-700 text-sm transition duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
