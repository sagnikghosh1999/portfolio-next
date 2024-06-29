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
  [CertificateDatabaseKeys.AzureDataEngineerAssociate]: {
    name: "Azure Data Engineer Associate",
    category: CertificateCategoriesEnum.CloudComputing,
    issuer: CertificateIssuersEnum.Microsoft,
    certificateURL:
      "https://learn.microsoft.com/en-us/users/sagnikghosh-4678/credentials/f1a81750a7afb373",
    skills: [
      SkillDatabaseKeys.Azure_BlobStorage,
      SkillDatabaseKeys.Azure_ResourceManager,
      SkillDatabaseKeys.DataEngineering,
      SkillDatabaseKeys.Azure_BlobStorage,
      SkillDatabaseKeys.Azure_DataFactory,
      SkillDatabaseKeys.Azure_Datalake,
      SkillDatabaseKeys.Azure_Databricks,
      SkillDatabaseKeys.Azure,
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.CriticalThinking,
    ],
    description: `
      The DP-203: Data Engineering on Microsoft Azure certification validates expertise in integrating, transforming, and consolidating data from various structured and unstructured data systems. It covers designing and implementing data solutions, ensuring data quality, and optimizing data processing. Ideal for data engineers, it enhances skills in building and maintaining data workflows on Azure.`,
    learningOutcomes: [
      "Design and implement data storage solutions on Azure.",
      "Develop and optimize data processing pipelines using Azure Data Factory.",
      "Integrate, transform, and consolidate data from various sources.",
      "Ensure data quality and consistency across Azure data platforms.",
      "Implement security and data protection measures in Azure data solutions.",
    ],
  },
  [CertificateDatabaseKeys.AzureAdministratorAssociate]: {
    name: "Azure Administrator Associate",
    category: CertificateCategoriesEnum.CloudComputing,
    issuer: CertificateIssuersEnum.Microsoft,
    certificateURL:
      "https://learn.microsoft.com/api/credentials/share/en-us/SAGNIKGHOSH-4678/E93A243C4AE783CD",
    skills: [
      SkillDatabaseKeys.Azure_BlobStorage,
      SkillDatabaseKeys.Azure_ResourceManager,
      SkillDatabaseKeys.DataEngineering,
      SkillDatabaseKeys.Azure_Datalake,
      SkillDatabaseKeys.Azure,
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.CriticalThinking,
    ],
    description: `
      The Azure Administrator Associate Certification validates expertise in managing Azure resources. It covers implementing, monitoring, and maintaining Azure services, including storage, networking, and virtual machines. Ideal for IT professionals, this certification ensures proficiency in managing Azure environments, optimizing performance, and securing infrastructure for cloud-based solutions.`,
    learningOutcomes: [
      "Manage and monitor Azure resources and services effectively.",
      "Implement and manage storage solutions in Azure.",
      "Configure and manage virtual networks and network security.",
      "Deploy and manage Azure compute resources, including virtual machines.",
      "Secure and manage identities with Azure Active Directory.",
    ],
  },
  [CertificateDatabaseKeys.AzureAIFundamentals]: {
    name: "Azure AI Fundamentals",
    category: CertificateCategoriesEnum.CloudComputing,
    issuer: CertificateIssuersEnum.Microsoft,
    certificateURL:
      "https://learn.microsoft.com/en-us/users/sagnikghosh-4678/credentials/ebc987627748d06e",
    skills: [
      SkillDatabaseKeys.Azure_ResourceManager,
      SkillDatabaseKeys.DataEngineering,
      SkillDatabaseKeys.Azure_AppService,
      SkillDatabaseKeys.Azure,
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.CriticalThinking,
    ],
    description: `The AI-900: Microsoft Azure AI Fundamentals certification provides foundational knowledge of artificial intelligence and its services on Azure. It covers machine learning, computer vision, natural language processing, and conversational AI. Ideal for beginners, this certification ensures understanding of core AI concepts and how to implement them using Azure AI services.`,
    learningOutcomes: [
      "Understand foundational AI concepts and principles.",
      "Learn about Azure AI services, including cognitive APIs and Azure Machine Learning.",
      "Explore practical applications of AI in business scenarios.",
      "Gain insights into computer vision and natural language processing capabilities.",
      "Prepare to leverage Azure AI services to enhance business operations and innovation.",
    ],
  },
  //Data Engineering
  [CertificateDatabaseKeys.DatabricksFundamentals]: {
    name: "Databricks Fundamentals",
    category: CertificateCategoriesEnum.DataEngineering,
    issuer: CertificateIssuersEnum.Databricks,
    certificateURL:
      "https://credentials.databricks.com/c30f66d1-f5b4-44c5-83a7-67c6efcad2c9",
    skills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.ApacheSpark,
      SkillDatabaseKeys.DataEngineering,
      SkillDatabaseKeys.Azure_Databricks,
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.CriticalThinking,
    ],
    description: `
      The Databricks Fundamentals Certification provides essential knowledge on using Databricks for big data analytics. It covers the basics of the Databricks platform, data engineering, and machine learning workflows. Ideal for data professionals, this certification ensures proficiency in leveraging Databricks for scalable data processing and collaborative data science.`,
    learningOutcomes: [
      "Understand the core concepts of the Databricks platform.",
      "Gain proficiency in data engineering workflows using Databricks.",
      "Learn to implement scalable data processing solutions.",
      "Explore machine learning workflows on the Databricks platform.",
      "Collaborate effectively on data science projects using Databricks.",
    ],
  },
  [CertificateDatabaseKeys.DatabricksLakehouseFundamentals]: {
    name: "Databricks Lakehouse Fundamentals",
    category: CertificateCategoriesEnum.DataEngineering,
    issuer: CertificateIssuersEnum.Databricks,
    certificateURL:
      "https://credentials.databricks.com/8374587b-46e9-4074-82d7-62b614f469c4",
    skills: [
      SkillDatabaseKeys.Azure_BlobStorage,
      SkillDatabaseKeys.Azure_Datalake,
      SkillDatabaseKeys.ApacheSpark,
      SkillDatabaseKeys.DataEngineering,
      SkillDatabaseKeys.Azure_Databricks,
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.CriticalThinking,
    ],
    description: `
      The Databricks Lakehouse Fundamentals Certification provides essential knowledge of the Databricks Lakehouse platform. It covers data engineering, data analytics, and machine learning workflows. Ideal for data professionals, this certification ensures proficiency in leveraging the unified data architecture for scalable and collaborative data processing and analysis.`,
    learningOutcomes: [
      "Understand the core concepts of the Databricks Lakehouse architecture.",
      "Gain proficiency in data engineering on the Databricks platform.",
      "Learn to implement scalable data analytics workflows.",
      "Explore machine learning workflows using Databricks Lakehouse.",
      "Develop skills for collaborative data processing and analysis.",
    ],
  },
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
  // Generative AI
  [CertificateDatabaseKeys.DatabricksGenAIFundamentals]: {
    name: "Databricks Generative AI Fundamentals",
    category: CertificateCategoriesEnum.GenerativeAI,
    issuer: CertificateIssuersEnum.Databricks,
    certificateURL:
      "https://credentials.databricks.com/0431e3d8-f0bd-47dc-a101-fbd204836d31",
    skills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.OpenAI,
      SkillDatabaseKeys.APIs,
      SkillDatabaseKeys.Azure_Databricks,
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.CriticalThinking,
    ],
    description: `
      The General AI Certification provides comprehensive training on artificial intelligence concepts, techniques, and applications. It covers machine learning, deep learning, natural language processing, and ethical AI practices. Ideal for professionals and students, this certification enhances skills, ensuring proficiency in deploying AI solutions across various industries.`,
    learningOutcomes: [
      "Gain a solid understanding of core AI concepts and techniques.",
      "Develop proficiency in machine learning and deep learning algorithms.",
      "Learn to implement natural language processing solutions.",
      "Understand and apply ethical practices in AI development.",
      "Acquire skills to deploy AI solutions across diverse industries.",
    ],
  },
  [CertificateDatabaseKeys.CognizantGenAIBasics]: {
    name: "Generative AI Basics Assesment",
    category: CertificateCategoriesEnum.GenerativeAI,
    issuer: CertificateIssuersEnum.Cognizant,
    certificateURL: "",
    skills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.OpenAI,
      SkillDatabaseKeys.APIs,
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.CriticalThinking,
    ],
    description: `
      The General AI Certification provides comprehensive training on artificial intelligence concepts, techniques, and applications. It covers machine learning, deep learning, natural language processing, and ethical AI practices. Ideal for professionals and students, this certification enhances skills, ensuring proficiency in deploying AI solutions across various industries.`,
    learningOutcomes: [
      "Gain a solid understanding of core AI concepts and techniques.",
      "Develop proficiency in machine learning and deep learning algorithms.",
      "Learn to implement natural language processing solutions.",
      "Understand and apply ethical practices in AI development.",
      "Acquire skills to deploy AI solutions across diverse industries.",
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
