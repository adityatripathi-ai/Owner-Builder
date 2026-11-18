import { NavLink, Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";
import appstore from "../../assets/icons/appstore.png";
import playstore from "../../assets/icons/playstore.png";

const exploreLinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Services", to: "/services" },
  { name: "Resources", to: "/resources" },
  // { name: "Contact Us", to: "/contact" },
];

const footerLinkClass = ({ isActive }) =>
  `inline-block py-1 md:py-0.5 transition-all duration-300 ${
    isActive
      ? "font-semibold text-[#20244F] underline underline-offset-[5px] decoration-2 decoration-[#7771D5]"
      : "font-medium text-[#3D4056] hover:text-[#7771D5]"
  }`;

const Footer = () => {
  return (
    <footer className="w-full bg-white text-[#20244F]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">

        {/* MAIN FOOTER */}
        <div className="grid grid-cols-2 md:grid-cols-[1.5fr_0.8fr_0.8fr] gap-x-6 md:gap-x-12 gap-y-8 py-8 sm:py-10 md:py-12">

          {/* BRAND */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-block">
              <img
                src={logo}
                alt="Owner Builders logo"
                className="h-12 sm:h-14 md:h-14 w-auto max-w-[220px] object-contain object-left"
              />
            </Link>

            <p className="text-[#5B5E70] text-[14px] leading-[1.75] max-w-[320px] mt-4">
              A clearer way to organize the journey from your first
              plan to your final walkthrough.
            </p>
          </div>

          {/* EXPLORE LINKS */}
          <div className="min-w-0">
            <h4 className="text-[12px] uppercase tracking-[0.12em] font-semibold mb-3 sm:mb-4">
              Explore
            </h4>

            <ul className="flex flex-col gap-1 sm:gap-2 md:gap-2.5 text-[14px]">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    className={footerLinkClass}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT & APP LINKS */}
          <div className="min-w-0">
            <h4 className="text-[12px] uppercase tracking-[0.12em] font-semibold mb-3 sm:mb-4">
              Get in touch
            </h4>

            <div className="flex flex-col gap-2 sm:gap-3">

              {/* APP LINKS */}
              <div className="flex items-center gap-3 mt-1">
                <a
                  href="#"
                  aria-label="Google Play"
                  className="flex items-center justify-center hover:opacity-75 transition-opacity"
                >
                  <img
                    src={appstore}
                    alt="Google Play"
                    className="w-8 h-8 md:w-7 md:h-7 object-contain"
                  />
                </a>

                <a
                  href="#"
                  aria-label="App Store"
                  className="flex items-center justify-center hover:opacity-75 transition-opacity"
                >
                  <img
                    src={playstore}
                    alt="App Store"
                    className="w-8 h-8 md:w-7 md:h-7 object-contain"
                  />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM FOOTER */}
        <div className="border-t border-[#EAEAEA] py-4 sm:py-5 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">

          <p className="text-[12px] text-[#6B6E7E]">
            © 2026 Owner Builder. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-5 gap-y-1 text-[12px]">

            <NavLink
              to="/privacy-policy"
              className={footerLinkClass}
            >
              Privacy Policy
            </NavLink>

            <NavLink
              to="/terms-conditions"
              className={footerLinkClass}
            >
              Terms &amp; Conditions
            </NavLink>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;