import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/shadcn/ui/tooltip";
import { PROJECTS_PAGE } from "@/constants/pages";
import ProjectInterface from "@/database/Projects/ProjectInterface";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowUpRightCircle, BsGithub, BsInfoCircle } from "react-icons/bs";
import { AspectRatio } from "../shadcn/ui/aspect-ratio";
import projectDatabaseMap from "@/database/Projects/ProjectDatabaseMap";

interface ProjectItemProps {
  projectKey: string;
}

/**
 * Card which displays a projects.
 * Contains:
 * - Name of the project
 * - Description of the project
 * - Optional image of the project
 * - Link to the GitHub repository of the project
 * - Button to open the modal listing the language and technologies used in the project
 * - Optional link to the live site of the project
 * - Optional link to the article of the project
 *
 * Some projects have an image that is displayed on the left side of the card.
 * This image is clickable and redirects to the project page.
 *
 * @param projectKey Key of the project to be displayed
 * @returns A card which displays a project
 */
const ProjectItem: React.FC<ProjectItemProps> = ({ projectKey }) => {
  const basePath: string = PROJECTS_PAGE.path;
  const projectData: ProjectInterface = projectDatabaseMap[projectKey];
  const linkStyle: string =
    "md:hover:-translate-y-1 transition-transform cursor-pointer hover:shadow-lg rounded-full";

  return (
    <div
      className="mb-2
        bg-neutral-100 dark:bg-neutral-950 p-4
        rounded-xl 
        sm:bg-white sm:dark:bg-neutral-900 
        border border-neutral-200 dark:border-neutral-800 lg:border-0
        shadow-sm lg:shadow-none
        transition-colors duration-700 "
    >
      <div className="flex flex-col lg:flex-row lg:space-x-12">
        {/* Project Cover */}
        {projectData.thumbnailImage && (
          <div
            className="
                lg:w-1/2
                rounded-xl
                transform md:hover:scale-105 
                shadow-xl md:hover:shadow-2xl
                transition-all duration-500 ease-in-out
                
                "
          >
            <Link href={`${basePath}/${projectKey}`}>
              <AspectRatio ratio={2} className="overflow-hidden relative">
                <Image
                  src={projectData.thumbnailImage}
                  key={projectData.thumbnailImage}
                  alt={`${projectData.name} cover image`}
                  fill={true}
                  loading="lazy"
                  quality={15}
                  className="
                      rounded-xl 
                      cursor-pointer
                      object-cover
                    "
                />
              </AspectRatio>
            </Link>
          </div>
        )}

        <div
          className={`mt-6 ${
            projectData.thumbnailImage ? "lg:w-1/2" : "lg:w-full"
          }`}
        >
          {/* Project Title */}
          <Link href={`${basePath}/${projectKey}`}>
            <h1
              className="
                    flex flex-col
                    justify-center items-center md:items-start
                    mb-2
                    text-3xl md:text-4xl font-bold text-center md:text-left 
                    md:hover:text-blue-800 md:dark:hover:text-blue-500
                    transition-colors duration-500 ease-in-out
                  "
            >
              {projectData.name}
            </h1>
          </Link>

          {/* Project Type */}
          <p
            className="
              mb-2 
              italic font-medium
              text-blue-700 dark:text-blue-300
              text-center lg:text-left
            "
          >
            {projectData.type}
          </p>

          {/* Project Description */}
          <p className="lg:text-xl md:text-xl text-left md:leading-6 lg:leading-7 mb-4 text-neutral-600 dark:text-neutral-400 line-clamp-4 md:line-clamp-3">
            {projectData.description}
          </p>

          {/* Buttons */}
          <div
            className="
                flex flex-row 
                justify-center md:justify-start 
                align-bottom 
                space-x-4 mt-8"
          >
            {/* Project Page */}

            <Tooltip>
              <TooltipTrigger>
                <Link
                  href={`${basePath}/${projectKey}`}
                  aria-label={`Project details of ${projectData.name}`}
                >
                  <BsInfoCircle
                    size={30}
                    className="md:hover:-translate-y-1 transition-transform cursor-pointer"
                  />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>View Project Details</p>
              </TooltipContent>
            </Tooltip>

            {/* Repository */}
            {projectData.repositoryURL && (
              <Tooltip>
                <TooltipTrigger>
                  <Link
                    href={projectData.repositoryURL}
                    aria-label={`Github repository ${projectData.name}`}
                    target="_blank"
                  >
                    <BsGithub
                      size={30}
                      className="md:hover:-translate-y-1 transition-transform cursor-pointer"
                    />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>GitHub Repository for Project</p>
                </TooltipContent>
              </Tooltip>
            )}
            {/* Project Website */}
            {projectData.deploymentURL && (
              <Tooltip>
                <TooltipTrigger>
                  <Link
                    href={projectData.deploymentURL}
                    aria-label={`Live demo ${projectData.name}`}
                    target="_blank"
                  >
                    <BsArrowUpRightCircle
                      size={30}
                      className="md:hover:-translate-y-1 transition-transform cursor-pointer"
                    />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Project Website</p>
                </TooltipContent>
              </Tooltip>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
