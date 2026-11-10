import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";
import appstore from "../../assets/icons/appstore.png";
import playstore from "../../assets/icons/playstore.png";

const exploreLinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Services", to: "/services" },
  { name: "Resources", to: "/resources" },
  { name: "Contact Us", to: "/contact" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-white text-[#20244F]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">

        {/* MAIN FOOTER */}
        <div className="grid grid-cols-2 md:grid-cols-[1.5fr_0.8fr_0.8fr] gap-x-3 sm:gap-x-4 md:gap-x-12 gap-y-8 py-8 sm:py-10 md:py-12">

          {/* BRAND */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3">
              <img
                src={logo}
                alt="Owner Builders logo"
                className="w-11 h-11 sm:w-10 sm:h-10 md:w-9 md:h-9 object-contain shrink-0"
              />

             
            </Link>

            <p className="text-[#777777] text-xs sm:text-sm md:text-[11px] leading-[1.8] max-w-[320px] mt-3 sm:mt-4">
              A clearer way to organize the journey from your first
              plan to your final walkthrough.
            </p>
          </div>

          {/* EXPLORE LINKS */}
          <div className="justify-self-start">
            <h4 className="text-[10px] sm:text-xs md:text-[10px] uppercase tracking-[1px] font-semibold mb-3 sm:mb-4">
              Explore
            </h4>

            <ul className="flex flex-col gap-2 sm:gap-2.5 text-xs sm:text-sm md:text-[11px] text-[#45456A]">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="inline-block py-0.5 hover:text-[#7771D5] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT & APP LINKS */}
          <div className="justify-self-start">
            <h4 className="text-[10px] sm:text-xs md:text-[10px] uppercase tracking-[1px] font-semibold mb-3 sm:mb-4">
              Get in touch
            </h4>

            <div className="flex flex-col gap-2 sm:gap-3">
              <p className="text-xs sm:text-sm md:text-[11px] text-[#777777] whitespace-nowrap">
                Email to be confirmed
              </p>

              <p className="text-xs sm:text-sm md:text-[11px] text-[#777777] whitespace-nowrap">
                Phone to be confirmed
              </p>

              {/* APP LINKS */}
              <div className="flex items-center gap-2 mt-1">
                <a
                  href="#"
                  aria-label="Google Play"
                  className="flex items-center justify-center hover:opacity-75 transition-opacity"
                >
                  <img
                    src={playstore}
                    alt="Google Play"
                    className="w-7 h-7 sm:w-8 sm:h-8 md:w-7 md:h-7 object-contain"
                  />
                </a>

                <a
                  href="#"
                  aria-label="App Store"
                  className="flex items-center justify-center hover:opacity-75 transition-opacity"
                >
                  <img
                    src={appstore}
                    alt="App Store"
                    className="w-7 h-7 sm:w-8 sm:h-8 md:w-7 md:h-7 object-contain"
                  />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM FOOTER */}
        <div className="border-t border-[#EAEAEA] py-4 sm:py-5 flex flex-row justify-between items-center gap-2">

          <p className="text-[8px] sm:text-xs md:text-[10px] text-[#888888] whitespace-nowrap">
            © 2026 Owner Builder. All rights reserved.
          </p>

          <div className="flex flex-row items-center gap-2 sm:gap-5 text-[8px] sm:text-xs md:text-[10px] text-[#888888] whitespace-nowrap">
            <Link
              to="/privacy-policy"
              className="hover:text-[#20244F] transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms-conditions"
              className="hover:text-[#20244F] transition-colors"
            >
              Terms &amp; Conditions
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
