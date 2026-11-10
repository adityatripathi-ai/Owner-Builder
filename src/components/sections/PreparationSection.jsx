
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import planningImage from "../../assets/images/Architectural-photography.png";

const PreparationSection = () => {
  return (
    <section className="w-full bg-[#F8F7F3] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10 py-12 sm:py-14 md:py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-10 lg:gap-14">

          {/* LEFT SIDE - IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full"
          >
            <img
              src={planningImage}
              alt="Architectural planning and preparation"
              className="w-full h-[220px] sm:h-[280px] md:h-[320px] object-cover rounded-sm"
            />
          </motion.div>

          {/* RIGHT SIDE - CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-[480px]"
          >
            <p className="text-[#7771D5] text-[9px] sm:text-[10px] uppercase tracking-[1.5px] font-semibold mb-3">
              Start with the right mindset
            </p>

            <h2 className="font-serif text-[#20244F] text-[27px] sm:text-[32px] md:text-[35px] leading-[1.15]">
              A little preparation goes a long way.
            </h2>

            <p className="text-[#777777] text-[11px] sm:text-[12px] leading-[1.8] mt-4">
              Explore practical guidance on planning, comparing bids and
              organizing project documents. Start with the right resources
              to make informed decisions throughout your home-building journey.
            </p>

            <Link
              to="/services"
              className="inline-flex items-center gap-3 mt-5 border border-[#DAD8D2] px-4 py-2.5 text-[10px] text-[#20244F] hover:bg-[#20244F] hover:text-white transition-all duration-300"
            >
              Visit resources
              <span className="text-sm">→</span>
            </Link>

            <p className="text-[#999999] text-[9px] leading-[1.6] mt-5 max-w-[390px]">
              Good preparation helps you approach your project with greater
              clarity and confidence.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PreparationSection;
