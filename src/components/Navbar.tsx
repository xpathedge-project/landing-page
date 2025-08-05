import { ListIcon } from '@phosphor-icons/react';

const Navbar = () => {
  return (
    <nav className="p-6 bg-black text-white">
      <div className="hidden md:flex mx-auto w-10/12 justify-between items-center">
        <div className="space-x-6 ">
          <a href="#about" className="hover:text-red-500">
            About
          </a>
          <a href="#technologies" className="hover:text-red-500">
            Technologies
          </a>
          <a href="#products" className="hover:text-red-500">
            Products
          </a>
          <a href="#discover" className="hover:text-red-500">
            Discover
          </a>
        </div>
        <div className="space-x-6">
          <a href="#team" className="hover:text-red-500">
            Team
          </a>
          <a href="#pricing" className="hover:text-red-500">
            Pricing
          </a>
          <a href="#buy-premium" className="hover:text-red-500">
            Buy Premium
          </a>
          <button className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700">
            Get Started
          </button>
        </div>
      </div>

      <div className="md:hidden flex items-center justify-end w-full">
        <ListIcon size={32} />
      </div>
    </nav>
  );
};

export default Navbar;
