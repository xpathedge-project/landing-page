import { ListIcon, XIcon } from '@phosphor-icons/react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-6 bg-black text-white relative">
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
        <ListIcon size={32} onClick={toggleMenu} />
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="md:hidden block w-4/6 h-[100vh] border border-[#aba9a983] fixed top-0 right-0 z-50 bg-black"
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            exit={{ x: 300 }}
            transition={{
              x: { type: 'spring', bounce: 0 },
              opacity: { duration: 0.2 },
            }}
          >
            <div className="flex flex-col w-full items-center text-2xl">
              {/* Close Button */}
              <div className="flex justify-end w-full p-4">
                <XIcon size={32} onClick={toggleMenu} />
              </div>

              {/* List items */}
              <div className="space-x-6 flex flex-col mb-10">
                <a href="#about" className="hover:text-red-500 mb-2">
                  About
                </a>
                <a href="#technologies" className="hover:text-red-500 mb-2">
                  Technologies
                </a>
                <a href="#products" className="hover:text-red-500 mb-2">
                  Products
                </a>
                <a href="#discover" className="hover:text-red-500 mb-2">
                  Discover
                </a>
              </div>
              <div className="space-x-6 flex flex-col">
                <a href="#team" className="hover:text-red-500 mb-2">
                  Team
                </a>
                <a href="#pricing" className="hover:text-red-500 mb-2">
                  Pricing
                </a>
                <a href="#buy-premium" className="hover:text-red-500 mb-2">
                  Buy Premium
                </a>
                <button className="bg-red-600 text-white px-4 py-2 mt-6 rounded-full hover:bg-red-700 text-lg">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
