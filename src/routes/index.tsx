import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Experiences } from "@/components/experiences";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Technologies } from "@/components/technologies";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="container mx-auto flex flex-col gap-8 p-6">
      <Header />
      <Hero />
      <About />
      <Technologies />
      <Experiences />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
