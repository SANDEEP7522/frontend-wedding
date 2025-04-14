import { motion } from "framer-motion";
import { services } from "@/assets/popularVenues";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const InhouseServices = () => {
  return (
    <div className="max-w-7xl px-4 md:px-8 py-12 mx-auto">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-2xl font-bold mb-4">WMG Inhouse Services</h1>
      </motion.div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="flex justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="w-full max-w-lg shadow-lg border-0 bg-glassi">
              <CardHeader className="text-left">
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {service.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 space-y-2">
                  <p>{service.description}</p>
                </CardDescription>
                <motion.img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-64 object-cover rounded-lg mt-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="bg-glassi">
                  Know More
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
