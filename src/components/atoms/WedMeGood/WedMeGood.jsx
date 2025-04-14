import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowBigUp } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export const WedMeGoodPlanner = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          WedMeGood - Your Personal Wedding Planner
        </h1>
        <p className="text-xl text-black mb-8">Plan your wedding with Us</p>

        <motion.p
          className="max-w-3xl mx-auto text-lg text-gray-800 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          WedMeGood is an Indian Wedding Planning Website and app where you can
          find the best wedding vendors, with prices and reviews at the click of
          a button. Whether you are looking to hire wedding planners in India,
          or looking for the top photographers, or just some ideas and
          inspiration for your wedding, WedMeGood can help you solve your
          wedding planning woes through its unique features.
        </motion.p>

        <Button
          size="lg"
          variant="outline"
          className="bg-glassi hover:bg-gray-600"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact us to get best deals
        </Button>
      </motion.section>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <motion.div
          className="bg-glassi p-8 rounded-xl"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-purple-700 mb-4">
            For Vendors
          </h3>
          <p className="text-gray-800 mb-2">vendors143@gmail.com</p>
          <p className="text-gray-800">0124-6812346</p>
        </motion.div>

        <motion.div
          className="bg-glassi p-8 rounded-xl"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-pink-700 mb-4">For Users</h3>
          <p className="text-gray-800 mb-2">info143@gmail.com</p>
          <p className="text-gray-800">0124-6812345</p>
        </motion.div>
      </div>

      {/* Social Media */}
      <motion.section
        className="text-center mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Follow us on:
        </h3>
        <div className="flex justify-center space-x-6">
          {[
            { icon: <FaFacebook size={28} />, color: "text-blue-600" },
            { icon: <FaTwitter size={28} />, color: "text-blue-400" },
            { icon: <FaPinterest size={28} />, color: "text-red-600" },
            { icon: <FaInstagram size={28} />, color: "text-pink-600" },
            { icon: <FaYoutube size={28} />, color: "text-red-600" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href="#"
              className={`${social.color} hover:scale-110 transition-transform`}
              whileHover={{ y: -5 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </motion.section>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">Registered Address</h4>
            <p className="text-gray-800">
              Second Floor, Ocus Technopolis, Sector 54 Golf Course Road,
              Gurgaon, Haryana, India, 122002
            </p>
          </div>
          <div className="flex justify-center">
            <Button variant="outline" className="bg-glassi hover:bg-gray-600">
              Register as a Vendor/Event
            </Button>
          </div>
        </div>
        <p className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} WedMeGood. All rights reserved.
        </p>
      </motion.footer>
    </div>
  );
};
