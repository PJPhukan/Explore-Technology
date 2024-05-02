import ChooseUs from "@/components/ChooseUs";
import Feature from "@/components/Feature";
import HomeSection from "@/components/HomeSection";
import Testimonial from "@/components/Testimonial";
export default function Home() {
  return (
    <div className="min-h-screen bg-black/[0.8] antialiased bg-grid-white/[0.4]">
      <HomeSection />
      <Feature/>
      <ChooseUs/>
      <Testimonial/>
    </div>
  );
}
