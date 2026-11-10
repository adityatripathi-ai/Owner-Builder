import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import phone4 from "../../assets/images/phone-3.png";
import warmBg from "../../assets/images/Warm-architectural-setting.png";

const PerspectiveSection = () => {
  return (
    <section className="w-full bg-[#F8F7F3] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10 py-12 sm:py-16 md:py-20">

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 lg:gap-16">

          {/* LEFT SIDE - PHONE WITH BACKGROUND */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center items-center min-h-[340px] sm:min-h-[400px] md:min-h-[440px]"
          >
            {/* Background Image */}
            <img
              src={warmBg}
              alt=""
              className="absolute inset-0 w-full h-full object-cover rounded-sm"
            />

            {/* Phone Image */}
            <img
              src={phone4}
              alt="Riogrow mobile application"
              className="relative z-10 w-[55%] sm:w-[45%] md:w-[52%] lg:w-[45%] max-w-[270px] max-h-[360px] object-contain"
            />
          </motion.div>

          {/* RIGHT SIDE - CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-[480px]"
          >
            <p className="text-[#7771D5] text-[10px] uppercase tracking-[2px] font-semibold mb-4">
              Your project, wherever you are
            </p>

            <h2 className="font-serif text-[#20244F] text-[30px] sm:text-[36px] md:text-[40px] lg:text-[44px] leading-[1.15]">
              Keep the next step close at hand.
            </h2>

            <p className="text-[#777777] text-[12px] sm:text-[13px] leading-[1.8] mt-5">
              Building a home comes with a lot of moving parts. Stay connected
              to your project, keep track of important details and manage your
              next steps with everything accessible from your mobile device.
            </p>

            <Link
              to="/services"
              className="inline-flex items-center gap-4 mt-7 bg-[#20244F] text-white px-6 py-3.5 text-[11px] hover:bg-[#7771D5] transition-all duration-300"
            >
              Explore the platform
              <span className="text-base">→</span>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PerspectiveSection;