import CertificateInterface from "@/database/Certificates/CertificateInterface";
import addNestedSkillsMaterialList from "@/actions/material/addNestedSkillsMaterialList";
import CertificateDatabaseKeys from "@/database/Certificates/CertificateDatabaseKeys";
import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import CertificateCategoriesEnum from "@/enums/Certificate/CertificateCategoriesEnum";
import CertificateIssuersEnum from "@/enums/Certificate/CertificateIssuersEnum";
import SkillCategoriesEnum from "@/enums/Skill/SkillCategoriesEnum";
import SkillTypesEnum from "@/enums/Skill/SkillTypesEnum";
import skillDatabaseMap from "../Skills/SkillDatabaseMap";

/**
 * Hashmap of certificates with keys as {@link CertificateDatabaseKeys} and values as {@link CertificateInterface}.
 * The order of the certificates is the order that is used when displaying the certificates on the website.
 * The order of the skills is the order that is used when displaying the skills on the website.
 */
const certificateMap: Database<CertificateInterface> = {
  //Cloud Computing
  [CertificateDatabaseKeys.AzureDataFundamentals]: {
    name: "Azure Data Fundamentals",
    category: CertificateCategoriesEnum.CloudComputing,
    issuer: CertificateIssuersEnum.Microsoft,
    certificateURL:
      "https://learn.microsoft.com/en-us/users/sagnikghosh-4678/credentials/884c294acfce5138",
    skills: [
      SkillDatabaseKeys.Azure_BlobStorage,
      SkillDatabaseKeys.Azure_ResourceManager,
      SkillDatabaseKeys.DataEngineering,
      SkillDatabaseKeys.Azure,
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.CriticalThinking,
    ],
    description: `
      This certification is an opportunity to demonstrate ones' knowledge of core data concepts and related Microsoft Azure data services. As a candidate for this certification, one should have familiarity with Exam DP-900’s self-paced or instructor-led learning material. Azure Data Fundamentals is a stepping stone to prepare for other Azure role-based certifications like Azure Database Administrator Associate or Azure Data Engineer Associate`,
    learningOutcomes: [
      "Understand basics of Azure data services",
      "Identify considerations for relational data on Azure",
      "Describe considerations for working with non-relational data on Azure",
      "Describe an analytics workload on Azure",
      "Describe considerations for working with non-relational data on Azure",
    ],
  },
  [CertificateDatabaseKeys.HackerrankJavascriptBasic]: {
    name: "Hackerrank Javascript Basic",
    category: CertificateCategoriesEnum.ProgrammingLanguages,
    issuer: CertificateIssuersEnum.HackerRank,
    certificateURL: "https://www.hackerrank.com/certificates/242ab0dcb035",
    skills: [
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.WebDevelopment,
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.CriticalThinking,
    ],
    description: `
      This certification is an opportunity to demonstrate ones' knowledge of core topics like, Functions, Currying, Hoisting, Scope, Inheritance, Events and Error Handling.`,
    learningOutcomes: [
      "Understand basics of Javascript",
      "Understand the basics of functions and Error handling",
      "Understand the concept of Hoisting",
      "Understand the basics of Scopes",
      "Understand the basics of object oriented programming",
    ],
  },
  //^ Programming Languages
  [CertificateDatabaseKeys.UdemyRelationalDatabaseDesign]: {
    name: "Relational Database Design",
    category: CertificateCategoriesEnum.ProgrammingLanguages,
    issuer: CertificateIssuersEnum.Udemy,
    certificateURL:
      "https://www.udemy.com/certificate/UC-ee0353de-bffd-4d1c-8a0a-115f9729193f/",
    skills: [
      SkillDatabaseKeys.DatabaseManagementSystems,
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.CriticalThinking,
    ],
    description: `
      This how to create an effective relational database design to use in your IT career or even a personal project is an all-encompassing course designed to impart a deep understanding of RDBMS, one of the most sought-after in the tech industry. This course is tailored for both beginners and existing programmers, focusing on core concepts. It uniquely combines theoretical knowledge with practical exercises, preparing students for advanced areas. By the end of the course, learners will have mastered RDBMS, equipped with the skills to develop robust applications and the confidence to tackle real-world challenges.`,
    learningOutcomes: [
      "Understand basics of Relational Databases",
      "Write and understand complex database design",
      "Some advantages of relational databases",
      "Identify entities for the tables and attributes",
      "Reorganise them to make the layout and design more efficient",
    ],
  },
};

/**
 * List of keys for the certificates that can be used to uniquely identify the certificate.
 */
export const certificateDatabaseKeys: CertificateDatabaseKeys[] = Object.keys(
  certificateMap
) as CertificateDatabaseKeys[];

/**
 * Hashmap of certificates with keys as {@link CertificateDatabaseKeys} and values as {@link CertificateInterface}.
 * The certificates are the certifications that I have completed and received.
 * The order skills is the order that is used when displaying the skills on the website.
 *
 * There are certain sub-skills for the skills that are directly listed under the skill objects within this hashmap.
 * For each of those skills, the sub-skill is added to the list of skills for the blog.
 * These sub-skills are specifically general skills related to the technologies but are not part of programming languages.
 * Programming languages have many sub-skills that are not directly related to the blogs above.
 */
const certificateDatabaseMap: Database<CertificateInterface> =
  addNestedSkillsMaterialList<CertificateInterface>(
    certificateMap,
    skillDatabaseMap,
    [SkillCategoriesEnum.ProgrammingLanguages],
    SkillTypesEnum.Technical,
    SkillTypesEnum.Technology
  );

export default certificateDatabaseMap;
