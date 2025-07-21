import { Hero } from "@/components/hero";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex items-start justify-between">
          <Hero />
          <ThemeToggle />
        </div>
      </div>
    </>
  );
}
