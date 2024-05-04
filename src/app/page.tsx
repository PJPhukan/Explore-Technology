import ChooseUs from "@/components/ChooseUs";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import HomeSection from "@/components/HomeSection";
import Instructors from "@/components/Instructors";
import Testimonial from "@/components/Testimonial";
import UpcommingWeb from "@/components/UpcommingWeb";
export default function Home() {
  return (
    <div className="min-h-screen bg-black/[0.8] antialiased bg-grid-white/[0.4]">
      <HomeSection />
      <Feature/>
      <ChooseUs/>
      <Testimonial/>
      <UpcommingWeb/>
      <Instructors/>
    </div>
  );
}
