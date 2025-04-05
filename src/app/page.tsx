import { Hero } from "../components/organisms/Hero/Hero";
import { Skills } from "../components/organisms/Skills/Skills";
import { Projects } from "../components/organisms/Projects/Projects";
import { Qualifications } from "../components/organisms/Qualifications/Qualifications";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Hero />
      <Skills />
      <Projects />
      <Qualifications />
    </div>
  );
}
