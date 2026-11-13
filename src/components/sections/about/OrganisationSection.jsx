
import { motion } from "framer-motion";

import featureIcon1 from "../../../assets/icons/Vector-2.png";
import featureIcon2 from "../../../assets/icons/Vector-15.png";
import featureIcon3 from "../../../assets/icons/Vector-7.png";

import { TiltCard } from "../../common/Animations";

const features = [
  {
    icon: featureIcon1,
    title: "Building knowledge",
    description:
      "Understand the building process, important stages and the details that matter when planning your home.",
  },
  {
    icon: featureIcon2,
    title: "Project organisation",
    description:
      "Keep your plans, tasks, documents and important project information organised in one place.",
  },
  {
    icon: featureIcon3,
    title: "Clear coordination",
    description:
      "Bring the people involved in your project together and make communication and decisions easier.",
  },
];

const OrganisationSection = () => {
  return (
    <section className="w-full bg-[#F8F7F3] px-4 sm:px-6 lg:px-8 py-14 md:py-20">
      <div className="max-w-[1200px] mx-auto">

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-[650px] mb-10 md:mb-12"
        >
          <p className="text-[#7771D5] text-[10px] sm:text-[14px] font-semibold uppercase tracking-[1.5px] mb-4">
            Practical by design
          </p>

          <h2
            className="
              font-['Georgia',serif]
              text-[#20244F]
              text-[26px]
              sm:text-[30px]
              md:text-[34px]
              lg:text-[38px]
              leading-[1.15]
              font-normal
            "
          >
            Where building knowledge
            <br className="hidden sm:block" />
            meets project organisation.
          </h2>

          <p className="text-[#666666] text-[12px] sm:text-[15px] leading-[1.7] mt-5">
            The platform’s capabilities reflect the real categories of information owners need to manage.
          </p>
        </motion.div>

        {/* FEATURE CARDS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5"
        >
          {features.map((feature) => (
            <TiltCard
              key={feature.title}
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0 },
                hover: { y: -5 },
              }}
              transition={{ duration: 0.6 }}
              whileHover="hover"
              className="
                bg-white
                border border-[#EAE8E3]
                rounded-sm
                p-6 md:p-7
                min-h-[190px]
                hover:border-[#A9A5F5]
                hover:shadow-md
                transition-all duration-300
              "
            >
              {/* ICON ANIMATION */}
              <div>
                <motion.img
                  src={feature.icon}
                  alt={`${feature.title} icon`}
                  className="w-5 h-5 object-contain"
                  style={{ transformPerspective: 400 }}
                  variants={{
                    hover: {
                      rotateY: 360,
                      scale: 1.15,
                      transition: {
                        duration: 0.7,
                        ease: "easeInOut",
                      },
                    },
                  }}
                />
              </div>

              {/* TITLE */}
              <h3
                className="
                  text-[#20244F]
                  text-[13px]
                  sm:text-[16px]
                  font-semibold
                  leading-snug
                  mt-6
                "
              >
                {feature.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-[#666666] text-[11px] sm:text-[14px] leading-[1.6] mt-3">
                {feature.description}
              </p>
            </TiltCard>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default OrganisationSection;
