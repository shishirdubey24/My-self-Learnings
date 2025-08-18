import { FaHeart, FaShoppingBag, FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">ShopEase</h1>
          </div>

          {/* Navigation Menu - Centered */}
          <nav className="flex items-center space-x-8">
            <a 
              href="#" 
              className="text-gray-700 hover:text-gray-900 font-medium transition duration-200 relative group"
            >
              Women
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a 
              href="#" 
              className="text-gray-700 hover:text-gray-900 font-medium transition duration-200 relative group"
            >
              Men
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a 
              href="#" 
              className="text-gray-700 hover:text-gray-900 font-medium transition duration-200 relative group"
            >
              Kids
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a 
              href="#" 
              className="text-gray-700 hover:text-gray-900 font-medium transition duration-200 relative group"
            >
              Home & Living
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a 
              href="#" 
              className="text-gray-700 hover:text-gray-900 font-medium transition duration-200 relative group"
            >
              Beauty
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a 
              href="#" 
              className="text-gray-700 hover:text-gray-900 font-medium transition duration-200 relative group"
            >
              Sale
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-200 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Right Side Icons - With Names and Spacing */}
          <div className="flex items-center space-x-8">
            <button className="flex flex-col items-center text-gray-600 hover:text-gray-900 transition duration-200">
              <FaUser className="h-5 w-5 mb-1" />
              <span className="text-xs">Profile</span>
            </button>
            <button className="flex flex-col items-center text-gray-600 hover:text-gray-900 transition duration-200 relative">
              <FaHeart className="h-5 w-5 mb-1" />
              <span className="text-xs">Wishlist</span>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                2
              </span>
            </button>
            <button className="flex flex-col items-center text-gray-600 hover:text-gray-900 transition duration-200 relative">
              <FaShoppingBag className="h-5 w-5 mb-1" />
              <span className="text-xs">Bag</span>
              <span className="absolute -top-1 -right-1 bg-gray-900 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
