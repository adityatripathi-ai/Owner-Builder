
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import aboutImage from "../../../assets/images/herobg.png";

const FeaturedSection = () => {
  const points = [
    "Understand your requirements before getting started.",
    "Know what to discuss with your architect or builder.",
    "Explore the important decisions at every stage.",
    "Plan ahead and avoid unexpected surprises.",
  ];

  return (
    <section className="w-full bg-[#20244F] px-5 sm:px-8 lg:px-10 py-8 sm:py-10">

      <div className="max-w-[1200px] mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 items-center">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <img
              src={aboutImage}
              alt="Home interior and planning"
              className="w-full h-[220px] sm:h-[300px] lg:h-[340px] object-cover"
            />

            {/* IMAGE CAPTION */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-[#F8F7F3] px-4 py-3">
              <p className="text-[#20244F] font-serif text-sm sm:text-base">
                Preparation is part of the build.
              </p>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white py-3 sm:py-5"
          >
            <p className="text-[#A6A4E9] text-[9px] sm:text-[10px] uppercase tracking-[2px] mb-4">
              Plan with confidence
            </p>

            <h2 className="font-serif text-[26px] sm:text-[32px] lg:text-[38px] leading-[1.15]">
              Before the first estimate,
              <br className="hidden lg:block" />
              get clear on the brief.
            </h2>

            <p className="text-white/70 text-[10px] sm:text-xs leading-6 mt-4 max-w-[450px]">
              A clear understanding of your project helps you make
              better decisions, communicate effectively and move
              forward with confidence.
            </p>

            {/* POINTS */}
            <div className="mt-5 space-y-4">
              {points.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3"
                >
                  <span className="text-[#A6A4E9] text-sm mt-0.5">
                    →
                  </span>

                  <p className="text-white/90 text-[10px] sm:text-xs leading-5">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            {/* LINK */}
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-6 text-[#C5C3FF] text-[10px] sm:text-xs font-medium border-b border-[#7771D5] pb-1 hover:text-white transition-colors"
            >
              Get started
              <span>↗</span>
            </Link>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
