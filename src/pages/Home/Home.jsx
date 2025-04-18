import { EventHeader } from "@/components/atoms/EventHeader/EventHeader";
import { FooterNavigation } from "@/components/atoms/FooterNavigation/FooterNavigation";
import { InhouseServices } from "@/components/atoms/InhouseServices/InhouseServices";
import { PopularSearches } from "@/components/atoms/PopularSearches/PopularSearches";
import { PopularVenues } from "@/components/atoms/PopularVenues/PopularVenues";
import { RealWeddingStories } from "@/components/atoms/RealWeddingStories/RealWeddingStories";
import { ViewCategoriesButton } from "@/components/atoms/ViewCategoriesButton/ViewCategoriesButton";
import { WedMeGoodPlanner } from "@/components/atoms/WedMeGood/WedMeGood";

export const Home = () => {
  return (
    <div className="h-screen w-screen flex flex-col">
      <EventHeader />
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
      <main className="flex-1 w-screen bg-slack px-4 md:px-8 lg:px-16">
        <WedMeGoodPlanner />
      </main>
      <main className="flex-1 w-screen bg-slack px-4 md:px-8 lg:px-16">
        <FooterNavigation />
      </main>
    </div>
  );
};
