import getMarkdownFromFileSystem from "@/actions/file-system/getMarkdownFromFileSystem";
import Reader from "@/components/Reader/Reader";
import Socials from "@/components/Socials/Socials";
import HeadingOne from "@/components/Text/HeadingOne";
import DetailsTable from "@/components/UI/DetailsTable";
import developerName from "@/constants/developerName";
import subtitles from "@/constants/subtitles";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

const aboutContent: string | undefined =
  getMarkdownFromFileSystem(`public/about/long.md`)?.content;

export const metadata: Metadata = {
  title: `${developerName} - About Me`,
  description: aboutContent,
  category: `About ${developerName}`,
  creator: developerName,
  keywords: subtitles,
};

/**
 * About page displays information about the developer.
 * @returns Home page
 */
export default function About() {
  if (!aboutContent) {
    notFound();
  }

  return (
    <main>
      <div className="text-center">
        <HeadingOne title="About Me" />
      </div>

      {/* Profile Image */}
      <div className="block lg:hidden my-5 lg:md-0">
        <div className="flex justify-center">
          <Image
            src="/profile.png"
            alt="Profile image of the developer"
            width={150}
            height={150}
            className="rounded-full shadow-2xl"
            quality={60}
            loading="eager"
            priority
          />
        </div>
      </div>

      <div
        className="
          flex flex-col lg:flex-row
          space-y-10 md:space-y-5 lg:space-y-0
          items-stretch justify-center align-top
          lg:space-x-10 lg:p-4
          lg:text-left
        "
      >
        {/* Left section */}
        <div className="lg:w-full">
          <Reader content={aboutContent} size="lg:prose-lg" />
        </div>

        {/* Right section */}
        <div className="lg:w-auto space-y-5 lg:space-y-10">
          {/* Profile Image */}
          <Image
            src="/profile.png"
            alt="Profile image of the developer"
            width={250}
            height={250}
            className="rounded-full shadow-xl hidden lg:block mt-8"
            quality={60}
            loading="eager"
            priority
          />

          {/* Social Icons */}
          <div className="flex justify-center">
            <Socials iconSize={36} />
          </div>

          {/* Details */}
          <DetailsTable
            details={[
              { heading: "Name", value: developerName },
              { heading: "Location", value: "Kolkata, India" },
              {
                heading: "College",
                value: "Netaji Subhash Engineering College",
              },
              {
                heading: "Degree",
                value: "Bachelor of Technology in Mechanical Engineering",
              },
              {
                heading: "Currently Working",
                value: "Cognizant Technology Solution",
              },
              { heading: "Current Role", value: "Azure Data Engineer" },
            ]}
            className="grid-cols-2 md:grid-cols-2 lg:grid-cols-1"
          />
        </div>
      </div>
    </main>
  );
}
