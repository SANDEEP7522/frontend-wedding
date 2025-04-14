import { EventHeader } from "@/components/atoms/EventHeader/EventHeader";
import { InhouseServices } from "@/components/atoms/InhouseServices/InhouseServices";
import { Navbar } from "@/components/atoms/Navebar/Navebar";
import { PopularSearches } from "@/components/atoms/PopularSearches/PopularSearches";
import { PopularVenues } from "@/components/atoms/PopularVenues/PopularVenues";
import { RealWeddingStories } from "@/components/atoms/RealWeddingStories/RealWeddingStories";
import { ViewCategoriesButton } from "@/components/atoms/ViewCategoriesButton/ViewCategoriesButton";

export const Home = () => {
  return (
    <div className="h-screen w-screen flex flex-col">
      <Navbar />
      <div className="w-full">
        <EventHeader />
      </div>
      <main className="flex-1 w-screen bg-slack px-4 md:px-8 lg:px-16">
        <PopularVenues />
      </main>
      <main className="flex-1 w-screen bg-slack px-4 md:px-8 lg:px-16">
        <PopularSearches />
      </main>
      <main className="flex-1 w-screen bg-slack px-4 md:px-8 lg:px-16">
       <ViewCategoriesButton />
      </main>
      <main className="flex-1 w-screen bg-slack px-4 md:px-8 lg:px-16">
       <InhouseServices />
      </main>
      <main className="flex-1 w-screen bg-slack px-4 md:px-8 lg:px-16">
       <RealWeddingStories />
      </main>
    
        
     
    </div>
  );
};
