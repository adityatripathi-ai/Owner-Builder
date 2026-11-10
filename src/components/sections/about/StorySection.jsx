import { motion } from "framer-motion";

const StorySection = () => {
  return (
    <section className="w-full bg-[#F8F7F3] px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-24">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#7771D5] text-[9px] font-semibold uppercase tracking-[1.5px] mb-4">
              Our Story
            </p>

            <h2
              className="
                text-[#303030]
                text-[30px]
                sm:text-[34px]
                md:text-[36px]
                lg:text-[42px]
                leading-[1.08]
                tracking-[-1px]
                font-normal
                max-w-[420px]
              "
              style={{ fontFamily: "Georgia, serif" }}
            >
              Built around the work
              <br />
              behind the walls.
            </h2>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col justify-center"
          >
            <p className="text-[#666666] text-[11px] sm:text-xs leading-[1.9]">
              Every successful build involves countless decisions,
              conversations and moving parts. From the first plans
              to the final details, keeping everything organised
              can make a real difference.
            </p>

            <p className="text-[#666666] text-[11px] sm:text-xs leading-[1.9] mt-4">
              Owner Builders was created to bring more clarity to
              that process. By helping owners keep track of the
              details, people and decisions involved, we make the
              building journey easier to understand and manage.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default StorySection;
