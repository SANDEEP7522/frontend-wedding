import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { weddingCategories } from "@/assets/popularVenues";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowBigLeft } from "lucide-react";

const MotionCard = motion(Card);

const WeddingCategories = () => {
  const [expandedCategory, setExpandedCategory] = useState("Venues");

  
  const handleToggle = (category) => {
    setExpandedCategory(expandedCategory === category ? "" : category);
  };

  return (
    <div className="bg-slack w-full  mt-[-44rem]">
    <div className="max-w-6xl px-4 md:px-8 py-8 mx-auto bg-slack"> 
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl font-bold word-animation mb-4">
          Wedding Categories
        </h1>
        <p className="text-xl subtitle-animation mb-2">
          Find everything you need for your perfect wedding
        </p>
        <Link to={"/home"} ><Button className="mb-5 bg-glassi"><ArrowBigLeft /> Go to Home page</Button></Link>

      </motion.div>

      <Accordion
        type="single"
        collapsible
        className="w-full space-y-4"
        value={expandedCategory}
        onValueChange={setExpandedCategory}
      >
        {Object.entries(weddingCategories).map(([category, items]) => (
          <AccordionItem key={category} value={category} className="border rounded-lg ">
            <AccordionTrigger
              className="px-4 py-3 hover:no-underline text-left "
              onClick={() => handleToggle(category)}
            >
              <div className="flex items-center space-x-3">
                <span className="text-lg font-semibold text-gray-900">
                  {category}
                </span>
                <span className="text-sm text-gray-500">
                  {items.length > 2 ? `${items[0]}, ${items[1]}...` : items.join(", ")}
                </span>
              </div>
            </AccordionTrigger>

            <AccordionContent className="px-4 py-2">
              <Card className="bg-glassi shadow-sm border-0">
                <CardHeader className="pb-2">
                  <CardTitle className="text-gray-800 text-lg ">
                    View All {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3 ">
                    {items.map((item, index) => (
                      <MotionCard
                        key={item}
                        className=" p-3 rounded-md border bg-glassi  cursor-pointer hover:bg-purple-100 transition-colors"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.05 * index }}
                      >
                        <p className="text-sm font-medium ">
                          {item}
                        </p>
                      </MotionCard>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
    </div>
  );
};

export default WeddingCategories;
