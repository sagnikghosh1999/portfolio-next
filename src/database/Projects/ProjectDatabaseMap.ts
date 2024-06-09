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

/**
 * Hashmap of projects with keys as {@link SkillDatabaseKeys} and values as {@link ProjectInterface}.
 * The order of the projects is the order that is used when displaying the projects on the website.
 * The order skills is the order that is used when displaying the skills on the website.
 */
const projectMap: Database<ProjectInterface> = {
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
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    thumbnailImage: addProjectThumbnail(ProjectDatabaseKeys.TeslaClone),
    relatedMaterials: [
      // ModuleDatabaseKeys.NSEC_Chemistry
    ],
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
