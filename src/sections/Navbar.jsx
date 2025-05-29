import { useState } from "react";
import { motion } from "motion/react";

function Navigation() {
  return (
    <ul className="flex space-x-8 items-center m-0 p-0 list-none">
      <li>
        <a
          href="#home"
          className="text-neutral-400 hover:text-white transition"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#about"
          className="text-neutral-400 hover:text-white transition"
        >
          About
        </a>
      </li>
      <li>
        <a
          href="#work"
          className="text-neutral-400 hover:text-white transition"
        >
          Work
        </a>
      </li>
      <li>
        <a
          href="#contact"
          className="text-neutral-400 hover:text-white transition"
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="w-full">
        <div className="flex items-center justify-between py-2 px-4">
          {/* Logo and name */}
          <a
            href="/"
            className="flex items-center space-x-4 text-xl font-bold text-neutral-400 hover:text-white"
          >
            <img
              src="/myprofile.png"
              alt="Logo"
              className="w-12 h-12 object-contain ml-1"
            />
            <span>Adi</span>
          </a>

          {/* Navigation and hamburger */}
          <div className="flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="sm:hidden text-neutral-400 hover:text-white focus:outline-none"
            >
              <img
                src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
                className="w-6 h-6"
                alt="toggle"
              />
            </button>
            <nav className="hidden sm:flex ml-8">
              <Navigation />
            </nav>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
