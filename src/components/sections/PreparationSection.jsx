import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import planningImage from "../../assets/images/Architectural-photography.png";

const PreparationSection = () => {
  return (
    <section className="w-full bg-[#F8F7F3] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10 py-12 sm:py-14 md:py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-10 lg:gap-14">

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

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-[480px]"
          >
            <p className="text-[#7771D5] text-[10px] sm:text-[14px] font-semibold uppercase tracking-[1.5px] mb-3">The owner’s field notes</p>

            <h2 className="font-['Georgia',serif] text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px] font-normal leading-[1.15] text-[#20244F]">
              A little preparation goes a long way.
            </h2>

            <p className="text-[#666666] text-[12px] sm:text-[15px] leading-[1.7] mt-4">
              Explore proposed guides on planning, comparing bids and organizing project documents. Start with the practical previews in our resource library.
            </p>

            <Link
              to="/services"
              className="text-[11px] sm:text-[13px] font-medium inline-flex items-center gap-3 mt-5 border border-[#DAD8D2] px-4 py-2.5 text-[#20244F] hover:bg-[#20244F] hover:text-white transition-all duration-300"
            >
              Visit resources
              <span className="text-sm">→</span>
            </Link>

            <p className="text-[#777777] text-[10px] sm:text-[13px] leading-[1.6] mt-5 max-w-[390px]">
              Editorial previews are proposed content. Final guides and downloads await approval.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PreparationSection;