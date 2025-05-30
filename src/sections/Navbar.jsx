import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navigation() {
  return (
    <ul className="flex space-x-8 items-center m-0 p-0 list-none">
      <li>
        <a href="#home" className="text-neutral-400 hover:text-white transition">
          Home
        </a>
      </li>
      <li>
        <a href="#about" className="text-neutral-400 hover:text-white transition">
          About
        </a>
      </li>
      <li>
        <a href="#work" className="text-neutral-400 hover:text-white transition">
          Work
        </a>
      </li>
      <li>
        <a href="#contact" className="text-neutral-400 hover:text-white transition">
          Contact
        </a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpenDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

          {/* Navigation and Resume Dropdown */}
          <div className="flex items-center space-x-4">
            <nav className="hidden sm:flex">
              <Navigation />
            </nav>

            {/* Resume Dropdown Button */}
            <div className="relative hidden sm:block" ref={dropdownRef}>
              <button
                onClick={() => setIsOpenDropdown(!isOpenDropdown)}
                className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold py-2 px-5 rounded-lg shadow-lg hover:brightness-110 transition flex items-center gap-2"
                aria-haspopup="true"
                aria-expanded={isOpenDropdown}
              >
                Resume
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isOpenDropdown ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              <AnimatePresence>
                {isOpenDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute right-0 mt-3 w-52 bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900 rounded-xl shadow-[0_10px_30px_rgba(139,92,246,0.6)] z-50 overflow-hidden border border-purple-700"
                  >
                    <a
                      href="/Aditya-Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-6 py-3 text-purple-300 hover:text-white hover:bg-purple-700 transition transform hover:scale-105 cursor-pointer"
                      onClick={() => setIsOpenDropdown(false)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-indigo-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A2 2 0 0122 9.618v4.764a2 2 0 01-2.447 1.894L15 14m-6 0l-4.553 2.276A2 2 0 012 14.382v-4.764a2 2 0 012.447-1.894L9 10m6 0v4m-6-4v4m3 4v-4m-3 0h6" />
                      </svg>
                      View Resume
                    </a>
                    <a
                      href="/Aditya-Resume.pdf"
                      download="Aditya-Resume.pdf"
                      className="flex items-center gap-3 px-6 py-3 text-purple-300 hover:text-white hover:bg-purple-700 transition transform hover:scale-105 cursor-pointer"
                      onClick={() => setIsOpenDropdown(false)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-pink-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 12v8m0-8l-4 4m4-4l4 4M12 4v8" />
                      </svg>
                      Download Resume
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Hamburger Icon for mobile */}
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
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
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
            {/* Mobile Resume Buttons */}
            <div className="mt-4 space-y-2">
              <a
                href="/Aditya-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block mx-auto w-4/5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold py-2 px-5 rounded-lg shadow-lg hover:brightness-110 transition"
              >
                🔍 View Resume
              </a>
              <a
                href="/Aditya-Resume.pdf"
                download="Aditya-Resume.pdf"
                className="block mx-auto w-4/5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold py-2 px-5 rounded-lg shadow-lg hover:brightness-110 transition"
              >
                ⬇ Download Resume
              </a>
            </div>
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
