
import { footerLinks } from "@/assets/popularVenues";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const FooterNavigation = () => {
  return (
    <footer className="text-gray-700 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {footerLinks.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((linkObj, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={linkObj.path}
                      className="hover:text-blue-400 text-gray-800 transition-colors"
                    >
                      {linkObj.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="flex items-center gap-4 text-black">
            <span>© {new Date().getFullYear()} WedMeGood</span>
            <div className="hidden md:block w-px h-6 bg-gray-300"></div>
            <div className="flex gap-4">
              <Link href="/terms" className="hover:text-blue-600">Terms & Conditions</Link>
              <Link href="/privacy" className="hover:text-blue-400">Privacy Policy</Link>
            </div>
          </div>
          <div className="text-sm text-gray-500">
            Made with ❤️ for your perfect wedding
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

