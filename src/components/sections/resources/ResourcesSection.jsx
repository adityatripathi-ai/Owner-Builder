import { motion } from "framer-motion";

// Document icon. Baad me apna asli icon yahan badal dena.
import vector1 from "../../../assets/icons/Vector-22.png";

const resources = [
  {
    category: "Planning",
    title: "Project preparation checklist",
    description:
      "A structured place to collect the core details and questions for your build.",
  },
  {
    category: "Budgeting",
    title: "Bid comparison worksheet",
    description:
      "A proposed worksheet for reviewing scope, exclusions and allowances side by side.",
  },
  {
    category: "Selections",
    title: "Selections record",
    description:
      "A proposed record of product details, finishes and outstanding decisions.",
  },
];

const ResourcesSection = () => {
  return (
    <section className="w-full bg-white px-5 sm:px-8 lg:px-10 pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-14 lg:pb-16">
      <div className="max-w-[1200px] mx-auto">

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[#1D1F6B] text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.12em] mb-4">
            Project documents
          </p>

          <h2 className="font-serif text-[#20244F] text-[28px] sm:text-[34px] lg:text-[40px] leading-[1.12] tracking-[-0.01em] max-w-[680px]">
            Useful structure. Approved files to follow.
          </h2>

          <p className="text-[#777777] text-[12px] sm:text-[13px] leading-[1.7] mt-5 max-w-[620px]">
            These proposed documents are not yet available. Final content, file
            formats and suitability will be confirmed before publication.
          </p>
        </motion.div>

        {/* DOCUMENT LIST */}
        <ul className="mt-10 sm:mt-12">
          {resources.map((resource, index) => (
            <motion.li
              key={resource.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-5 sm:py-6 border-b border-[#ECEAE4]"
            >
              {/* LEFT CONTENT */}
              <div className="flex items-start gap-4">
                <img
                  src={vector1}
                  alt=""
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 object-contain mt-1"
                />

                <div>
                  <p className="text-[#1D1F6B] text-[8px] sm:text-[9px] uppercase tracking-[0.1em] font-semibold">
                    {resource.category}
                  </p>

                  <h3 className="text-[#20244F] text-[15px] sm:text-[16px] font-medium mt-1">
                    {resource.title}
                  </h3>

                  <p className="text-[#777777] text-[11px] sm:text-[12px] leading-[1.6] mt-1 max-w-[600px]">
                    {resource.description}
                  </p>
                </div>
              </div>

              {/* DISABLED DOWNLOAD (pending approval) */}
              <button
                type="button"
                disabled
                aria-disabled="true"
                className="self-start sm:self-center shrink-0 cursor-not-allowed rounded-[3px] border border-[#E6E3DA] bg-[#F4F2ED] px-4 py-2.5 text-[10px] sm:text-[11px] text-[#8A8A98]"
              >
                Download · Pending approval
              </button>
            </motion.li>
          ))}
        </ul>

      </div>
    </section>
  );
};

export default ResourcesSection;