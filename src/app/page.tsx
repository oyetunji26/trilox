// import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Team from "@/components/Team";
import Numbers from "@/components/Widgets/Numbers";
import WhoWeAre from "@/components/About/WhoWeAre";
import Mission from "@/components/About/Mission";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Numbers />
      <WhoWeAre />
      <Mission />
      <div className="pt-20">
        <Team />
        <Contact />
      </div>
    </main>
  );
}
