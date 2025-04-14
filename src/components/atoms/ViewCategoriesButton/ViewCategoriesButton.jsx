import { categories } from "@/assets/popularVenues";
import { Button } from "@/components/ui/button";
import { ArrowBigRight } from "lucide-react";
import { Link } from "react-router-dom";

export const ViewCategoriesButton = () => {
  return (
    <div className="p-4  rounded shadow-xl">
      <h1 className="text-2xl font-bold mb-4">Wedding Categories</h1>
      <ul className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <li key={category} className="bg-glassi p-2 rounded">
            {category}
          </li>
        ))}
      </ul>
      <Link to={"/auth/wedding-categories"}>
      <Button 
     className="mt-4 hover:bg-gray-700 bg-glassi">
        Explore All Categories <ArrowBigRight />
      </Button></Link>
    </div>
  );
};
