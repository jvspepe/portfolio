import { ChakraUiIcon } from "@/assets/chakraui-icon";
import { FirebaseIcon } from "@/assets/firebase-icon";
import { ReactIcon } from "@/assets/react-icon";
import { TypeScriptIcon } from "@/assets/typescript-icon";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaHtml5, FaJs, FaSass } from "react-icons/fa6";
import { ProjectCard } from "./project-card";

export async function Projects() {
  return (
    <div className="flex flex-col gap-8">
      <h4 className="font-geist-mono text-muted-foreground dark:text-muted-foreground/75 text-xs uppercase">
        Projetos
      </h4>
      <div className="flex flex-col gap-4">
        <ProjectCard
          title="Funira"
          description="Furniture E-commerce"
          technologies={
            <>
              <TypeScriptIcon className="size-6" />
              <ReactIcon className="size-6" />
              <ChakraUiIcon className="size-6" />
              <FirebaseIcon className="size-6" />
            </>
          }
          image="/funira.jpg"
          gradientColor="#ECD1BF"
        />
        <ProjectCard
          title="Domenico Vernon"
          description="Italian Wedding Services"
          technologies={
            <>
              <FaHtml5 className="size-6 text-[#E34F26]" />
              <FaSass className="size-6 text-[#CC6699]" />
              <FaJs className="size-6 text-[#F7DF1E]" />
            </>
          }
          image="/domenico-vernon.jpg"
          gradientColor="#819191"
        />
      </div>
    </div>
  );
}
