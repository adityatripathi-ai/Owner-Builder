
import { motion } from "framer-motion";

const features = [
  {
    icon: "▱",
    title: "Project organisation",
    description:
      "Keep your business, project information and core building management details together, with all your important project files in one place.",
  },
  {
    icon: "▣",
    title: "Bills & cost tracking",
    description:
      "Organise estimates, compare and track spending, and review your costs with a clearer view of your budget.",
  },
  {
    icon: "▤",
    title: "Schedules & tasks",
    description:
      "Structure your schedule, action items and key activities, keeping work and tasks visible as the project progresses.",
  },
  {
    icon: "♧",
    title: "Subcontractors & vendors",
    description:
      "Maintain a record of the people and businesses involved in your build, so you can keep important contacts and details close at hand.",
  },
  {
    icon: "▣",
    title: "Forms & contracts",
    description:
      "Organise your project agreements and keep important documents and contracts accessible throughout the building process.",
  },
  {
    icon: "♧",
    title: "Selections",
    description:
      "Keep track of your product choices, materials and selections in one place, making it easier to review decisions.",
  },
  {
    icon: "⌁",
    title: "Utility setup",
    description:
      "Track the utility arrangements your build needs, including important details that help prepare your new home.",
  },
  {
    icon: "⚑",
    title: "Punch lists",
    description:
      "Record what needs to be done, track responsibilities and keep outstanding items visible as the project moves forward.",
  },
  {
    icon: "▧",
    title: "Pictures & documents",
    description:
      "Upload project pictures and documents, keep important records organised and make project information easier to access.",
  },
];

const ServicesFeatures = () => {
  return (
    <section className="w-full bg-[#20244F] py-14 sm:py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-10"
        >
          <p className="text-[9px] tracking-[2px] text-[#A9A5F5] uppercase mb-3">
            The Building Process
          </p>

          <h2 className="font-serif text-white text-2xl sm:text-3xl lg:text-[38px] leading-tight">
            Built for the Whole Construction Process
          </h2>

          <p className="text-white/70 text-[10px] sm:text-xs mt-3 max-w-[600px] leading-5">
            The tools that fit the work in front of you, while bringing the
            whole project in view.
          </p>
        </motion.div>

        {/* FEATURE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="bg-white rounded-md min-h-[155px] sm:min-h-[170px] p-5 sm:p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[#7771D5] text-lg">
                  {feature.icon}
                </span>
                <span className="text-[#A9A5F5] text-xs">↗</span>
              </div>

              <h3 className="text-[#20244F] text-xs sm:text-sm font-semibold mb-2">
                {feature.title}
              </h3>

              <p className="text-[#777777] text-[10px] sm:text-[11px] leading-[1.6]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesFeatures;
