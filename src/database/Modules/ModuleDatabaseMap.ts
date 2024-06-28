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
    category: ModuleYearGroupsEnum.Year1sem1,
    skills: [SkillDatabaseKeys.ProblemSolving],
    relatedMaterials: [],
    learningOutcomes: [
      "Introducing basic to advanced concepts of Physics",
      "Understanding the importance and role of physics in Engineering",
    ],
    parentCourse: CourseDatabaseKeys.NSEC_MechanicalEngineering,
  },
  [ModuleDatabaseKeys.NSEC_Mathematics1]: {
    name: "Engineering Mathematics 1",
    category: ModuleYearGroupsEnum.Year1sem1,
    skills: [
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.Algebra,
      SkillDatabaseKeys.Trigonometry,
    ],
    relatedMaterials: [],
    learningOutcomes: [
      "Gained a solid foundation in fundamental mathematical concepts such as calculus, linear algebra, and differential equations, which are essential for more advanced engineering courses.",
      "Developed the ability to apply mathematical techniques to solve practical engineering problems. This includes setting up and solving equations, performing integrations and differentiations, and using matrix operations.",
      "Enhanced our analytical thinking and logical reasoning skills, enabling us to break down complex engineering problems into manageable mathematical tasks.",
      "Became proficient in using mathematical tools and software for computation and visualization, which are essential for modern engineering practices.",
      "Prepared us for more advanced topics in engineering mathematics and other engineering disciplines, providing the necessary background to understand and apply advanced mathematical methods in their future studies and professional work.",
    ],
    parentCourse: CourseDatabaseKeys.NSEC_MechanicalEngineering,
  },
  [ModuleDatabaseKeys.NSEC_EngineeringMechanics]: {
    name: "Engineering Mechanics",
    category: ModuleYearGroupsEnum.Year1sem1,
    skills: [
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Mechanics,
    ],
    relatedMaterials: [],
    learningOutcomes: [
      "Grasp the fundamental principles of statics and dynamics.",
      "Analyze and solve problems involving forces and equilibrium.",
      "Understand the behavior of structures under various loading conditions.",
      "Apply Newton's laws to analyze motion and acceleration.",
      "Develop skills in creating free-body diagrams and vector resolution.",
    ],
    parentCourse: CourseDatabaseKeys.NSEC_MechanicalEngineering,
  },
  [ModuleDatabaseKeys.NSEC_ElectricalAndElectronics1]: {
    name: "Electrical and Electronics 1",
    category: ModuleYearGroupsEnum.Year1sem1,
    skills: [
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.CriticalThinking,
    ],
    relatedMaterials: [],
    learningOutcomes: [
      "Understand the basic principles of electrical circuits and electronic components.",
      "Analyze and solve DC and AC circuit problems.",
      "Design and implement simple electronic circuits using diodes and transistors.",
      "Comprehend the fundamentals of semiconductor physics and device operation.",
      "Apply techniques for circuit analysis, including the use of Kirchhoff's laws and network theorems.",
    ],
    parentCourse: CourseDatabaseKeys.NSEC_MechanicalEngineering,
  },
  [ModuleDatabaseKeys.NSEC_Communication]: {
    name: "English Language and Technical Communication ",
    archived: true,
    category: ModuleYearGroupsEnum.Year1sem1,
    skills: [SkillDatabaseKeys.Teamwork, SkillDatabaseKeys.Communication],
    relatedMaterials: [],
    learningOutcomes: [
      "Enhance proficiency in technical writing and documentation.",
      "Develop effective oral communication and presentation skills.",
      "Master the ability to write clear, concise, and structured technical reports.",
      "Improve collaboration and communication within multidisciplinary teams.",
      "Understand the importance of audience analysis and tailored communication.",
    ],
    parentCourse: CourseDatabaseKeys.NSEC_MechanicalEngineering,
  },

  //2nd Semester
  [ModuleDatabaseKeys.NSEC_ComputerProgramming]: {
    name: "Principles of Computer Programming",
    category: ModuleYearGroupsEnum.Year1sem2,
    skills: [
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.C,
      SkillDatabaseKeys.Logics,
      SkillDatabaseKeys.DataStructures,
    ],
    relatedMaterials: [],
    learningOutcomes: [
      "Develop a foundational understanding of programming concepts and logic.",
      "Write and debug simple programs using a high-level programming language.",
      "Understand and apply basic algorithms and data structures.",
      "Gain proficiency in using computational tools and software for problem-solving.",
      "Enhance skills in structured and modular programming techniques.",
    ],
    parentCourse: CourseDatabaseKeys.NSEC_MechanicalEngineering,
  },
  [ModuleDatabaseKeys.NSEC_Chemistry]: {
    name: "Engineering Chemistry ",
    category: ModuleYearGroupsEnum.Year1sem2,
    archived: true,
    skills: [SkillDatabaseKeys.ProblemSolving],
    relatedMaterials: [],
    learningOutcomes: [
      "Understand the fundamental principles and concepts of chemistry relevant to engineering.",
      "Apply chemical principles to analyze and solve engineering problems.",
      "Gain proficiency in laboratory techniques and safety protocols.",
      "Comprehend the properties and behavior of materials in engineering applications.",
      "Learn the basics of chemical reactions and their implications in engineering processes.",
    ],
    parentCourse: CourseDatabaseKeys.NSEC_MechanicalEngineering,
  },
  // [ModuleDatabaseKeys.NSEC_Physics1]: {
  //   name: "Engineering Physics 1",
  //   category: ModuleYearGroupsEnum.Year1,
  //   skills: [SkillDatabaseKeys.ProblemSolving],
  //   relatedMaterials: [],
  //   learningOutcomes: [
  //     "Introducing basic to advanced concepts of Physics",
  //     "Understanding the importance and role of physics in Engineering",
  //   ],
  //   parentCourse: CourseDatabaseKeys.NSEC_MechanicalEngineering,
  // },
  // [ModuleDatabaseKeys.NSEC_Physics1]: {
  //   name: "Engineering Physics 1",
  //   category: ModuleYearGroupsEnum.Year1,
  //   skills: [SkillDatabaseKeys.ProblemSolving],
  //   relatedMaterials: [],
  //   learningOutcomes: [
  //     "Introducing basic to advanced concepts of Physics",
  //     "Understanding the importance and role of physics in Engineering",
  //   ],
  //   parentCourse: CourseDatabaseKeys.NSEC_MechanicalEngineering,
  // },
  // [ModuleDatabaseKeys.NSEC_Physics1]: {
  //   name: "Engineering Physics 1",
  //   category: ModuleYearGroupsEnum.Year1,
  //   skills: [SkillDatabaseKeys.ProblemSolving],
  //   relatedMaterials: [],
  //   learningOutcomes: [
  //     "Introducing basic to advanced concepts of Physics",
  //     "Understanding the importance and role of physics in Engineering",
  //   ],
  //   parentCourse: CourseDatabaseKeys.NSEC_MechanicalEngineering,
  // },
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
