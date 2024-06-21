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
