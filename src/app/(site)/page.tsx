import type { Metadata } from "next";
import AboutSection from "./components/AboutSection/AboutSection";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectSection";
import developerName from "@/constants/developerName";
import { HOME_PAGE } from "@/constants/pages";
import getMarkdownFromFileSystem from "@/actions/file-system/getMarkdownFromFileSystem";
import Reader from "@/components/Reader/Reader";
import subtitles from "@/constants/subtitles";

const aboutContent: string | undefined = getMarkdownFromFileSystem(
  `public/about/short.md`
)?.content.replace(/^\*/gm, "");

export const metadata: Metadata = {
  title: developerName,
  description: aboutContent || HOME_PAGE.description,
  category: "Homepage",
  creator: developerName,
  keywords: subtitles,
};

/**
 * Home page which contains the Hero, About and Projects sections.
 * @returns Home page
 */
export default function Home() {
  return (
    <main>
      {/* SEO data */}
      <div className="sr-only">
        <p>{`My name is ${developerName} and I am a `}</p>
        {subtitles.map((subtitle, index) => (
          <span key={index}>{subtitle}</span>
        ))}
        <Reader content={aboutContent} size="lg:prose-lg" />
      </div>
      <div className="flex flex-col max-w-6xl mx-auto space-y-20 md:space-y-36">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </div>
    </main>
  );
}
