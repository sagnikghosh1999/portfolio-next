import addNestedSkillsMaterialList from "@/actions/material/addNestedSkillsMaterialList";
import BlogCategoriesEnum from "@/enums/Blog/BlogCategoriesEnum";
import BlogDatabaseKeys from "@/database/Blogs/BlogDatabaseKeys";
import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import SkillTypesEnum from "@/enums/Skill/SkillTypesEnum";
import BlogInterface from "@/database/Blogs/BlogInterface";
import skillDatabaseMap from "../Skills/SkillDatabaseMap";
import SkillCategoriesEnum from "@/enums/Skill/SkillCategoriesEnum";

/**
 * Hashmap of blogs with keys as {@link BlogDatabaseKeys} and values as {@link BlogInterface}.
 * The order of the blogs is the order that is used when displaying the blogs on the website.
 * The order of the skills is the order that is used when displaying the skills on the website.
 */
const blogsMap: Database<BlogInterface> = {
  [BlogDatabaseKeys.Backend]: {
    name: "Exploring Backends: Custom vs Managed Solutions",
    subtitle:
      "An In-depth Analysis of Backend Development Approaches, Tools, and Security Considerations",
    skills: [SkillDatabaseKeys.WebDevelopment, SkillDatabaseKeys.Firebase],
    category: BlogCategoriesEnum.WebDevelopment,
  },
  [BlogDatabaseKeys.CICD]: {
    name: "Embracing the Future of Software Development: A Comprehensive Guide to CI/CD",
    subtitle:
      "Mastering Continuous Integration and Continuous Delivery for Enhanced Software Delivery",
    category: BlogCategoriesEnum.DevOps,
    skills: [
      SkillDatabaseKeys.ContinuousIntegration,
      SkillDatabaseKeys.ContinuousDelivery,
      SkillDatabaseKeys.ContinuousDeployment,

      SkillDatabaseKeys.ProjectManagement,

      SkillDatabaseKeys.InfrastructureAsCode,
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
    ],
  },
  [BlogDatabaseKeys.DevOps]: {
    name: "Embracing DevOps: A Guide to Principles, Practices, and Success Stories",
    subtitle:
      "Understanding the Impact of DevOps in Modern Software Development",
    category: BlogCategoriesEnum.DevOps,
    skills: [
      SkillDatabaseKeys.IntegrationManagement,
      SkillDatabaseKeys.ContinuousDelivery,
      SkillDatabaseKeys.ContinuousDeployment,

      SkillDatabaseKeys.ProjectManagement,

      SkillDatabaseKeys.InfrastructureAsCode,
      SkillDatabaseKeys.Automation,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
    ],
  },
  [BlogDatabaseKeys.Docker]: {
    name: "Docker: Unleashing the Power of Containers",
    subtitle:
      "A Comprehensive Guide to Understanding Docker and Containerization Technology",
    category: BlogCategoriesEnum.DevOps,
    skills: [SkillDatabaseKeys.ProblemSolving],
  },
  [BlogDatabaseKeys.Frontend]: {
    name: "Front-End Development and the Essential Role of Libraries and Frameworks",
    subtitle:
      "A comprehensive introduction to standard front-end web development using libraries and frameworks",
    category: BlogCategoriesEnum.WebDevelopment,
    skills: [
      SkillDatabaseKeys.WebDevelopment,
      SkillDatabaseKeys.HTML,
      SkillDatabaseKeys.CSS,
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.ReactJS,
      SkillDatabaseKeys.NextJS,
    ],
  },
  [BlogDatabaseKeys.JavaScriptVsTypeScript]: {
    name: "JavaScript vs TypeScript: A Detailed Comparison",
    subtitle:
      "Exploring the Advantages and Key Differences between JavaScript and TypeScript",
    category: BlogCategoriesEnum.SoftwareEngineering,
    skills: [SkillDatabaseKeys.JavaScript, SkillDatabaseKeys.TypeScript],
  },
  [BlogDatabaseKeys.Kubernetes]: {
    name: "Kubernetes Guide: Mastering Container Orchestration",
    subtitle: "An Overview of Components, Tools, and Best Practices",
    category: BlogCategoriesEnum.DevOps,
    skills: [],
  },
  [BlogDatabaseKeys.MachineLearningFoundations]: {
    name: "Exploring the Depths of Machine Learning",
    subtitle:
      "A Comprehensive Guide to Machine Learning: Concepts, Challenges, and Real-World Impact",
    category: BlogCategoriesEnum.ArtificialIntelligence,
    skills: [
      SkillDatabaseKeys.Algorithms,
      SkillDatabaseKeys.DataEngineering,
      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.CriticalThinking,
    ],
  },
  [BlogDatabaseKeys.ORM]: {
    name: "Understanding Object-Relational Mapping (ORM)",
    subtitle:
      "A Comprehensive Overview of ORM, Its Advantages, Disadvantages, and Role in Modern Web Application Development",
    category: BlogCategoriesEnum.Databases,
    skills: [
      SkillDatabaseKeys.DatabaseManagementSystems,
      SkillDatabaseKeys.Databases,
      SkillDatabaseKeys.RelationalDatabases,
      SkillDatabaseKeys.NonRelationalDatabases,

      SkillDatabaseKeys.Prisma,
      SkillDatabaseKeys.Drizzle,
      SkillDatabaseKeys.Mongoose,

      SkillDatabaseKeys.Probability,
    ],
  },
  [BlogDatabaseKeys.RESTGraphQL]: {
    name: "Comparing GraphQL and REST: A Detailed Overview",
    subtitle: "Choosing the Right API Design Approach",
    category: BlogCategoriesEnum.WebDevelopment,
    skills: [
      SkillDatabaseKeys.WebDevelopment,
      SkillDatabaseKeys.APIs,
      SkillDatabaseKeys.REST,

      SkillDatabaseKeys.ProblemSolving,
    ],
  },
  [BlogDatabaseKeys.SDKvsAPI]: {
    name: "SDKs vs APIs: A Comparative Guide",
    subtitle: "Understanding Their Roles in Software Development",
    category: BlogCategoriesEnum.SoftwareEngineering,
    skills: [SkillDatabaseKeys.APIs],
  },
  [BlogDatabaseKeys.SessionsVsTokens]: {
    name: "Comparing Session and Token: Navigating Authentication",
    subtitle: "A Detailed Comparison of Authentication Strategies",
    category: BlogCategoriesEnum.WebDevelopment,
    skills: [
      SkillDatabaseKeys.WebDevelopment,
      SkillDatabaseKeys.UserAuthentication,
    ],
  },
  [BlogDatabaseKeys.SoftwareTesting]: {
    name: "Comprehensive Guide to Software Testing",
    subtitle:
      "Exploring Functional and Non-Functional Testing Techniques, Tools, and Challenges",
    category: BlogCategoriesEnum.SoftwareEngineering,
    skills: [SkillDatabaseKeys.Testing, SkillDatabaseKeys.ProblemSolving],
  },
  [BlogDatabaseKeys.SQLNOSQL]: {
    name: "Exploring Databases: A Comparative Study of Relational and Non-Relational Models",
    subtitle:
      "An In-depth Analysis of Database Systems and their Role in Software Engineering and Web Development",
    category: BlogCategoriesEnum.Databases,
    skills: [
      SkillDatabaseKeys.DatabaseManagementSystems,
      SkillDatabaseKeys.Databases,
      SkillDatabaseKeys.RelationalDatabases,
      SkillDatabaseKeys.NonRelationalDatabases,
    ],
  },
  [BlogDatabaseKeys.SyncAsync]: {
    name: "Sync vs Async: Deep Dive into Programming Models",
    subtitle:
      "Understanding and Optimizing Synchronous and Asynchronous Programming",
    category: BlogCategoriesEnum.SoftwareEngineering,
    skills: [SkillDatabaseKeys.WebDevelopment],
  },
};

/**
 * List of keys for the blogs that can be used to uniquely identify the blogs.
 */
export const blogDatabaseKeys: BlogDatabaseKeys[] = Object.keys(
  blogsMap
) as BlogDatabaseKeys[];

/**
 * Hashmap of blogs with keys as {@link BlogDatabaseKeys} and values as {@link BlogInterface}.
 * The order of the blogs is the order that is used when displaying the blogs on the website.
 * The order of the skills is the order that is used when displaying the skills on the website.
 *
 * There are certain sub-skills for the skills that are directly listed under the skill objects within this hashmap.
 * For each of those skills, the sub-skill is added to the list of skills for the blog.
 * These sub-skills are specifically general skills related to the technologies but are not part of programming languages.
 * Programming languages have many sub-skills that are not directly related to the blogs above.
 */
const blogsDatabaseMap: Database<BlogInterface> =
  addNestedSkillsMaterialList<BlogInterface>(
    blogsMap,
    skillDatabaseMap,
    [SkillCategoriesEnum.ProgrammingLanguages],
    SkillTypesEnum.Technical,
    SkillTypesEnum.Technology
  );

export default blogsDatabaseMap;
