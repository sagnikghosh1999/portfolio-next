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
  // !st semester
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
  [ModuleDatabaseKeys.NSEC_Mathematics2]: {
    name: "Engineering Mathematics 2",
    category: ModuleYearGroupsEnum.Year1sem2,
    skills: [
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.Algebra,
      SkillDatabaseKeys.Trigonometry,
    ],
    relatedMaterials: [],
    learningOutcomes: [
      "Master advanced calculus concepts, including multivariable calculus and partial differentiation.",
      "Understand and apply the principles of complex numbers and their operations.",
      "Analyze and solve ordinary differential equations and their applications.",
      "Learn about vector calculus, including gradient, divergence, and curl.",
      "Gain proficiency in using Laplace transforms and Fourier series for engineering problems.",
    ],
    parentCourse: CourseDatabaseKeys.NSEC_MechanicalEngineering,
  },
  [ModuleDatabaseKeys.NSEC_ThermodynamicsAndFluid]: {
    name: "Engineering Thermodynamics and Fluid Mechanics",
    category: ModuleYearGroupsEnum.Year1sem2,
    skills: [
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Mechanics,
    ],
    relatedMaterials: [],
    learningOutcomes: [
      "Understand the basic principles and laws of thermodynamics.",
      "Analyze and solve problems involving energy conversion and heat transfer.",
      "Comprehend the behavior and properties of fluids in various states and flow conditions.",
      "Apply the principles of fluid mechanics to design and analyze fluid systems.",
      "Utilize thermodynamic cycles and fluid dynamics in engineering applications.",
    ],
    parentCourse: CourseDatabaseKeys.NSEC_MechanicalEngineering,
  },
  [ModuleDatabaseKeys.NSEC_ElectricalAndElectronics2]: {
    name: "Electrical and Electronics 2",
    category: ModuleYearGroupsEnum.Year1sem2,
    skills: [
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.CriticalThinking,
    ],
    relatedMaterials: [],
    learningOutcomes: [
      "Understand advanced concepts in AC circuit analysis, including phasors and impedance..",
      "Analyze and design complex electrical circuits using network theorems.",
      "Gain proficiency in operational amplifiers and their applications in analog circuits.",
      "Comprehend the principles and applications of digital electronics and logic circuits.",
      "Apply knowledge of power electronics and electrical machines in engineering systems.",
    ],
    parentCourse: CourseDatabaseKeys.NSEC_MechanicalEngineering,
  },

  //3rd Semester
  [ModuleDatabaseKeys.NSEC_Physics2]: {
    name: "Engineering Physics 2",
    category: ModuleYearGroupsEnum.Year2sem3,
    skills: [SkillDatabaseKeys.ProblemSolving, SkillDatabaseKeys.Logics],
    relatedMaterials: [],
    learningOutcomes: [
      "Understand advanced principles of electromagnetism and their applications.",
      "Analyze wave phenomena, including optics and acoustics.",
      "Explore the fundamentals of quantum mechanics and its engineering applications.",
      "Apply thermodynamic principles to complex systems.",
      "Develop problem-solving skills using advanced physics concepts.",
    ],
    parentCourse: CourseDatabaseKeys.NSEC_MechanicalEngineering,
  },
  [ModuleDatabaseKeys.NSEC_AppliedThemodynamics]: {
    name: "Applied Thermodynamics",
    category: ModuleYearGroupsEnum.Year2sem3,
    skills: [SkillDatabaseKeys.ProblemSolving],
    relatedMaterials: [],
    learningOutcomes: [
      "Understand the principles of thermodynamic cycles and their applications.",
      "Analyze the performance of engines and refrigeration systems.",
      "Apply the laws of thermodynamics to real-world engineering problems.",
      "Evaluate the efficiency of various energy conversion systems.",
      "Gain proficiency in the use of thermodynamic charts and tables for problem-solving.",
    ],
    parentCourse: CourseDatabaseKeys.NSEC_MechanicalEngineering,
  },
  [ModuleDatabaseKeys.NSEC_StrengthOfMaterials]: {
    name: "Strength of Materials",
    category: ModuleYearGroupsEnum.Year2sem3,
    skills: [
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.Logics,
      SkillDatabaseKeys.Mechanics,
    ],
    relatedMaterials: [],
    learningOutcomes: [
      "Understand stress-strain relationships in various materials.",
      "Analyze and design beams for bending and shear stresses.",
      "Evaluate material properties and their impact on structural integrity.",
      "Apply principles of torsion to shafts and circular members.",
      "Perform failure analysis and understand safety factors in engineering design.",
    ],
    parentCourse: CourseDatabaseKeys.NSEC_MechanicalEngineering,
  },
  [ModuleDatabaseKeys.NSEC_EngineeringMaterials]: {
    name: "Engineering Materials",
    category: ModuleYearGroupsEnum.Year2sem3,
    skills: [
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Mechanics,
    ],
    relatedMaterials: [],
    learningOutcomes: [
      "Understand the properties and classifications of engineering materials.",
      "Analyze material behavior under different loading and environmental conditions.",
      "Evaluate the selection and application of materials in engineering design.",
      "Explore the microstructure and mechanical properties of metals, polymers, ceramics, and composites.",
      "Learn techniques for material testing and characterization.",
    ],
    parentCourse: CourseDatabaseKeys.NSEC_MechanicalEngineering,
  },
  [ModuleDatabaseKeys.NSEC_ValuesAndEthics]: {
    name: "Values And Ethics in Profession",
    archived: true,
    category: ModuleYearGroupsEnum.Year2sem3,
    skills: [SkillDatabaseKeys.CriticalThinking],
    relatedMaterials: [],
    learningOutcomes: [
      "Understand fundamental ethical theories and their application in professional settings.",
      "Analyze and resolve ethical dilemmas in engineering practices.",
      "Develop a strong sense of professional responsibility and integrity.",
      "Explore the impact of personal and organizational values on decision-making.",
      "Promote ethical leadership and accountability in professional environments.",
    ],
    parentCourse: CourseDatabaseKeys.NSEC_MechanicalEngineering,
  },
  [ModuleDatabaseKeys.NSEC_EnvironmentalBiology]: {
    name: "Basic Environmental Engineering",
    archived: true,
    category: ModuleYearGroupsEnum.Year2sem3,
    skills: [SkillDatabaseKeys.CriticalThinking],
    relatedMaterials: [],
    learningOutcomes: [
      "Understand the principles of environmental science and engineering.",
      "Analyze the impact of human activities on air, water, and soil quality.",
      "Learn methods for pollution control and waste management.",
      "Evaluate environmental regulations and their application in engineering projects.",
      "Develop sustainable engineering solutions to environmental challenges.",
    ],
    parentCourse: CourseDatabaseKeys.NSEC_MechanicalEngineering,
  },
  //4rd Semester
  [ModuleDatabaseKeys.NSEC_NumericalMethods]: {
    name: "Numerical Methods",
    category: ModuleYearGroupsEnum.Year2sem4,
    skills: [
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.Logics,
      SkillDatabaseKeys.C,
      SkillDatabaseKeys.Mathematics,
    ],
    relatedMaterials: [],
    learningOutcomes: [
      "Understand the fundamental concepts and techniques of numerical analysis.",
      "Apply numerical methods to solve linear and nonlinear equations.",
      "Develop proficiency in numerical integration and differentiation.",
      "Analyze and implement algorithms for solving ordinary and partial differential equations.",
      "Evaluate the accuracy and stability of numerical solutions in engineering problems.",
    ],
    parentCourse: CourseDatabaseKeys.NSEC_MechanicalEngineering,
  },
  [ModuleDatabaseKeys.NSEC_Mathematics3]: {
    name: "Mathematics 3",
    category: ModuleYearGroupsEnum.Year2sem4,
    skills: [SkillDatabaseKeys.ProblemSolving, SkillDatabaseKeys.Mathematics],
    relatedMaterials: [],
    learningOutcomes: [
      "Understand the concepts and applications of complex analysis.",
      "Apply advanced techniques in solving partial differential equations.",
      "Gain proficiency in vector calculus and its applications in engineering.",
      "Analyze series solutions and special functions for engineering problems.",
      "Develop skills in numerical methods for approximating solutions to mathematical problems.",
    ],
    parentCourse: CourseDatabaseKeys.NSEC_MechanicalEngineering,
  },
  [ModuleDatabaseKeys.NSEC_FluidMechanicsAndHydraulicMachines]: {
    name: "Fluid Mechanics and Hydraulic Machines",
    category: ModuleYearGroupsEnum.Year2sem4,
    skills: [
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.Logics,
      SkillDatabaseKeys.Mechanics,
    ],
    relatedMaterials: [],
    learningOutcomes: [
      "Understand the principles of fluid mechanics and their applications in engineering.",
      "Analyze fluid flow behavior, including viscosity and turbulence effects.",
      "Learn the design and operation of hydraulic machines like pumps and turbines.",
      "Apply fluid dynamics principles to analyze and solve engineering problems.",
      "Gain proficiency in evaluating and optimizing fluid systems for efficiency and performance.",
    ],
    parentCourse: CourseDatabaseKeys.NSEC_MechanicalEngineering,
  },
  [ModuleDatabaseKeys.NSEC_Mechanisms]: {
    name: "Mechanisms",
    category: ModuleYearGroupsEnum.Year2sem4,
    skills: [
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Mechanics,
    ],
    relatedMaterials: [],
    learningOutcomes: [
      "Understand the fundamentals of kinematics and dynamics of mechanisms.",
      "Analyze the motion and forces in simple and complex mechanical systems.",
      "Learn the design and optimization of gears, cams, and linkages.",
      "Apply principles of mechanism design to solve engineering problems.",
      "Develop skills in computer-aided design (CAD) and simulation of mechanical systems.",
    ],
    parentCourse: CourseDatabaseKeys.NSEC_MechanicalEngineering,
  },
  [ModuleDatabaseKeys.NSEC_ManufacturingProcesses]: {
    name: "Manufacturing Processes",
    category: ModuleYearGroupsEnum.Year2sem4,
    skills: [SkillDatabaseKeys.CriticalThinking],
    relatedMaterials: [],
    learningOutcomes: [
      "Understand the principles and classifications of manufacturing processes.",
      "Analyze material removal processes such as machining and grinding.",
      "Learn forming processes including casting, forging, and molding.",
      "Explore additive manufacturing technologies like 3D printing.",
      "Apply quality control techniques in manufacturing for product reliability and consistency.",
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
