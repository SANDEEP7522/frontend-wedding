import { EventHeader } from "@/components/atoms/EventHeader/EventHeader";
import { Navbar } from "@/components/atoms/Navebar/Navebar";

export const Home = () => {
  return (
    <div className=" h-screen w-screen flex flex-col">
      <Navbar />
      <EventHeader />
    </div>
  );
};
