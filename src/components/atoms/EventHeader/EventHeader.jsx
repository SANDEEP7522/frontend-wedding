import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import img1 from "@/assets/01.jpg";
import img2 from "@/assets/02.jpg";
import img3 from "@/assets/03.jpg";
import img4 from "@/assets/04.jpg";

const images = [img1, img2, img3, img4]; // put images in /public

export const EventHeader = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[90vh] overflow-hidden bg-glass-card">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center p-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Your Wedding, Your Way
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Find the best wedding vendors with thousands of trusted reviews
        </p>

        {/* Input Group */}
        <div className="bg-white rounded-lg overflow-hidden flex flex-col md:flex-row w-full max-w-3xl shadow-lg">
          <select className="w-full md:w-1/3 p-4 text-black border-b md:border-b-0 md:border-r outline-none">
            <option>Select vendor type</option>
            <option>Photographer</option>
            <option>Makeup Artist</option>
            <option>Venue</option>
          </select>

          <input
            type="text"
            placeholder="Enter location"
            className="w-full md:w-1/3 p-4 text-black border-b md:border-b-0 md:border-r outline-none"
          />

          <button className="w-full md:w-1/3 bg-pink-600 hover:bg-pink-700 text-white font-semibold p-4">
            Get Started
          </button>
        </div>

        <p className="mt-4 text-sm text-white font-medium">
          Popular Searches:{" "}
          <span className="underline">Wedding Photographers</span> |{" "}
          <span className="underline">Makeup Artists</span> |{" "}
          <span className="underline">Venues</span>
        </p>
      </div>
    </div>
  );
};
