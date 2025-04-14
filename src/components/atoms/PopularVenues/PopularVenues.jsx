import { popularVenues } from "@/assets/popularVenues";
import { motion } from "framer-motion";

export const PopularVenues = () => {
  return (
    <section className="px-4 md:px-10 py-8 w-full">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
        Popular Venue Searches
      </h2>

      <div className="relative">
        <div className="flex overflow-x-auto space-x-6 scrollbar-hide pb-2 scrollbar-thin cursor-pointer">
          {popularVenues.map((venue, index) => (
            <motion.div
              key={index}
              className="min-w-[250px] max-w-[300px] dark:bg-gray-800 rounded-xl shadow-xl hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <img
                src={venue.image}
                alt={venue.title}
                className="w-full h-40 object-cover rounded-t-xl"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {venue.title}
                </h3>
                <p className="text-pink-600 text-sm line-clamp-2">
                  {venue.cities.join(" | ")}{" "}
                  <span className="underline cursor-pointer hover:text-pink-700">
                    More
                  </span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
