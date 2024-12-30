import aggregateSkillsForCourses from "@/actions/material/course/aggregate/aggregateSkillsForCourses";
import ProjectDatabaseKeys from "@/database/Projects/ProjectDatabaseKeys";
import CourseDatabaseKeys from "@/database/Courses/CourseDatabaseKeys";
import ModuleDatabaseKeys from "@/database/Modules/ModuleDatabaseKeys";
import CourseInterface from "@/database/Courses/CourseInterface";
import aggregateRelatedMaterialsForCourses from "@/actions/material/course/aggregate/aggregateRelatedMaterialsForCourses";
import moduleDatabaseMap from "../Modules/ModuleDatabaseMap";
import { EDUCATION_PAGE } from "@/constants/pages";

/**
 * Hashmap of the courses I have studied at university.
 * The keys are defined in {@link CourseDatabaseKeys}.
 * The order of the courses is the order that will be used to display them.
 */
const courseMap: Database<CourseInterface> = {
  [CourseDatabaseKeys.NSEC_MechanicalEngineering]: {
    name: "Mechanical Engineering",
    university: "Netaji Subhash Engineering College, Kolkata",
    grade: "9.43",
    category: "Bachelor of Technology",
    skills: [], // dynamically added from modules
    startYear: 2017,
    endYear: 2021,
    certificate: `${EDUCATION_PAGE.path}/${CourseDatabaseKeys.NSEC_MechanicalEngineering}/certificate.jpg`,
    logo: `${EDUCATION_PAGE.path}/${CourseDatabaseKeys.NSEC_MechanicalEngineering}/logo.png`,
    modules: [
      ModuleDatabaseKeys.NSEC_AppliedFluidMechanics,
      ModuleDatabaseKeys.NSEC_AppliedThemodynamics,
      ModuleDatabaseKeys.NSEC_Chemistry,
      ModuleDatabaseKeys.NSEC_ComputerProgramming,
      ModuleDatabaseKeys.NSEC_DesignOfMachineElements,
      ModuleDatabaseKeys.NSEC_DynamicsOfMachines,
      ModuleDatabaseKeys.NSEC_ElectricalAndElectronics1,
      ModuleDatabaseKeys.NSEC_ElectricalAndElectronics2,
      ModuleDatabaseKeys.NSEC_EngineeringMaterials,
      ModuleDatabaseKeys.NSEC_EngineeringMechanics,
      ModuleDatabaseKeys.NSEC_FluidMechanicsAndHydraulicMachines,
      ModuleDatabaseKeys.NSEC_HeatTransfer,
      ModuleDatabaseKeys.NSEC_ICEngines,
      ModuleDatabaseKeys.NSEC_Communication,
      ModuleDatabaseKeys.NSEC_ManufacturingProcesses,
      ModuleDatabaseKeys.NSEC_Mathematics1,
      ModuleDatabaseKeys.NSEC_Mathematics2,
      ModuleDatabaseKeys.NSEC_Mathematics3,
      ModuleDatabaseKeys.NSEC_Mechanisms,
      ModuleDatabaseKeys.NSEC_Metrology,
      ModuleDatabaseKeys.NSEC_Physics1,
      ModuleDatabaseKeys.NSEC_NumericalMethods,
      ModuleDatabaseKeys.NSEC_Physics2,
      ModuleDatabaseKeys.NSEC_StrengthOfMaterials,
      ModuleDatabaseKeys.NSEC_ThermodynamicsAndFluid,
    ],
    relatedMaterials: [],
  },
};

/**
 * List of keys for the courses that I have studied at university.
 */
export const courseDatabaseKeys: CourseDatabaseKeys[] = Object.keys(
  courseMap
) as CourseDatabaseKeys[];

// adds skills from modules to the courses
/**
 * Database of the courses I have studied at university.
 * The keys are defined in {@link CourseDatabaseKeys}.
 * The order of the courses is the order that will be used to display them.
 * This contains all the skills and related materials for each course which is fetched from the courses modules.
 */
let courseDatabaseMap: Database<CourseInterface> = aggregateSkillsForCourses(
  courseMap,
  moduleDatabaseMap
);

courseDatabaseMap = aggregateRelatedMaterialsForCourses(
  courseDatabaseMap,
  moduleDatabaseMap
);

export default courseDatabaseMap;
