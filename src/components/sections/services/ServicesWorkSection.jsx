
import { motion } from "framer-motion";

import phone1 from "../../../assets/images/phone-1.png";
import phone2 from "../../../assets/images/phone-2.png";
import phone3 from "../../../assets/images/phone-3.png";

const screens = [
  {
    number: "01",
    title: "Project Overview",
    description:
      "Keep your project information and important details organised in one place.",
    image: phone1,
  },
  {
    number: "02",
    title: "Manage Your Budget",
    description:
      "Keep track of project costs and stay informed about your spending.",
    image: phone2,
  },
  {
    number: "03",
    title: "Track Your Progress",
    description:
      "Follow your project activities and stay updated at every stage.",
    image: phone3,
  },
  {
    number: "04",
    title: "Project Documents",
    description:
      "Keep your important project documents and records organised.",
    image: phone1, // Temporary image: replace with phone4 later
  },
];

const ServicesWorkSection = () => {
  return (
    <section className="w-full bg-[#F5F3EF] px-5 sm:px-8 lg:px-10 py-12 sm:py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto">

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-[600px] mb-9 sm:mb-12"
        >
          <p className="text-[#7771D5] text-[8px] sm:text-[9px] uppercase tracking-[1.5px] font-semibold mb-3">
            Inside the Platform
          </p>

          <h2
            className="text-[#303438] text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.12] font-normal"
            style={{ fontFamily: "Georgia, serif" }}
          >
            The work, brought into focus.
          </h2>

          <p className="mt-3 text-[#777777] text-[10px] sm:text-[11px] leading-[1.8] max-w-[480px]">
            A clearer view of the tools that help you organise
            your project, manage the details and keep everything
            moving forward.
          </p>
        </motion.div>

        {/* FOUR PHONE IMAGES */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6 lg:gap-8 items-start">
          {screens.map((screen, index) => (
            <motion.div
              key={screen.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="w-full text-center"
            >
              {/* PHONE IMAGE */}
              <div className="flex justify-center items-center h-[230px] sm:h-[270px] lg:h-[320px] -translate-x-2 sm:-translate-x-3 lg:-translate-x-4">
                <img
                  src={screen.image}
                  alt={screen.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* DESCRIPTION */}
              <div className="mt-4 text-left max-w-[220px] mx-auto">
               

                <h3
                  className="text-[#20244F] text-[13px] sm:text-[15px] mt-1 ml-5"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {screen.title}
                </h3>

                <p className="text-[#777777] text-[9px] ml-5 sm:text-[10px] leading-[1.7] mt-2">
                  {screen.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesWorkSection;
