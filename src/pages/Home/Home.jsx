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
    <div class="container mx-auto px-4 bg-slack">
      <EventHeader />
      <PopularVenues />
      <PopularSearches />
      <ViewCategoriesButton />
      <main className=" bg-slack w-screen">
        <InhouseServices />
      </main>
      <RealWeddingStories />
      <main className=" bg-slack w-screen">
        <WedMeGoodPlanner />
      </main>
      <FooterNavigation />
    </div>
  );
};
