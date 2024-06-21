import addNestedSkillsMaterialList from "@/actions/material/addNestedSkillsMaterialList";
import ProjectDatabaseKeys from "@/database/Projects/ProjectDatabaseKeys";
import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import ModuleDatabaseKeys from "@/database/Modules/ModuleDatabaseKeys";
import ModuleYearGroupsEnum from "@/enums/Module/ModuleYearGroupsEnum";
import SkillCategoriesEnum from "@/enums/Skill/SkillCategoriesEnum";
import SkillTypesEnum from "@/enums/Skill/SkillTypesEnum";
import ModuleInterface from "@/database/Modules/ModuleInterface";
import skillDatabaseMap from "../Skills/SkillDatabaseMap";
import CourseDatabaseKeys from "@/database/Courses/CourseDatabaseKeys";

/**
 * Hashmap of the modules I have studied at university.
 * The keys are defined in {@link ModuleDatabaseKeys}.
 * The order of the modules is the order that will be used to display them.
 */
const modulesMap: Database<ModuleInterface> = {
  //^ Netaji Subhash Engineering College, Kolkata
  //* Year 1
  [ModuleDatabaseKeys.NSEC_Physics1]: {
    name: "Engineering Physics 1",
    category: ModuleYearGroupsEnum.Year1,
    skills: [SkillDatabaseKeys.ProblemSolving],
    relatedMaterials: [],
    learningOutcomes: [
      "Introducing basic to advanced concepts of Physics",
      "Understanding the importance and role of physics in Engineering",
    ],
    parentCourse: CourseDatabaseKeys.NSEC_MechanicalEngineering,
  },
  [ModuleDatabaseKeys.NSEC_Physics2]: {
    name: "Engineering Physics 2",
    category: ModuleYearGroupsEnum.Year1,
    skills: [],
    relatedMaterials: [],
    learningOutcomes: [
      "Introducing basic to advanced concepts of Physics",
      "Understanding the importance and role of physics in Engineering",
    ],
    parentCourse: CourseDatabaseKeys.NSEC_MechanicalEngineering,
  },
};

/**
 * List of all module keys that can uniquely identify each module.
 */
export const moduleDatabaseKeys: ModuleDatabaseKeys[] = Object.keys(
  modulesMap
) as ModuleDatabaseKeys[];

/**
 * Hashmap of the modules I have studied at university.
 * The keys are defined in {@link ModuleDatabaseKeys}.
 * The order of the modules is the order that will be used to display them.
 *
 * There are certain sub-skills for the skills that are directly listed under the skill objects within this hashmap.
 * For each of those skills, the sub-skill is added to the list of skills for the blog.
 * These sub-skills are specifically general skills related to the technologies but are not part of programming languages.
 * Programming languages have many sub-skills that are not directly related to the blogs above.
 */
const moduleDatabaseMap: Database<ModuleInterface> =
  addNestedSkillsMaterialList<ModuleInterface>(
    modulesMap,
    skillDatabaseMap,
    [SkillCategoriesEnum.ProgrammingLanguages],
    SkillTypesEnum.Technical,
    SkillTypesEnum.Technology
  );

export default moduleDatabaseMap;
