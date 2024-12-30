import addNestedSkillsMaterialList from "@/actions/material/addNestedSkillsMaterialList";
import addProjectThumbnail from "@/actions/material/projects/addProjectThumbnail";
import ProjectDatabaseKeys from "@/database/Projects/ProjectDatabaseKeys";
import ProjectCategoriesEnum from "@/enums/Project/ProjectCategoriesEnum";
import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import SkillTypesEnum from "@/enums/Skill/SkillTypesEnum";
import ProjectInterface from "@/database/Projects/ProjectInterface";
import skillDatabaseMap from "../Skills/SkillDatabaseMap";
import SkillCategoriesEnum from "@/enums/Skill/SkillCategoriesEnum";
import ModuleDatabaseKeys from "@/database/Modules/ModuleDatabaseKeys";
import ProjectTypeEnum from "@/enums/Project/ProjectTypeEnum";

/**
 * Hashmap of projects with keys as {@link SkillDatabaseKeys} and values as {@link ProjectInterface}.
 * The order of the projects is the order that is used when displaying the projects on the website.
 * The order skills is the order that is used when displaying the skills on the website.
 */
const projectMap: Database<ProjectInterface> = {
  //Full stack project
  [ProjectDatabaseKeys.AirbnbClone]: {
    name: `Airbnb Clone`,
    description: `
          Full Stack Airbnb Clone with Next.js 14, Tailwind-css, Prisma, MongoDB, Framer-motion, Login (Google and Github), Image upload with Cloudinary
          `,
    repositoryURL: `https://github.com/sagnikghosh1999/airbnb-trpc`,
    deploymentURL: `https://nextbnb-three.vercel.app/`,
    skills: [
      SkillDatabaseKeys.TypeScript,
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.NextJS,
      SkillDatabaseKeys.ReactJS,
      SkillDatabaseKeys.HTML,
      SkillDatabaseKeys.CSS,
      SkillDatabaseKeys.TailwindCSS,
      SkillDatabaseKeys.Cloudinary,
      SkillDatabaseKeys.Zustand,
      SkillDatabaseKeys.UserAuthentication,
      SkillDatabaseKeys.NextAuth,
      SkillDatabaseKeys.Axios,

      SkillDatabaseKeys.Yarn,
      SkillDatabaseKeys.GitHub,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.ESLint,
      SkillDatabaseKeys.Prettier,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.TimeManagement,
      SkillDatabaseKeys.ScopeManagement,
      SkillDatabaseKeys.DesignPatterns,
    ],
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    thumbnailImage: addProjectThumbnail(ProjectDatabaseKeys.AirbnbClone),
    relatedMaterials: [],
    type: ProjectTypeEnum.Personal,
  },
  [ProjectDatabaseKeys.FacebookClone]: {
    name: `Facebook Clone`,
    description: `
          Full Stack Facebook Clone with React JS, MongoDB, Express, Node JS, Image upload with Cloudinary
          `,
    repositoryURL: `https://github.com/sagnikghosh1999/facebook-clone-frontend`,
    deploymentURL: `https://socialbook-frontend.vercel.app`,
    skills: [
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.ReactJS,
      SkillDatabaseKeys.HTML,
      SkillDatabaseKeys.CSS,
      SkillDatabaseKeys.Cloudinary,
      SkillDatabaseKeys.Redux,
      SkillDatabaseKeys.UserAuthentication,
      SkillDatabaseKeys.Axios,

      SkillDatabaseKeys.NPM,
      SkillDatabaseKeys.GitHub,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.ESLint,
      SkillDatabaseKeys.Prettier,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.TimeManagement,
      SkillDatabaseKeys.ScopeManagement,
      SkillDatabaseKeys.DesignPatterns,
    ],
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    thumbnailImage: addProjectThumbnail(ProjectDatabaseKeys.FacebookClone),
    relatedMaterials: [],
    type: ProjectTypeEnum.Personal,
  },

  //Frontend project
  [ProjectDatabaseKeys.TeslaClone]: {
    name: `Tesla Clone`,
    description: `
          This is a basic landing page clone of the Tesla website built with NextJS, ReactJs and TailwindCss
          `,
    repositoryURL: `https://github.com/sagnikghosh1999/tesla-clone`,
    deploymentURL: `https://tesla-clone-1999.vercel.app/`,
    skills: [
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.NextJS,
      SkillDatabaseKeys.ReactJS,
      SkillDatabaseKeys.GitHub,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.HTML,
      SkillDatabaseKeys.CSS,
      SkillDatabaseKeys.NPM,
      SkillDatabaseKeys.ESLint,
      SkillDatabaseKeys.Prettier,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.TimeManagement,
      SkillDatabaseKeys.ScopeManagement,
      SkillDatabaseKeys.StakeholderManagement,
      SkillDatabaseKeys.Communication,
      SkillDatabaseKeys.RiskManagement,
      SkillDatabaseKeys.DesignPatterns,
    ],
    category: ProjectCategoriesEnum.FrontEndWebDevelopment,
    thumbnailImage: addProjectThumbnail(ProjectDatabaseKeys.TeslaClone),
    relatedMaterials: [],
    type: ProjectTypeEnum.Personal,
  },

  [ProjectDatabaseKeys.TravelWebsite]: {
    name: `Travel website landing page`,
    description: `
          This is a basic landing page of some Travel website built with NextJS, ReactJs and TailwindCss
          `,
    repositoryURL: `https://github.com/sagnikghosh1999/tesla-clone`,
    deploymentURL: `https://tesla-clone-1999.vercel.app/`,
    skills: [
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.NextJS,
      SkillDatabaseKeys.ReactJS,
      SkillDatabaseKeys.GitHub,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.HTML,
      SkillDatabaseKeys.CSS,
      SkillDatabaseKeys.NPM,
      SkillDatabaseKeys.ESLint,
      SkillDatabaseKeys.Prettier,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.TimeManagement,
      SkillDatabaseKeys.ScopeManagement,
      SkillDatabaseKeys.StakeholderManagement,
      SkillDatabaseKeys.Communication,
      SkillDatabaseKeys.RiskManagement,
      SkillDatabaseKeys.DesignPatterns,
    ],
    category: ProjectCategoriesEnum.FrontEndWebDevelopment,
    archived: false,
    thumbnailImage: addProjectThumbnail(ProjectDatabaseKeys.TravelWebsite),
    relatedMaterials: [
      // ModuleDatabaseKeys.NSEC_Chemistry
    ],
    type: ProjectTypeEnum.Personal,
  },
  [ProjectDatabaseKeys.ResumeBuilder]: {
    name: `Resume Builder Website`,
    description: `
          This is a basic resume builder single page application built with ReactJs.
          `,
    repositoryURL: `https://github.com/sagnikghosh1999/resumebuilder`,
    deploymentURL: `https://buildresumefree.netlify.app/`,
    skills: [
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.ReactJS,
      SkillDatabaseKeys.GitHub,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.HTML,
      SkillDatabaseKeys.CSS,
      SkillDatabaseKeys.NPM,
      SkillDatabaseKeys.ESLint,
      SkillDatabaseKeys.Prettier,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.TimeManagement,
      SkillDatabaseKeys.ScopeManagement,
      SkillDatabaseKeys.StakeholderManagement,
      SkillDatabaseKeys.Communication,
      SkillDatabaseKeys.RiskManagement,
      SkillDatabaseKeys.DesignPatterns,
    ],
    category: ProjectCategoriesEnum.FrontEndWebDevelopment,
    thumbnailImage: addProjectThumbnail(ProjectDatabaseKeys.ResumeBuilder),
    relatedMaterials: [],
    type: ProjectTypeEnum.Personal,
  },
  [ProjectDatabaseKeys.MovieApp]: {
    name: `Movie Trailer Website`,
    description: `
          This is a basic movie trailer single page application built with ReactJs and TMDB API.
          `,
    repositoryURL: `https://github.com/sagnikghosh1999/sMoviezz`,
    deploymentURL: `https://smoviezz.netlify.app/`,
    skills: [
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.ReactJS,
      SkillDatabaseKeys.GitHub,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.HTML,
      SkillDatabaseKeys.CSS,
      SkillDatabaseKeys.NPM,

      SkillDatabaseKeys.APIs,
      SkillDatabaseKeys.Axios,
      SkillDatabaseKeys.ESLint,
      SkillDatabaseKeys.Prettier,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.TimeManagement,
      SkillDatabaseKeys.ScopeManagement,
      SkillDatabaseKeys.StakeholderManagement,
      SkillDatabaseKeys.Communication,
      SkillDatabaseKeys.RiskManagement,
      SkillDatabaseKeys.DesignPatterns,
    ],
    category: ProjectCategoriesEnum.FrontEndWebDevelopment,
    thumbnailImage: addProjectThumbnail(ProjectDatabaseKeys.MovieApp),
    relatedMaterials: [],
    type: ProjectTypeEnum.Personal,
  },
};

/**
 * List of keys for the projects that can be used to uniquely identify the project.
 */
export const projectDatabaseKeys: ProjectDatabaseKeys[] = Object.keys(
  projectMap
) as ProjectDatabaseKeys[];

/**
 * Hashmap of projects with keys as {@link SkillDatabaseKeys} and values as {@link ProjectInterface}.
 * The order of the projects is the order that is used when displaying the projects on the website.
 * The order skills is the order that is used when displaying the skills on the website.
 *
 * There are certain sub-skills for the skills that are directly listed under the skill objects within this hashmap.
 * For each of those skills, the sub-skill is added to the list of skills for the blog.
 * These sub-skills are specifically general skills related to the technologies but are not part of programming languages.
 * Programming languages have many sub-skills that are not directly related to the blogs above.
 */
const projectDatabaseMap: Database<ProjectInterface> =
  addNestedSkillsMaterialList<ProjectInterface>(
    projectMap,
    skillDatabaseMap,
    [SkillCategoriesEnum.ProgrammingLanguages],
    SkillTypesEnum.Technical,
    SkillTypesEnum.Technology
  );

export default projectDatabaseMap;
