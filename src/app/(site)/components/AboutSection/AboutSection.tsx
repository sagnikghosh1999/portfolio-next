import Reader from "@/components/Reader/Reader";
import LanguageSection from "./LanguageSection";
import TechnologiesSection from "./TechnologiesSection";
import getMarkdownFromFileSystem from "@/actions/file-system/getMarkdownFromFileSystem";
import Link from "next/link";

/**
 * About section component.
 * Split into two sections: left and right.
 * Left section contains a short description of myself.
 * Right section contains a list of skills, languages and technologies.
 * On mobile, the sections are stacked on top of each other.
 *
 * The skills, languages and technologies are displayed as tags.
 * Some of these tags can be clicked which will open a modal.
 * There is also a view more button that opens a modal to show more skills, languages or technologies.
 * @returns About section
 */
const AboutSection = () => {
  /**
   * About me written in markdown.
   * This markdown is converted to HTML and displayed on the page.
   */
  const blogContent: string | undefined = getMarkdownFromFileSystem(
    `public/about/short.md`
  )?.content;

  return (
    <section id="about" className="home-section-wrapper">
      <h2 className="text-center font-bold text-4xl">
        About Me
        <hr className="w-6 h-1 mx-auto my-4 bg-blue-500 border-0 rounded"></hr>
      </h2>

      <div
        className="
          flex flex-col lg:flex-row
          space-y-8 md:space-y-5 lg:space-y-0
          items-stretch justify-center align-top
          lg:space-x-10 lg:p-4
          lg:text-left
        "
      >
        {/* Left section */}
        <div className="lg:w-1/2">
          <h2 className="text-center text-2xl font-bold mb-6 mt-6 md:text-left">
            Get to know me!
          </h2>

          <div className="flex flex-col space-y-4">
            <Reader content={blogContent} />
            <Link
              href="/about"
              className="
                font-bold
                hover:underline 
                hover:text-blue-800 hover:dark:text-blue-500
                transition-colors duration-300 ease-in-out"
            >
              {`Read More About Me!`}
            </Link>
          </div>
        </div>

        {/* Right section */}
        <div className="text-center lg:w-1/2 md:text-left ">
          <LanguageSection />
          <div className="h-1 mt-2 md:mt-4" />
          <TechnologiesSection />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
