
import { motion } from "framer-motion";

import vector1 from "../../../assets/icons/Vector-10.png";
import vector2 from "../../../assets/icons/Vector-11.png";
import vector3 from "../../../assets/icons/Vector-12.png";
import vector4 from "../../../assets/icons/Vector-13.png";
import vector5 from "../../../assets/icons/Vector-14.png";
import vector6 from "../../../assets/icons/Vector-15.png";
import vector7 from "../../../assets/icons/Vector-16.png";
import vector8 from "../../../assets/icons/Vector-18.png";
import vector9 from "../../../assets/icons/Vector-19.png";

import { TiltCard } from "../../common/Animations";

const features = [
  {
    icon: vector1,
    title: "Project organization",
    description:
      "Keep your location, project dimensions and core building information together. Start with a clear reference point for the whole build. Know exactly where and how to start a project.",
  },
  {
    icon: vector2,
    title: "Bids & cost tracking",
    description:
      "Organize bid estimates, compare actual costs with estimates and review the variances/differences to help you stay within your budget. Give financial conversations more context. Input your information once, and it populates other fields",
  },
  {
    icon: vector3,
    title: "Schedules & tasks",
    description:
      "Structure your schedule, action items and daily to-dos. Keep upcoming work and follow-ups visible as the project progresses. All in one place",
  },
  {
    icon: vector4,
    title: "Subcontractors & vendors",
    description:
      "Maintain the trade and supplier contacts connected to your build. Find the right person and their details when you need them. Click to call or email",
  },
  {
    icon: vector5,
    title: "Forms & contracts",
    description:
      "Organize your project agreements and forms in one place. Keep important paperwork available for reference and review. Upload your plans so you will be able to find them at all times",
  },
  {
    icon: vector6,
    title: "Selections",
    description:
      "Keep material and product choices organized with your project. Create a clearer record of the decisions that shape your home.",
  },
  {
    icon: vector7,
    title: "Utility setup",
    description:
      "Track the utility arrangements your build requires, including temporary services. Keep these practical site essentials on your radar.",
  },
  {
    icon: vector8,
    title: "Punch lists",
    description:
      "Record work still to be done, the responsible trade and completion details. Make the final walkthrough a more structured conversation.",
  },
  {
    icon: vector9,
    title: "Pictures & documents",
    description:
      "Upload project pictures and documents into folders. Keep a useful visual and written record as your home takes shape. All in one place and right in your pocket at your convenience.",
  },
];

const ServicesFeatures = () => {
  return (
    <section className="w-full bg-[#1D1F6B] py-14 sm:py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-10"
        >
          <p className="text-[10px] sm:text-[14px] tracking-[1.5px] font-semibold text-white/70 uppercase mb-4">
            The platform toolkit
          </p>

          <h2 className="font-['Georgia',serif] text-white text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px] leading-[1.15] tracking-[-1px] font-normal">
            Built for the Whole Construction Process
          </h2>

          <p className="text-white/80 text-[12px] sm:text-[13px] mt-4 max-w-[640px] leading-[1.7]">
            The tools that fit the work in front of you, while keeping the
            wider project in view.
          </p>
        </motion.div>

        {/* FEATURE CARDS */}
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
        >
          {features.map((feature, index) => (
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
                rounded-md
                p-5 sm:p-6
                flex flex-col
                transition-shadow duration-300
                hover:shadow-md
              "
            >
              <div className="flex items-start justify-between mb-5">
                {/* ICON ANIMATION */}
                <motion.img
                  src={feature.icon}
                  alt=""
                  aria-hidden="true"
                  className="h-5 w-5 object-contain"
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

                <span className="text-[#9A9AAE] text-[10px]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="text-[#20244F] text-[13px] sm:text-[16px] font-semibold leading-snug mb-2">
                {feature.title}
              </h3>

              <p className="text-[#777777] text-[11px] sm:text-[14px] leading-[1.7]">
                {feature.description}
              </p>
            </TiltCard>
          ))}
        </motion.ul>

      </div>
    </section>
  );
};

export default ServicesFeatures;
