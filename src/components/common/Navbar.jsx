import { useEffect, useState } from "react";
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

  const closeMenu = () => setMenuOpen(false);

  // Menu khula ho to: page scroll lock + Esc se band + desktop size pe auto close
  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onChange = (e) => {
      if (e.matches) setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onChange);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onChange);
    };
  }, [menuOpen]);

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
            type="button"
            onClick={() => setMenuOpen(true)}
            className="lg:hidden p-2 -mr-2 text-[#20244F]"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU: right side se slide-in drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeMenu}
              className="lg:hidden fixed inset-0 z-40 bg-[#20244F]/40"
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.aside
              key="drawer"
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
              className="lg:hidden fixed top-0 right-0 z-50 flex max-h-full w-[82%] max-w-[320px] flex-col overflow-y-auto rounded-bl-2xl bg-white shadow-2xl"
            >
              <div className="h-[65px] shrink-0 flex items-center justify-end px-5">
                <button
                  type="button"
                  onClick={closeMenu}
                  className="p-2 -mr-2 text-[#20244F]"
                  aria-label="Close menu"
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                    <path d="M6 6l12 12M18 6 6 18" />
                  </svg>
                </button>
              </div>

              <div className="px-5 pb-6 flex flex-col gap-5">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.href}
                    end={link.href === "/"}
                    onClick={closeMenu}
                    className={(state) => `w-fit py-1 ${linkClass("text-base")(state)}`}
                  >
                    {link.name}
                  </NavLink>
                ))}

                <Link to="/contact" onClick={closeMenu} className="mt-2 w-fit">
                  <img
                    src={apps}
                    alt="Primary actions"
                    className="w-[110px] h-auto object-contain"
                  />
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;