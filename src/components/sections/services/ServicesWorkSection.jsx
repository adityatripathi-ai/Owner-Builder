import { motion } from "framer-motion";

import phone1 from "../../../assets/images/Mobile-device-mockup.png";   // Bid Estimates
import phone2 from "../../../assets/images/Mobile-device-mockup-3.png"; // Action Schedule
import phone3 from "../../../assets/images/Mobile-device-mockup-4.png"; // Brick / Contractor
import phone4 from "../../../assets/images/Mobile-device-mockup-2.png"; // Cards grid

const screens = [
  {
    title: "Understand the estimate",
    description:
      "Organize bid categories and amounts before moving into cost review.",
    image: phone1,
  },
  {
    title: "Coordinate the next trade",
    description:
      "Keep scheduled work and subcontractor information together.",
    image: phone2,
  },
  {
    title: "Contractor",
    description:
      "Organize bid categories and amounts before moving into cost review.",
    image: phone3,
  },
  {
    title: "Keep agreements close",
    description:
      "Maintain a clear place for forms and contracts throughout the project.",
    image: phone4,
  },
];

const ServicesWorkSection = () => {
  return (
    <section className="w-full bg-[#EAE6DF] px-5 sm:px-8 lg:px-10 py-12 sm:py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto">
        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-8 sm:mb-10"
        >
          <p className="text-[#20244F] text-[9px] sm:text-[14px] uppercase tracking-[0.12em] font-semibold mb-4">
            A closer look
          </p>

          <h2 className="font-serif text-[#20244F] text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.12] tracking-[-0.01em] font-normal">
            The work, brought into focus.
          </h2>

          <p className="mt-4 text-[#6F6F7E] text-[12px] sm:text-[15px] lg:text-[14px] leading-[1.7] max-w-[640px]">
            Explore the original application screens for estimates, trade
            scheduling and project agreements.
          </p>
        </motion.div>

        {/* FOUR PHONE SCREENS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10 sm:gap-x-6 lg:gap-x-8 items-center ml-10">
          {screens.map((screen, index) => (
            <motion.div
              key={screen.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="w-full"
            >
              {/* PHONE IMAGE: negative margins cut the transparent PNG padding,
                  so phone edge lines up with the text below */}
              <img
                src={screen.image}
                alt={screen.title}
                className="h-[240px] sm:h-[320px] lg:h-[430px] w-auto max-w-none object-contain object-left
                           -ml-[12%] -mt-[6%] -mb-[8%]"
              />

              {/* TEXT */}
              <h3 className="font-serif text-[#20244F] text-[17px] sm:text-[19px] lg:text-[20px] leading-tight mt-5">
                {screen.title}
              </h3>

              <p className="text-[#777777] text-[11px] sm:text-[15px] leading-[1.7] mt-2 max-w-[250px]">
                {screen.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CAPTION */}
        <p className="mt-10 sm:mt-12 text-[10px] sm:text-[13px] text-[#5b5a5a]">
          Unchanged source application screens. Sample entries shown are
          demonstration content.
        </p>
      </div>
    </section>
  );
};

export default ServicesWorkSection;