
// Fetch backend latter

import { motion } from "framer-motion";
import { searches } from "@/assets/popularVenues";

export const RealWeddingStories = () => {
  return (
    <section className="py-8 px-4 md:px-10">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">
      Real Wedding Stories
      </h2>

      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-6 overflow-x-auto pb-2 scroll-smooth scrollbar-thin cursor-pointer"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {searches.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="min-w-[200px] sm:min-w-[220px] max-w-[240px] bg-slack shadow-lg rounded-lg flex-shrink-0"
            >
              <div className="h-60 w-full rounded-t-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-2 text-center text-sm font-medium text-gray-800">
                {item.title}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
