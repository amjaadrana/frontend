import Image from "next/image";
import Hero from "./_components/Hero";
import SearchCategory from "./_components/SearchCategory";
import DoctorList from "./_components/DoctorList";
import Testimonial from "./_components/Testimonial";

export default function Home() {
  return (
    <div
    //  className="grid grid-rows-[20px_1fr_20px]
    //   items-center justify-items-center min-h-screen 
    //   p-8 pb-20 gap-16 sm:p-20 
    //   nt-[family-name:var(--font-geist-sans)]"
      >
      <Hero />
      <SearchCategory />
      <DoctorList />
      <Testimonial />
      
    </div>
  );
}
