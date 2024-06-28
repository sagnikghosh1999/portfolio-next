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
  [CertificateDatabaseKeys.AzureFundamentals]: {
    name: "Azure Fundamentals",
    category: CertificateCategoriesEnum.CloudComputing,
    issuer: CertificateIssuersEnum.Microsoft,
    certificateURL:
      "https://learn.microsoft.com/en-us/users/sagnikghosh-4678/credentials/9893579dc8f2c222",
    skills: [
      SkillDatabaseKeys.Azure_BlobStorage,
      SkillDatabaseKeys.Azure_ResourceManager,
      SkillDatabaseKeys.Azure,
      SkillDatabaseKeys.Azure_AppService,
      SkillDatabaseKeys.Azure_CosmosDB,
      SkillDatabaseKeys.Azure_Datalake,
      SkillDatabaseKeys.Azure_Monitor,
      SkillDatabaseKeys.Azure_Functions,
      SkillDatabaseKeys.DataEngineering,
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
      This certification is an opportunity to demonstrate ones' knowledge of core concepts and related Microsoft Azure services. As a candidate for this certification, one should have familiarity with Exam AZ-900’s self-paced or instructor-led learning material. Azure Fundamentals is a stepping stone to prepare for other Azure role-based certifications`,
    learningOutcomes: [
      "Understand basics of Azure data services",
      "Identify considerations for relational data on Azure",
      "Describe considerations for working with non-relational data on Azure",
      "Describe an analytics workload on Azure",
      "Describe considerations for working with non-relational data on Azure",
    ],
  },
  //^ Programming Languages
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
  [CertificateDatabaseKeys.HackerrankJavascriptIntermediate]: {
    name: "Hackerrank Javascript Intermediate",
    category: CertificateCategoriesEnum.ProgrammingLanguages,
    issuer: CertificateIssuersEnum.HackerRank,
    certificateURL: "https://www.hackerrank.com/certificates/8fb04f20976f",
    skills: [
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.WebDevelopment,
      SkillDatabaseKeys.DesignPatterns,
      SkillDatabaseKeys.APIs,
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
      "Understand the basics of Design Patterns",
      "Understand the basics of Event Loops",
      "Understand the basics of Concurrency models",
      "Understand the basics of Memory management",
    ],
  },
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
  //Data Engineering
  [CertificateDatabaseKeys.CognizantPysparkIntermediate]: {
    name: "Pyspark Intermediate Assesment",
    category: CertificateCategoriesEnum.DataEngineering,
    issuer: CertificateIssuersEnum.Cognizant,
    certificateURL: "",
    skills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.ApacheSpark,
      SkillDatabaseKeys.DataEngineering,
      SkillDatabaseKeys.Azure_Databricks,
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.CriticalThinking,
    ],
    description: `
      This how to create an effective relational database design to use in your IT career or even a personal project is an all-encompassing course designed to impart a deep understanding of RDBMS, one of the most sought-after in the tech industry. This course is tailored for both beginners and existing programmers, focusing on core concepts. It uniquely combines theoretical knowledge with practical exercises, preparing students for advanced areas. By the end of the course, learners will have mastered RDBMS, equipped with the skills to develop robust applications and the confidence to tackle real-world challenges.`,
    learningOutcomes: [
      "Introduction to PySpark and Big Data Processing: Overview of PySpark and its role in big data processing. Understanding the basics of Apache Spark and its ecosystem.Setting up the PySpark environment.",
      "Working with DataFrames and Spark SQL: Creating and manipulating DataFrames. Performing data transformations and actions.Using Spark SQL for querying data.",
      "Data Processing with RDDs (Resilient Distributed Datasets): Understanding the RDD abstraction. Creating RDDs and performing transformations and actions. Working with key-value pairs and aggregations.",
      "Machine Learning with PySpark MLlib: Overview of MLlib and its components.Building and evaluating machine learning models.Working with feature engineering and pipelines.",
      "Optimizing and Tuning Spark Applications: Understanding Spark job execution and the DAG (Directed Acyclic Graph). Tuning Spark configurations for performance optimization. Best practices for debugging and monitoring Spark applications.",
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
