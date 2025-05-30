import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";

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
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpenDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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

          {/* Navigation and resume dropdown */}
          <div className="flex items-center space-x-4">
            <nav className="hidden sm:flex">
              <Navigation />
            </nav>

            {/* Resume Dropdown Button with custom darker gradient */}
            <div className="relative hidden sm:block" ref={dropdownRef}>
              <button
                onClick={() => setIsOpenDropdown(!isOpenDropdown)}
                style={{
                  background: "linear-gradient(90deg, #2a0555, #45115f, #7a2c6e)",
                }}
                className="text-white font-semibold py-2 px-5 rounded-lg shadow-lg hover:brightness-90 transition flex items-center gap-2"
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

              {isOpenDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-gradient-to-br from-purple-700 via-indigo-800 to-pink-700 text-white ring-1 ring-black ring-opacity-5"
                >
                  <a
                    href="/Aditya-Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 hover:bg-purple-800 transition cursor-pointer rounded-t-md"
                    onClick={() => setIsOpenDropdown(false)}
                  >
                    View Resume
                  </a>
                  <a
                    href="/Aditya-Resume.pdf"
                    download="Aditya-Resume.pdf"
                    className="block px-4 py-2 hover:bg-pink-800 transition cursor-pointer rounded-b-md"
                    onClick={() => setIsOpenDropdown(false)}
                  >
                    Download Resume
                  </a>
                </motion.div>
              )}
            </div>

            {/* Hamburger Icon */}
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
            {/* Resume Download Button on Mobile */}
            <a
              href="/Aditya-Resume.pdf"
              download="Aditya-Resume.pdf"
              className="inline-block bg-indigo-900 text-white font-semibold py-2 px-5 rounded-lg shadow-lg hover:brightness-90 transition"
            >
              Download Resume
            </a>
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
