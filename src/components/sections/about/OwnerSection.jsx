import { motion } from "framer-motion";
import aboutImage from "../../../assets/images/herobg.png";

const OwnerSection = () => {
  const points = [
    {
      number: "01",
      title: "Stay informed",
      description:
        "Keep important project information organised and easy to understand.",
    },
    {
      number: "02",
      title: "Stay organised",
      description:
        "Bring plans, people and project details together in one place.",
    },
    {
      number: "03",
      title: "Stay in control",
      description:
        "Make confident decisions with a clearer view of your building journey.",
    },
  ];

  return (
    <section className="w-full bg-[#F8F7F3] py-14 sm:py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative w-full max-w-[520px] mx-auto lg:mx-0"
          >
            {/* Background accent */}
            <div className="absolute -left-3 -bottom-3 sm:-left-4 sm:-bottom-4 w-full h-full border-[2px] border-[#A9A5F5] rounded-sm" />

            <img
              src={aboutImage}
              alt="Building and construction project"
              className="relative z-10 w-full h-[280px] sm:h-[360px] lg:h-[440px] object-cover rounded-sm"
            />
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full"
          >
            <span className="text-[10px] sm:text-xs uppercase tracking-[2px] text-[#7771D5] font-semibold">
              Built for the Owner
            </span>

            <h2 className="mt-4 font-serif text-[#20244F] text-[30px] sm:text-[38px] lg:text-[46px] leading-[1.12]">
              Keep the owner at the centre.
            </h2>

            <p className="mt-5 text-[13px] sm:text-sm leading-7 text-[#666666] max-w-[480px]">
              Building a home involves many moving parts. We believe owners
              should have the clarity, information and organisation they need
              to stay involved throughout the process.
            </p>

            {/* POINTS */}
            <div className="mt-8 space-y-5">
              {points.map((point) => (
                <div
                  key={point.number}
                  className="flex gap-4 border-b border-[#DDDAD3] pb-5"
                >
                  <span className="text-xs text-[#7771D5] font-semibold pt-1">
                    {point.number}
                  </span>

                  <div>
                    <h3 className="text-[15px] sm:text-base text-[#20244F] font-semibold">
                      {point.title}
                    </h3>

                    <p className="mt-1 text-xs sm:text-[13px] leading-6 text-[#777777]">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default OwnerSection;