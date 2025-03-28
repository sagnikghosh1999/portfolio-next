"use client";

import scrollToSection from "@/actions/scrollToSection";
import Socials from "@/components/Socials/Socials";
import TextLoop from "@/components/TextLoop/TextLoop";
import { Button } from "@/components/shadcn/ui/button";
import developerName from "@/constants/developerName";
import subtitles from "@/constants/subtitles";
import useIsMounted from "@/hooks/useIsMounted";
import Image from "next/image";
import { HiChevronDown } from "react-icons/hi";

/**
 * Hero section component shown at the top of the page.
 * Contains:
 * - Profile image of myself
 * - My full name
 * - My roles which loop through a list
 * - Social media links such as GitHub, LinkedIn, and email
 * - Buttons to navigate to the projects and about sections
 */
const HeroSection = () => {
  const isMounted: boolean = useIsMounted();
  const subtitleStyle: string = `
    text-2xl md:text-4xl font-semibold
    p-1 bg-clip-text text-transparent
    bg-gradient-to-r from-gray-600 via-blue-500 to-violet-500 dark:from-gray-100 dark:via-blue-600 dark:to-violet-700 tracking-wide
    `;

  return (
    <section id="home" className="home-section-wrapper pt-10">
      <div
        className="
          flex flex-col lg:flex-row
          text-center lg:text-left
          items-center
          justify-center lg:justify-start
          animate-fadeIn animation-delay-2
          lg:space-x-12
          my-auto w-full
      "
      >
        {/* Right / Top Section */}
        <div
          className="
          flex
          lg:w-1/2
          justify-center
          p-8 lg:p-0
        "
        >
          {/* Profile Image */}
          <Image
            src="/profile.png"
            alt="Profile image of the developer"
            width={335}
            height={335}
            className="rounded-full shadow-2xl border-2 border-fuchsia-500"
            quality={60}
            loading="eager"
            priority
          />
        </div>

        {/* Left / Bottom Section */}
        <div
          className="
            md:mt-2
            lg:w-3/5 w-full
            space-y-7 md:space-y-4
            items-center justify-center lg:justify-start
        "
        >
          <div className="flex flex-col space-y-4">
            <h2
              className="
              text-3xl md:text-5xl 
              font-normal 
              text-neutral-600 dark:text-neutral-300"
            >{`Hi, I'm`}</h2>
            <h1 className="text-5xl md:text-7xl font-bold">{developerName}</h1>
          </div>

          {/* Roles */}
          {isMounted ? (
            <TextLoop
              loopItems={subtitles}
              implementation="typewriter"
              className={subtitleStyle}
            />
          ) : (
            <div className={subtitleStyle}>{subtitles[1]}</div>
          )}

          <Socials
            iconSize={40}
            className="
              justify-center md:justify-center lg:justify-start
              md:space-x-5
          "
          />

          {/* Buttons */}
          <div
            className="
            w-full
            flex justify-center lg:justify-start
          "
          >
            <div
              className="
                flex flex-col md:flex-row
                space-y-4 md:space-x-4 md:space-y-0
                w-full md:w-3/5
                pt-2
              "
            >
              <Button
                variant="gradient"
                onClick={() => {
                  scrollToSection("projects");
                }}
                className="w-full"
              >
                Projects
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  scrollToSection("about");
                }}
                className="w-full"
              >
                About
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="
        flex flex-row 
        items-center text-center justify-center 
        my-10 md:my-6 md:mt-10
      "
      >
        <div
          onClick={() => {
            scrollToSection("about");
          }}
        >
          <HiChevronDown
            size={35}
            className="animate-bounce slow-bounce cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
