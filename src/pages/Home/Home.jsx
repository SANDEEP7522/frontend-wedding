import { EventHeader } from "@/components/atoms/EventHeader/EventHeader";
import { Navbar } from "@/components/atoms/Navebar/Navebar";
import { PopularVenues } from "@/components/atoms/PopularVenues/PopularVenues";

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
    </div>
  );
};
