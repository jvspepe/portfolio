import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Socials } from "@/components/socials";
import { Technologies } from "@/components/technologies";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-10">
        <Header />
        <div className="flex flex-col gap-4">
          <Hero />
          <Socials />
        </div>
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
