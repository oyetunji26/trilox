// import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Team from "@/components/Team";
import Numbers from "@/components/Widgets/Numbers";
import WhoWeAre from "@/components/About/WhoWeAre";
import Mission from "@/components/About/Mission";
import Services from "@/components/About/Services";

export default function Home() {
  return (
    <main className="bg-grid-white/[0.2]">
      <Hero />
      <div className="bg-blue-100/70 ">
        {/* <About /> */}
        <Numbers />
      </div>
      <WhoWeAre />
      <Mission />
      <Services />
      <div className="pt-20">
        <Team />
        <Contact />
      </div>
    </main>
  );
}
