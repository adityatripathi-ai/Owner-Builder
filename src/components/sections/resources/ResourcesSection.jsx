
import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";

const ResourcesSection = () => {
  const resources = [
    {
      number: "01",
      title: "Project preparation checklist",
      description:
        "A practical checklist to help you organise your ideas and prepare for your project.",
      type: "PDF DOCUMENT",
    },
    {
      number: "02",
      title: "Building regulations and guidance",
      description:
        "Useful information about important regulations, approvals and building requirements.",
      type: "PDF DOCUMENT",
    },
    {
      number: "03",
      title: "Home planning resource guide",
      description:
        "A helpful guide covering the essential stages of planning and building your home.",
      type: "RESOURCE GUIDE",
    },
  ];

  return (
    <section className="w-full bg-[#F5F4F0] px-5 sm:px-8 lg:px-10 py-12 sm:py-14 lg:py-16">

      <div className="max-w-[1200px] mx-auto">

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[#7771D5] text-[9px] sm:text-[10px] font-semibold uppercase tracking-[1.5px] mb-3">
            Resources & Downloads
          </p>

          <h2 className="font-serif text-[#20244F] text-[26px] sm:text-[32px] lg:text-[36px] leading-tight max-w-[500px]">
            Useful structure. Approved files to follow.
          </h2>

          <p className="text-[#777777] text-[10px] sm:text-xs leading-6 mt-3 max-w-[550px]">
            Access practical documents and helpful resources to
            keep your home project organised and on track.
          </p>
        </motion.div>

        {/* RESOURCE LIST */}
        <div className="mt-7 sm:mt-9 border-t border-[#E5E3DC]">

          {resources.map((resource, index) => (
            <motion.div
              key={resource.number}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-5 sm:py-6 border-b border-[#E5E3DC]"
            >

              {/* LEFT CONTENT */}
              <div className="flex items-start gap-3 sm:gap-4">

                <div className="w-9 h-9 shrink-0 flex items-center justify-center bg-white border border-[#EAE8E2]">
                  <FileText
                    size={16}
                    strokeWidth={1.5}
                    className="text-[#20244F]"
                  />
                </div>

                <div>
                  <p className="text-[#7771D5] text-[8px] sm:text-[9px] uppercase tracking-wider font-semibold">
                    {resource.type}
                  </p>

                  <h3 className="font-serif text-[#20244F] text-sm sm:text-base mt-1">
                    {resource.title}
                  </h3>

                  <p className="text-[#777777] text-[9px] sm:text-[10px] leading-5 mt-1 max-w-[600px]">
                    {resource.description}
                  </p>
                </div>

              </div>

              {/* RIGHT BUTTON */}
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="flex items-center justify-center gap-2 self-start sm:self-center shrink-0 border border-[#E5E3DC] bg-white px-3 py-2 text-[#20244F] text-[9px] sm:text-[10px] hover:bg-[#20244F] hover:text-white transition-colors duration-300"
              >
                View resource
                <Download size={12} />
              </a>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ResourcesSection;
