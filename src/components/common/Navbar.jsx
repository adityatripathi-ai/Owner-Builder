import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import logo from "../../assets/images/logo.png";
import apps from "../../assets/images/primaryaction.png";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
];

// Active page = bold + underline, baaki links normal (hover pe purple)
const linkClass = (size) => ({ isActive }) =>
  `${size} transition-colors duration-300 ${
    isActive
      ? "font-semibold text-[#20244F] underline underline-offset-[6px] decoration-2 decoration-[#7771D5]"
      : "font-medium text-[#20244F] hover:text-[#7771D5]"
  }`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white relative z-50">
      <nav className="w-full bg-white max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">

        <div className="h-[65px] flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="shrink-0 flex items-center">
            <img
              src={logo}
              alt="Website Logo"
              className="w-[110px] h-[38px] object-contain object-left"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }}
            className="hidden lg:flex items-center gap-6 xl:gap-8"
          >
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                variants={{
                  hidden: { opacity: 0, y: -8 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
              >
                <NavLink
                  to={link.href}
                  end={link.href === "/"}
                  className={linkClass("text-[11px] xl:text-xs")}
                >
                  {link.name}
                </NavLink>
              </motion.div>
            ))}
          </motion.div>

          {/* RIGHT ACTION IMAGE */}
          <Link to="/contact" className="hidden lg:flex items-center shrink-0">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              src={apps}
              alt="Primary actions"
              className="w-[90px] xl:w-[105px] h-auto object-contain"
            />
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-[#20244F] text-xl p-2"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-white"
            >
              <div className="bg-white border-t border-gray-100 py-5 px-4 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.href}
                    end={link.href === "/"}
                    onClick={() => setMenuOpen(false)}
                    className={(state) => `w-fit ${linkClass("text-xs")(state)}`}
                  >
                    {link.name}
                  </NavLink>
                ))}

                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="w-fit"
                >
                  <img
                    src={apps}
                    alt="Primary actions"
                    className="w-[100px] h-auto object-contain"
                  />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </nav>
    </header>
  );
};

export default Navbar;