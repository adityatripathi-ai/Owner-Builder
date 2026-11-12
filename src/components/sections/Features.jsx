import { motion } from "framer-motion";

import phone1 from "../../assets/images/phone-1.png";
import phone2 from "../../assets/images/phone-2.png";
import phone3 from "../../assets/images/phone-3.png";

const phones = [
  { image: phone1, alt: "Owner Builder project overview screen" },
  { image: phone2, alt: "Owner Builder task management screen" },
  { image: phone3, alt: "Owner Builder project calendar screen" },
];

const Features = () => {
  return (
    <section className="w-full bg-[#20244F] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10 py-12 md:py-16">

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[#A9A5F5] text-[10px] sm:text-[14px] font-semibold uppercase tracking-[1.5px] mb-3">Inside the platform</p>

          <h2 className="font-['Georgia',serif] text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px] font-normal leading-[1.15] text-white">
            Real tools. A more organized build.
          </h2>

          <p className="text-white/80 text-[12px] sm:text-[15px] leading-[1.7] mt-3 max-w-[500px]">
            Project overview, bid estimates and daily to-dos — working screens
            from the Owner Builder application.
          </p>
        </motion.div>

        {/* PHONE PREVIEW CARD */}
        <div className="mt-8 sm:mt-10 bg-[#E9E8E6] rounded-md px-3 sm:px-8 md:px-12 h-[300px] sm:h-[360px] md:h-[450px] overflow-hidden flex items-center justify-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
            className="flex items-center justify-center gap-2 sm:gap-6 md:gap-10 w-full h-full"
          >
            {phones.map((phone) => (
              <motion.div
                key={phone.alt}
                variants={{
                  hidden: { opacity: 0, y: 35, scale: 0.9 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className="w-[32%] sm:w-[30%] md:w-[27%] max-w-[230px] flex items-center justify-center"
              >
                <img
                  src={phone.image}
                  alt={phone.alt}
                  className="w-full max-h-[280px] sm:max-h-[340px] md:max-h-[400px] object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* BOTTOM TEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/70 text-[11px] sm:text-[14px] leading-[1.6] mt-5"
        >
          Original mobile application screens shown intact in a browser
          showcase. Sample project information is illustrative.
        </motion.p>

      </div>
    </section>
  );
};

export default Features;