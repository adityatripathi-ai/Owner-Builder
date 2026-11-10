import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";
import appstore from "../../assets/icons/appstore.png";
import playstore from "../../assets/icons/playstore.png";

const Footer = () => {
  return (
    <footer className="w-full bg-white text-[#20244F]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">

        {/* MAIN FOOTER */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.5fr_0.7fr_0.7fr] gap-10 md:gap-14 py-10 md:py-12">

          {/* BRAND */}
          <div>
            <Link to="/" className="inline-block">
              <div className="flex items-center gap-3">
                <img
                  src={logo}
                  alt="Owner Builders logo"
                  className="h-8 w-auto shrink-0 object-contain"
                />

                <span className="text-[14px] font-semibold">
                  Owner Builder
                </span>
              </div>
            </Link>

            <p className="text-[#777777] text-[10px] leading-[1.8] max-w-[300px] mt-5">
              A clearer way to organize the journey from your first
              plan to your final walkthrough.
            </p>
          </div>

          {/* EXPLORE LINKS */}
          <div>
            <h4 className="text-[9px] uppercase tracking-[1px] font-semibold mb-4">
              Explore
            </h4>

            <ul className="flex flex-col gap-2.5 text-[10px] text-[#45456A]">
              <li>
                <Link to="/" className="hover:text-[#7771D5] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#7771D5] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#7771D5] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-[#7771D5] transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#7771D5] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT & APP LINKS */}
          <div>
            <h4 className="text-[9px] uppercase tracking-[1px] font-semibold mb-4">
              Get in touch
            </h4>

            <div className="flex flex-col gap-3">
              <p className="text-[10px] text-[#777777]">
                Email to be confirmed
              </p>

              <p className="text-[10px] text-[#777777]">
                Phone to be confirmed
              </p>

              <div className="flex items-center gap-2 mt-1">
                <a
                  href="#"
                  aria-label="Google Play"
                  className="flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity"
                >
                  <img
                    src={playstore}
                    alt="Google Play"
                    className="w-[26px] h-[26px] object-contain"
                  />
                </a>

                <a
                  href="#"
                  aria-label="App Store"
                  className="flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity"
                >
                  <img
                    src={appstore}
                    alt="App Store"
                    className="w-[26px] h-[26px] object-contain"
                  />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM FOOTER */}
        <div className="border-t border-[#EAEAEA] py-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">

          <p className="text-[9px] text-[#888888]">
            © 2026 Owner Builder. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-[9px] text-[#888888]">
            <Link to="/privacy-policy" className="hover:text-[#20244F] transition-colors">
              Privacy Policy
            </Link>

            <Link to="/terms-conditions" className="hover:text-[#20244F] transition-colors">
              Terms & Conditions
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;