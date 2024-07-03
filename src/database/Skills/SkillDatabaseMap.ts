import SkillCategoriesEnum from "@/enums/Skill/SkillCategoriesEnum";
import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import SkillTypesEnum from "@/enums/Skill/SkillTypesEnum";
import SkillInterface from "@/database/Skills/SkillInterface";

/**
 * Hashmap of skills with keys as {@link SkillDatabaseKeys} and values as {@link SkillInterface}.
 * The order of skills and sub-skills is the order that is used when displaying the skills on the website.
 */
const skillDatabaseMap: Database<SkillInterface> = {
  //^ Languages
  [SkillDatabaseKeys.JavaScript]: {
    name: "JavaScript",
    isMainSkill: true,
    skillType: SkillTypesEnum.Technology,
    category: SkillCategoriesEnum.ProgrammingLanguages,
    relatedSkills: [
      SkillDatabaseKeys.ClerkAuth,
      SkillDatabaseKeys.NextAuth,
      SkillDatabaseKeys.ExpressJS,
      SkillDatabaseKeys.NextJS,
      SkillDatabaseKeys.ReactJS,
      SkillDatabaseKeys.Redux,
      SkillDatabaseKeys.Mongoose,
      SkillDatabaseKeys.Prettier,
      SkillDatabaseKeys.ESLint,
      SkillDatabaseKeys.Jest,
      SkillDatabaseKeys.NPM,
      SkillDatabaseKeys.Yarn,
      SkillDatabaseKeys.PNPM,
    ],
  },
  [SkillDatabaseKeys.TypeScript]: {
    name: "TypeScript",
    isMainSkill: true,
    skillType: SkillTypesEnum.Technology,
    category: SkillCategoriesEnum.ProgrammingLanguages,
    relatedSkills: [
      SkillDatabaseKeys.ClerkAuth,
      SkillDatabaseKeys.NextAuth,
      SkillDatabaseKeys.ExpressJS,
      SkillDatabaseKeys.NextJS,
      SkillDatabaseKeys.ReactJS,
      SkillDatabaseKeys.Redux,
      SkillDatabaseKeys.Mongoose,
      SkillDatabaseKeys.Prettier,
      SkillDatabaseKeys.ESLint,
      SkillDatabaseKeys.Jest,
      SkillDatabaseKeys.NPM,
      SkillDatabaseKeys.Yarn,
      SkillDatabaseKeys.PNPM,
      SkillDatabaseKeys.Zod,
    ],
  },
  [SkillDatabaseKeys.Python]: {
    name: "Python",
    isMainSkill: true,
    skillType: SkillTypesEnum.Technology,
    category: SkillCategoriesEnum.ProgrammingLanguages,
    relatedSkills: [
      SkillDatabaseKeys.Pip,
      SkillDatabaseKeys.Pandas,
      SkillDatabaseKeys.NumPy,
      SkillDatabaseKeys.DataEngineering,
      SkillDatabaseKeys.ApacheSpark,
      SkillDatabaseKeys.DataFrame,
      SkillDatabaseKeys.Jupyter,
      SkillDatabaseKeys.WebDevelopment,
    ],
  },
  [SkillDatabaseKeys.SQL]: {
    name: "SQL",
    isMainSkill: true,
    skillType: SkillTypesEnum.Technology,
    category: SkillCategoriesEnum.ProgrammingLanguages,
    relatedSkills: [
      SkillDatabaseKeys.MySQL,
      SkillDatabaseKeys.PostgreSQL,
      SkillDatabaseKeys.DataEngineering,
      SkillDatabaseKeys.DataFrame,
      SkillDatabaseKeys.ApacheSpark,
      SkillDatabaseKeys.Azure_SQLWarehouse,
      SkillDatabaseKeys.DatabaseIndexing,
      SkillDatabaseKeys.WebDevelopment,
    ],
  },
  [SkillDatabaseKeys.Scala]: {
    name: "Scala",
    isMainSkill: true,
    skillType: SkillTypesEnum.Technology,
    category: SkillCategoriesEnum.ProgrammingLanguages,
    relatedSkills: [
      SkillDatabaseKeys.DataEngineering,
      SkillDatabaseKeys.ApacheSpark,
      SkillDatabaseKeys.DataFrame,
      SkillDatabaseKeys.DataIngestion,
      SkillDatabaseKeys.Azure_Databricks,
      SkillDatabaseKeys.Azure,
    ],
  },
  [SkillDatabaseKeys.Java]: {
    name: "Java",
    skillType: SkillTypesEnum.Technology,
    category: SkillCategoriesEnum.ProgrammingLanguages,
    relatedSkills: [SkillDatabaseKeys.APIs],
  },
  [SkillDatabaseKeys.C]: {
    name: "C",
    isMainSkill: false,
    skillType: SkillTypesEnum.Technology,
    category: SkillCategoriesEnum.ProgrammingLanguages,
  },
  //^ Full Stack Web Development
  [SkillDatabaseKeys.NextJS]: {
    name: "Next.js",
    category: SkillCategoriesEnum.FullStackWebDevelopment,
    isMainSkill: true,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.TypeScript,
      SkillDatabaseKeys.WebDevelopment,
      SkillDatabaseKeys.ReactJS,
      SkillDatabaseKeys.NextAuth,
    ],
  },
  //^ Frontend Web Development
  [SkillDatabaseKeys.ReactJS]: {
    name: "React",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    isMainSkill: true,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.TypeScript,
      SkillDatabaseKeys.WebDevelopment,
      SkillDatabaseKeys.Zustand,
      SkillDatabaseKeys.Redux,
    ],
  },
  [SkillDatabaseKeys.HTML]: {
    name: "HTML",
    isMainSkill: true,
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [SkillDatabaseKeys.WebDevelopment],
  },
  [SkillDatabaseKeys.CSS]: {
    name: "CSS",
    isMainSkill: true,
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [
      SkillDatabaseKeys.WebDevelopment,
      SkillDatabaseKeys.TailwindCSS,
    ],
  },
  [SkillDatabaseKeys.Redux]: {
    name: "Redux",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [
      SkillDatabaseKeys.WebDevelopment,
      SkillDatabaseKeys.StateManagement,
    ],
  },
  [SkillDatabaseKeys.TailwindCSS]: {
    name: "Tailwind CSS",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    isMainSkill: true,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [SkillDatabaseKeys.CSS, SkillDatabaseKeys.WebDevelopment],
  },
  [SkillDatabaseKeys.Bootstrap]: {
    name: "Bootstrap",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [SkillDatabaseKeys.WebDevelopment],
  },
  [SkillDatabaseKeys.ShadcnUI]: {
    name: "Shadcn UI",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [
      SkillDatabaseKeys.WebDevelopment,
      SkillDatabaseKeys.ReactJS,
    ],
  },
  [SkillDatabaseKeys.NextUI]: {
    name: "Next UI",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [
      SkillDatabaseKeys.WebDevelopment,
      SkillDatabaseKeys.ReactJS,
    ],
  },
  [SkillDatabaseKeys.RadixUI]: {
    name: "Radix UI",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [
      SkillDatabaseKeys.WebDevelopment,
      SkillDatabaseKeys.ReactJS,
    ],
  },
  [SkillDatabaseKeys.HeadlessUI]: {
    name: "Headless UI",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [
      SkillDatabaseKeys.WebDevelopment,

      SkillDatabaseKeys.ReactJS,
    ],
  },
  [SkillDatabaseKeys.ReactQuery]: {
    name: "React Query",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [
      SkillDatabaseKeys.WebDevelopment,
      SkillDatabaseKeys.ReactJS,
    ],
  },
  [SkillDatabaseKeys.MaterialUI]: {
    name: "Material UI",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [SkillDatabaseKeys.WebDevelopment],
  },
  [SkillDatabaseKeys.AntDesign]: {
    name: "Ant Design",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [SkillDatabaseKeys.WebDevelopment],
  },
  [SkillDatabaseKeys.Axios]: {
    name: "Axios",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [SkillDatabaseKeys.WebDevelopment, SkillDatabaseKeys.APIs],
  },
  [SkillDatabaseKeys.Zustand]: {
    name: "Zustand",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [
      SkillDatabaseKeys.WebDevelopment,
      SkillDatabaseKeys.StateManagement,
    ],
  },
  //^ Backend Web Development
  [SkillDatabaseKeys.Firebase]: {
    name: "Firebase",
    category: SkillCategoriesEnum.BackEndWebDevelopment,
    isMainSkill: true,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [
      SkillDatabaseKeys.DatabaseManagementSystems,
      SkillDatabaseKeys.NonRelationalDatabases,
      SkillDatabaseKeys.Databases,
      SkillDatabaseKeys.DatabaseIndexing,

      SkillDatabaseKeys.UserAuthentication,

      SkillDatabaseKeys.WebDevelopment,
    ],
  },
  [SkillDatabaseKeys.Auth0]: {
    name: "Auth0",
    category: SkillCategoriesEnum.BackEndWebDevelopment,
    isMainSkill: true,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [SkillDatabaseKeys.UserAuthentication],
  },
  [SkillDatabaseKeys.ClerkAuth]: {
    name: "Clerk Auth",
    category: SkillCategoriesEnum.BackEndWebDevelopment,
    isMainSkill: true,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [SkillDatabaseKeys.UserAuthentication],
  },
  [SkillDatabaseKeys.NextAuth]: {
    name: "NextAuth",
    category: SkillCategoriesEnum.BackEndWebDevelopment,
    isMainSkill: true,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.TypeScript,
      SkillDatabaseKeys.UserAuthentication,
      SkillDatabaseKeys.WebDevelopment,
    ],
  },
  [SkillDatabaseKeys.Stripe]: {
    name: "Stripe",
    category: SkillCategoriesEnum.BackEndWebDevelopment,
    isMainSkill: true,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [],
  },
  [SkillDatabaseKeys.ExpressJS]: {
    name: "Express",
    category: SkillCategoriesEnum.BackEndWebDevelopment,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.TypeScript,
      SkillDatabaseKeys.WebDevelopment,
      SkillDatabaseKeys.APIs,
    ],
  },
  [SkillDatabaseKeys.Cloudinary]: {
    name: "Cloudinary",
    category: SkillCategoriesEnum.BackEndWebDevelopment,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [SkillDatabaseKeys.Cloudinary],
  },
  //^ Databases
  [SkillDatabaseKeys.MongoDB]: {
    name: "MongoDB",
    category: SkillCategoriesEnum.DatabaseManagement,
    isMainSkill: true,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [
      SkillDatabaseKeys.DatabaseManagementSystems,
      SkillDatabaseKeys.Databases,
      SkillDatabaseKeys.NonRelationalDatabases,
      SkillDatabaseKeys.DatabaseIndexing,
    ],
  },
  [SkillDatabaseKeys.MySQL]: {
    name: "MySQL",
    category: SkillCategoriesEnum.DatabaseManagement,
    isMainSkill: true,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [
      SkillDatabaseKeys.DatabaseManagementSystems,
      SkillDatabaseKeys.Databases,
      SkillDatabaseKeys.RelationalDatabases,

      SkillDatabaseKeys.DatabaseIndexing,
    ],
  },
  [SkillDatabaseKeys.PostgreSQL]: {
    name: "PostgreSQL",
    category: SkillCategoriesEnum.DatabaseManagement,
    isMainSkill: true,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [
      SkillDatabaseKeys.DatabaseManagementSystems,
      SkillDatabaseKeys.Databases,
      SkillDatabaseKeys.RelationalDatabases,
      SkillDatabaseKeys.DatabaseIndexing,
    ],
  },
  [SkillDatabaseKeys.SQLite]: {
    name: "SQLite",
    category: SkillCategoriesEnum.DatabaseManagement,
    isMainSkill: true,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [
      SkillDatabaseKeys.DatabaseManagementSystems,
      SkillDatabaseKeys.Databases,
      SkillDatabaseKeys.RelationalDatabases,
      SkillDatabaseKeys.DatabaseIndexing,
    ],
  },
  [SkillDatabaseKeys.Mongoose]: {
    name: "Mongoose",
    category: SkillCategoriesEnum.DatabaseManagement,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.TypeScript,
      SkillDatabaseKeys.DatabaseManagementSystems,
      SkillDatabaseKeys.Databases,
      SkillDatabaseKeys.NonRelationalDatabases,
      SkillDatabaseKeys.DatabaseIndexing,

      SkillDatabaseKeys.MongoDB,
    ],
  },
  [SkillDatabaseKeys.Prisma]: {
    name: "Prisma",
    category: SkillCategoriesEnum.DatabaseManagement,
    isMainSkill: true,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [
      SkillDatabaseKeys.DatabaseManagementSystems,
      SkillDatabaseKeys.Databases,
      SkillDatabaseKeys.DatabaseIndexing,
      SkillDatabaseKeys.ObjectOrientedProgramming,
      SkillDatabaseKeys.MongoDB,
      SkillDatabaseKeys.PostgreSQL,
      SkillDatabaseKeys.MySQL,
      SkillDatabaseKeys.SQLite,
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.TypeScript,
    ],
  },
  [SkillDatabaseKeys.Drizzle]: {
    name: "Drizzle",
    category: SkillCategoriesEnum.DatabaseManagement,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.TypeScript,
      SkillDatabaseKeys.DatabaseManagementSystems,
      SkillDatabaseKeys.Databases,
      SkillDatabaseKeys.RelationalDatabases,
      SkillDatabaseKeys.DatabaseIndexing,
      SkillDatabaseKeys.PostgreSQL,
      SkillDatabaseKeys.MySQL,
      SkillDatabaseKeys.SQLite,
    ],
  },
  //^ DevOps
  [SkillDatabaseKeys.GitLabCI]: {
    name: "GitLab CI",
    category: SkillCategoriesEnum.DevOps,
    isMainSkill: true,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [
      SkillDatabaseKeys.InfrastructureAsCode,
      SkillDatabaseKeys.ContinuousDelivery,
      SkillDatabaseKeys.ContinuousIntegration,
      SkillDatabaseKeys.ContinuousDeployment,
      SkillDatabaseKeys.GitLab,
    ],
  },
  [SkillDatabaseKeys.Jenkins]: {
    name: "Jenkins",
    category: SkillCategoriesEnum.DevOps,
    isMainSkill: true,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [
      SkillDatabaseKeys.InfrastructureAsCode,
      SkillDatabaseKeys.ContinuousDelivery,
      SkillDatabaseKeys.ContinuousIntegration,
      SkillDatabaseKeys.ContinuousDeployment,
    ],
  },
  //^ Data Engineering technology
  [SkillDatabaseKeys.Pandas]: {
    name: "Pandas",
    category: SkillCategoriesEnum.DataEngineering,
    isMainSkill: true,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.DataEngineering,
    ],
  },
  [SkillDatabaseKeys.NumPy]: {
    name: "NumPy",
    category: SkillCategoriesEnum.DataEngineering,
    isMainSkill: true,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.DataEngineering,
      SkillDatabaseKeys.Mathematics,
    ],
  },
  [SkillDatabaseKeys.Jupyter]: {
    name: "Jupyter Notebooks",
    category: SkillCategoriesEnum.DataEngineering,
    isMainSkill: true,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.DataEngineering,
    ],
  },
  [SkillDatabaseKeys.DataFrame]: {
    name: "DataFrame",
    category: SkillCategoriesEnum.DataEngineering,
    isMainSkill: true,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.DataEngineering,
      SkillDatabaseKeys.Scala,
      SkillDatabaseKeys.ApacheSpark,
    ],
  },
  [SkillDatabaseKeys.DataIngestion]: {
    name: "Data Ingestion",
    category: SkillCategoriesEnum.DataEngineering,
    isMainSkill: true,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.DataEngineering,
      SkillDatabaseKeys.Scala,
      SkillDatabaseKeys.ApacheSpark,
      SkillDatabaseKeys.Azure_DataFactory,
    ],
  },
  [SkillDatabaseKeys.ApacheSpark]: {
    name: "Apache Spark",
    isMainSkill: true,
    category: SkillCategoriesEnum.DataEngineering,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.DataEngineering,
      SkillDatabaseKeys.Scala,
      SkillDatabaseKeys.SQL,
      SkillDatabaseKeys.DataFrame,
      SkillDatabaseKeys.Azure_Databricks,
    ],
  },
  //^ APIs and Web Services
  [SkillDatabaseKeys.REST]: {
    name: "REST",
    category: SkillCategoriesEnum.CommunicationProtocolsLibraries,
    isMainSkill: true,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [SkillDatabaseKeys.WebDevelopment, SkillDatabaseKeys.APIs],
  },
  [SkillDatabaseKeys.OpenAI]: {
    name: "OpenAI",
    category: SkillCategoriesEnum.BackEndWebDevelopment,
    isMainSkill: false,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [SkillDatabaseKeys.APIs],
  },
  //^ Testing
  [SkillDatabaseKeys.Jest]: {
    name: "Jest",
    category: SkillCategoriesEnum.Testing,
    isMainSkill: true,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [SkillDatabaseKeys.JavaScript, SkillDatabaseKeys.TypeScript],
  },
  [SkillDatabaseKeys.ReactTestingLibrary]: {
    name: "React Testing Library",
    category: SkillCategoriesEnum.Testing,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.TypeScript,
      SkillDatabaseKeys.ReactJS,
    ],
  },
  //^ Code Quality
  [SkillDatabaseKeys.Zod]: {
    name: "Zod",
    category: SkillCategoriesEnum.CodeQuality,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [SkillDatabaseKeys.TypeScript],
  },
  [SkillDatabaseKeys.ESLint]: {
    name: "ESLint",
    category: SkillCategoriesEnum.CodeQuality,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.TypeScript,
      SkillDatabaseKeys.Linting,
    ],
  },
  [SkillDatabaseKeys.Prettier]: {
    name: "Prettier",
    category: SkillCategoriesEnum.CodeQuality,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [SkillDatabaseKeys.JavaScript, SkillDatabaseKeys.TypeScript],
  },
  //^ Version Control Systems
  [SkillDatabaseKeys.Git]: {
    name: "Git",
    category: SkillCategoriesEnum.VersionControl,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [
      SkillDatabaseKeys.VersionControlSystems,
      SkillDatabaseKeys.GitHub,
      SkillDatabaseKeys.GitLab,
    ],
  },
  [SkillDatabaseKeys.GitHub]: {
    name: "GitHub",
    category: SkillCategoriesEnum.VersionControl,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [SkillDatabaseKeys.VersionControlSystems],
  },
  [SkillDatabaseKeys.GitLab]: {
    name: "GitLab",
    category: SkillCategoriesEnum.VersionControl,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [
      SkillDatabaseKeys.VersionControlSystems,
      SkillDatabaseKeys.GitLabCI,
    ],
  },
  //^ Cloud Computing
  [SkillDatabaseKeys.Azure]: {
    name: "Microsoft Azure",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Technology,
    isMainSkill: true,
    relatedSkills: [
      SkillDatabaseKeys.Azure_AppService,
      SkillDatabaseKeys.Azure_BlobStorage,
      SkillDatabaseKeys.Azure_CosmosDB,
      SkillDatabaseKeys.Azure_Monitor,
      SkillDatabaseKeys.Azure_Functions,
      SkillDatabaseKeys.Azure_ResourceManager,
      SkillDatabaseKeys.Azure_DataFactory,
      SkillDatabaseKeys.Azure_Datalake,
      SkillDatabaseKeys.Azure_Databricks,
      SkillDatabaseKeys.Azure_SQLWarehouse,
    ],
  },
  [SkillDatabaseKeys.Azure_AppService]: {
    name: "Azure App Service",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [SkillDatabaseKeys.Azure],
  },
  [SkillDatabaseKeys.Azure_BlobStorage]: {
    name: "Azure Blob Storage",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [
      SkillDatabaseKeys.Azure,
      SkillDatabaseKeys.Azure_Datalake,
      SkillDatabaseKeys.Azure_DataFactory,
    ],
  },
  [SkillDatabaseKeys.Azure_Monitor]: {
    name: "Azure Monitor",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [SkillDatabaseKeys.Azure],
  },
  [SkillDatabaseKeys.Azure_Functions]: {
    name: "Azure Functions",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [SkillDatabaseKeys.Azure],
  },
  [SkillDatabaseKeys.Azure_ResourceManager]: {
    name: "Azure Resource Manager",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [SkillDatabaseKeys.Azure],
  },
  [SkillDatabaseKeys.Azure_DataFactory]: {
    name: "Azure Data Factory",
    isMainSkill: true,
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [
      SkillDatabaseKeys.DataEngineering,
      SkillDatabaseKeys.DataIngestion,
      SkillDatabaseKeys.Azure_BlobStorage,
      SkillDatabaseKeys.Azure_Datalake,
      SkillDatabaseKeys.Azure_SQLWarehouse,
    ],
  },
  [SkillDatabaseKeys.Azure_Datalake]: {
    name: "Azure Datalake",
    isMainSkill: true,
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [
      SkillDatabaseKeys.DataEngineering,
      SkillDatabaseKeys.DataIngestion,
      SkillDatabaseKeys.Azure_BlobStorage,
      SkillDatabaseKeys.Azure_DataFactory,
      SkillDatabaseKeys.Azure_SQLWarehouse,
    ],
  },
  [SkillDatabaseKeys.Azure_SQLWarehouse]: {
    name: "Azure SQL Warehouse",
    isMainSkill: true,
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [
      SkillDatabaseKeys.DataEngineering,
      SkillDatabaseKeys.DataIngestion,
      SkillDatabaseKeys.Azure_BlobStorage,
      SkillDatabaseKeys.Azure_DataFactory,
      SkillDatabaseKeys.SQL,
    ],
  },
  [SkillDatabaseKeys.Azure_Databricks]: {
    name: "Azure DataBricks",
    isMainSkill: true,
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.DataEngineering,
      SkillDatabaseKeys.DataIngestion,
      SkillDatabaseKeys.Azure_BlobStorage,
      SkillDatabaseKeys.Azure_Datalake,
      SkillDatabaseKeys.Azure_SQLWarehouse,
      SkillDatabaseKeys.SQL,
      SkillDatabaseKeys.Scala,
      SkillDatabaseKeys.ApacheSpark,
      SkillDatabaseKeys.DataFrame,
    ],
  },
  //^ Mathematics
  [SkillDatabaseKeys.Probability]: {
    name: "Probability",
    category: SkillCategoriesEnum.Mathematics,
    skillType: SkillTypesEnum.Technical,
    relatedSkills: [
      SkillDatabaseKeys.Mathematics,
      SkillDatabaseKeys.Algorithms,
      SkillDatabaseKeys.Pandas,
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.DataEngineering,
    ],
  },
  [SkillDatabaseKeys.Statistics]: {
    name: "Statistics",
    category: SkillCategoriesEnum.Mathematics,
    isMainSkill: true,
    skillType: SkillTypesEnum.Technical,
    relatedSkills: [
      SkillDatabaseKeys.Mathematics,
      SkillDatabaseKeys.Algorithms,
      SkillDatabaseKeys.Pandas,
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.DataEngineering,
    ],
  },
  [SkillDatabaseKeys.Calculus]: {
    name: "Calculus",
    category: SkillCategoriesEnum.Mathematics,
    isMainSkill: true,
    skillType: SkillTypesEnum.Technical,
    relatedSkills: [
      SkillDatabaseKeys.Mathematics,
      SkillDatabaseKeys.Algorithms,
      SkillDatabaseKeys.Pandas,
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.DataEngineering,
    ],
  },
  [SkillDatabaseKeys.Trigonometry]: {
    name: "Trigonometry",
    category: SkillCategoriesEnum.Mathematics,
    skillType: SkillTypesEnum.Technical,
    relatedSkills: [SkillDatabaseKeys.Mathematics],
  },
  [SkillDatabaseKeys.Algebra]: {
    name: "Algebra",
    category: SkillCategoriesEnum.Mathematics,
    isMainSkill: true,
    skillType: SkillTypesEnum.Technical,
    relatedSkills: [
      SkillDatabaseKeys.Mathematics,
      SkillDatabaseKeys.Algorithms,
      SkillDatabaseKeys.Pandas,
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.DataEngineering,
    ],
  },
  [SkillDatabaseKeys.LinearAlgebra]: {
    name: "Linear Algebra",
    category: SkillCategoriesEnum.Mathematics,
    isMainSkill: true,
    skillType: SkillTypesEnum.Technical,
    relatedSkills: [
      SkillDatabaseKeys.Mathematics,
      SkillDatabaseKeys.Algorithms,
      SkillDatabaseKeys.Pandas,
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.DataEngineering,
    ],
  },
  [SkillDatabaseKeys.Discrete]: {
    name: "Discrete",
    category: SkillCategoriesEnum.Mathematics,
    skillType: SkillTypesEnum.Technical,
    relatedSkills: [
      SkillDatabaseKeys.Mathematics,
      SkillDatabaseKeys.Algorithms,
      SkillDatabaseKeys.Pandas,
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.DataEngineering,
    ],
  },
  [SkillDatabaseKeys.Geometry]: {
    name: "Geometry",
    category: SkillCategoriesEnum.Mathematics,
    skillType: SkillTypesEnum.Technical,
    relatedSkills: [SkillDatabaseKeys.Mathematics],
  },
  [SkillDatabaseKeys.Logics]: {
    name: "Logics",
    category: SkillCategoriesEnum.Mathematics,
    isMainSkill: true,
    skillType: SkillTypesEnum.Technical,
    relatedSkills: [
      SkillDatabaseKeys.Mathematics,
      SkillDatabaseKeys.Algorithms,
      SkillDatabaseKeys.Pandas,
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.DataEngineering,
    ],
  },
  [SkillDatabaseKeys.Mechanics]: {
    name: "Mechanics",
    category: SkillCategoriesEnum.Mathematics,
    skillType: SkillTypesEnum.Technical,
    relatedSkills: [
      SkillDatabaseKeys.Mathematics,
      SkillDatabaseKeys.Algebra,
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.Logics,
    ],
  },
  //^ Project Management
  [SkillDatabaseKeys.NPM]: {
    name: "NPM",
    category: SkillCategoriesEnum.ProjectManagers,
    isMainSkill: true,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [SkillDatabaseKeys.Java, SkillDatabaseKeys.TypeScript],
  },
  [SkillDatabaseKeys.Yarn]: {
    name: "Yarn",
    category: SkillCategoriesEnum.ProjectManagers,
    isMainSkill: true,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [SkillDatabaseKeys.Java, SkillDatabaseKeys.TypeScript],
  },
  [SkillDatabaseKeys.PNPM]: {
    name: "PNPM",
    category: SkillCategoriesEnum.ProjectManagers,
    isMainSkill: true,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [SkillDatabaseKeys.Java, SkillDatabaseKeys.TypeScript],
  },
  [SkillDatabaseKeys.Pip]: {
    name: "Pip",
    category: SkillCategoriesEnum.ProjectManagers,
    isMainSkill: true,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [SkillDatabaseKeys.Python],
  },
  //^ General Technical Skills
  [SkillDatabaseKeys.ContinuousIntegration]: {
    name: "Continuous Integration",
    category: SkillCategoriesEnum.DevOps,
    isMainSkill: false,
    skillType: SkillTypesEnum.Technical,
    relatedSkills: [SkillDatabaseKeys.GitLabCI, SkillDatabaseKeys.Jenkins],
  },
  [SkillDatabaseKeys.ContinuousDelivery]: {
    name: "Continuous Delivery",
    category: SkillCategoriesEnum.DevOps,
    isMainSkill: false,
    skillType: SkillTypesEnum.Technical,
    relatedSkills: [SkillDatabaseKeys.GitLabCI, SkillDatabaseKeys.Jenkins],
  },
  [SkillDatabaseKeys.ContinuousDeployment]: {
    name: "Continuous Deployment",
    category: SkillCategoriesEnum.DevOps,
    isMainSkill: false,
    skillType: SkillTypesEnum.Technical,
    relatedSkills: [SkillDatabaseKeys.GitLabCI, SkillDatabaseKeys.Jenkins],
  },
  [SkillDatabaseKeys.Linting]: {
    name: "Linting",
    category: SkillCategoriesEnum.CodeQuality,
    isMainSkill: false,
    skillType: SkillTypesEnum.Technical,
    relatedSkills: [
      SkillDatabaseKeys.Zod,
      SkillDatabaseKeys.Prettier,
      SkillDatabaseKeys.ESLint,
    ],
  },
  [SkillDatabaseKeys.ObjectOrientedProgramming]: {
    name: "Object Oriented Programming",
    category: SkillCategoriesEnum.ComputerScienceConcepts,
    isMainSkill: false,
    skillType: SkillTypesEnum.Technical,
    relatedSkills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.Java,
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.TypeScript,
    ],
  },
  [SkillDatabaseKeys.FunctionalProgramming]: {
    name: "Functional Programming",
    category: SkillCategoriesEnum.ComputerScienceConcepts,
    isMainSkill: false,
    skillType: SkillTypesEnum.Technical,
    relatedSkills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.Java,
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.TypeScript,
    ],
  },
  [SkillDatabaseKeys.Algorithms]: {
    name: "Algorithms",
    category: SkillCategoriesEnum.ComputerScienceConcepts,
    isMainSkill: false,
    skillType: SkillTypesEnum.Technical,
    relatedSkills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.Java,
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.TypeScript,
    ],
  },
  [SkillDatabaseKeys.DataStructures]: {
    name: "Data Structures",
    category: SkillCategoriesEnum.ComputerScienceConcepts,
    isMainSkill: false,
    skillType: SkillTypesEnum.Technical,
    relatedSkills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.Java,
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.TypeScript,
    ],
  },
  [SkillDatabaseKeys.DataEngineering]: {
    name: "Data Engineering",
    category: SkillCategoriesEnum.DataEngineering,
    isMainSkill: true,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [
      SkillDatabaseKeys.Pandas,
      SkillDatabaseKeys.NumPy,
      SkillDatabaseKeys.DataIngestion,
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.ApacheSpark,
      SkillDatabaseKeys.Jupyter,
      SkillDatabaseKeys.Scala,
      SkillDatabaseKeys.SQL,
    ],
  },
  [SkillDatabaseKeys.APIs]: {
    name: "APIs",
    category: SkillCategoriesEnum.CommunicationProtocolsLibraries,
    isMainSkill: false,
    skillType: SkillTypesEnum.Technical,
    relatedSkills: [SkillDatabaseKeys.REST, SkillDatabaseKeys.OpenAI],
  },
  [SkillDatabaseKeys.Databases]: {
    name: "Databases",
    category: SkillCategoriesEnum.DatabaseManagement,
    isMainSkill: false,
    skillType: SkillTypesEnum.Technical,
    relatedSkills: [
      SkillDatabaseKeys.RelationalDatabases,
      SkillDatabaseKeys.NonRelationalDatabases,
      SkillDatabaseKeys.DatabaseManagementSystems,
      SkillDatabaseKeys.DatabaseIndexing,
      SkillDatabaseKeys.PostgreSQL,
      SkillDatabaseKeys.MySQL,
      SkillDatabaseKeys.SQLite,
      SkillDatabaseKeys.MongoDB,
    ],
  },
  [SkillDatabaseKeys.RelationalDatabases]: {
    name: "Relational Databases (SQL)",
    category: SkillCategoriesEnum.DatabaseManagement,
    isMainSkill: false,
    skillType: SkillTypesEnum.Technical,
    relatedSkills: [
      SkillDatabaseKeys.RelationalDatabases,
      SkillDatabaseKeys.DatabaseIndexing,

      SkillDatabaseKeys.PostgreSQL,
      SkillDatabaseKeys.MySQL,
      SkillDatabaseKeys.SQLite,
    ],
  },
  [SkillDatabaseKeys.NonRelationalDatabases]: {
    name: "Non Relational Databases (NoSQL)",
    category: SkillCategoriesEnum.DatabaseManagement,
    isMainSkill: false,
    skillType: SkillTypesEnum.Technical,
    relatedSkills: [
      SkillDatabaseKeys.DatabaseManagementSystems,
      SkillDatabaseKeys.DatabaseIndexing,
      SkillDatabaseKeys.MongoDB,
    ],
  },
  [SkillDatabaseKeys.Testing]: {
    name: "Testing",
    category: SkillCategoriesEnum.Testing,
    isMainSkill: false,
    skillType: SkillTypesEnum.Technical,
    relatedSkills: [
      SkillDatabaseKeys.Jest,
      SkillDatabaseKeys.ReactTestingLibrary,
    ],
  },
  [SkillDatabaseKeys.InfrastructureAsCode]: {
    name: "Infrastructure as Code",
    category: SkillCategoriesEnum.DevOps,
    isMainSkill: false,
    skillType: SkillTypesEnum.Technical,
    relatedSkills: [],
  },
  [SkillDatabaseKeys.DatabaseManagementSystems]: {
    name: "Database Management Systems",
    category: SkillCategoriesEnum.DatabaseManagement,
    isMainSkill: true,
    skillType: SkillTypesEnum.Technical,
    relatedSkills: [
      SkillDatabaseKeys.DatabaseIndexing,
      SkillDatabaseKeys.RelationalDatabases,
      SkillDatabaseKeys.NonRelationalDatabases,
      SkillDatabaseKeys.SQL,
      SkillDatabaseKeys.MySQL,
      SkillDatabaseKeys.Databases,
    ],
  },
  [SkillDatabaseKeys.DatabaseIndexing]: {
    name: "Indexing",
    category: SkillCategoriesEnum.DatabaseManagement,
    isMainSkill: false,
    skillType: SkillTypesEnum.Technical,
    relatedSkills: [
      SkillDatabaseKeys.RelationalDatabases,
      SkillDatabaseKeys.NonRelationalDatabases,

      SkillDatabaseKeys.Databases,
      SkillDatabaseKeys.DatabaseManagementSystems,
      SkillDatabaseKeys.PostgreSQL,
      SkillDatabaseKeys.MySQL,
      SkillDatabaseKeys.SQLite,
      SkillDatabaseKeys.MongoDB,
    ],
  },
  [SkillDatabaseKeys.DesignPatterns]: {
    name: "Design Patterns",
    category: SkillCategoriesEnum.CodeQuality,
    isMainSkill: false,
    skillType: SkillTypesEnum.Technical,
    relatedSkills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.Java,
      SkillDatabaseKeys.TypeScript,
      SkillDatabaseKeys.JavaScript,
    ],
  },
  [SkillDatabaseKeys.UserAuthentication]: {
    name: "User Authentication",
    category: SkillCategoriesEnum.BackEndWebDevelopment,
    isMainSkill: false,
    skillType: SkillTypesEnum.Technical,
    relatedSkills: [
      SkillDatabaseKeys.Firebase,

      SkillDatabaseKeys.Auth0,
      SkillDatabaseKeys.ClerkAuth,
      SkillDatabaseKeys.NextAuth,
    ],
  },
  [SkillDatabaseKeys.WebDevelopment]: {
    name: "Web Development",
    category: SkillCategoriesEnum.PlatformDevelopment,
    isMainSkill: false,
    skillType: SkillTypesEnum.Technical,
    relatedSkills: [
      SkillDatabaseKeys.REST,
      SkillDatabaseKeys.Firebase,
      SkillDatabaseKeys.Auth0,
      SkillDatabaseKeys.ClerkAuth,
      SkillDatabaseKeys.NextAuth,
      SkillDatabaseKeys.Stripe,
      SkillDatabaseKeys.ExpressJS,
      SkillDatabaseKeys.Cloudinary,
      SkillDatabaseKeys.UserAuthentication,
      SkillDatabaseKeys.NextJS,
      SkillDatabaseKeys.ReactJS,
      SkillDatabaseKeys.Zustand,
      SkillDatabaseKeys.Redux,
      SkillDatabaseKeys.TailwindCSS,
      SkillDatabaseKeys.HTML,
      SkillDatabaseKeys.CSS,
      SkillDatabaseKeys.HeadlessUI,
      SkillDatabaseKeys.ShadcnUI,
      SkillDatabaseKeys.RadixUI,
      SkillDatabaseKeys.ReactQuery,
      SkillDatabaseKeys.NextUI,
      SkillDatabaseKeys.StateManagement,
      SkillDatabaseKeys.Bootstrap,
      SkillDatabaseKeys.MaterialUI,
      SkillDatabaseKeys.AntDesign,
      SkillDatabaseKeys.Axios,
      SkillDatabaseKeys.StateManagement,
    ],
  },
  [SkillDatabaseKeys.Mathematics]: {
    name: "Mathematics",
    category: SkillCategoriesEnum.Mathematics,
    isMainSkill: false,
    skillType: SkillTypesEnum.Technical,
    relatedSkills: [
      SkillDatabaseKeys.Probability,
      SkillDatabaseKeys.Statistics,
      SkillDatabaseKeys.Calculus,
      SkillDatabaseKeys.Trigonometry,
      SkillDatabaseKeys.Algebra,
      SkillDatabaseKeys.LinearAlgebra,
      SkillDatabaseKeys.Discrete,
      SkillDatabaseKeys.Geometry,
      SkillDatabaseKeys.Mechanics,
      SkillDatabaseKeys.Logics,
    ],
  },
  [SkillDatabaseKeys.VersionControlSystems]: {
    name: "Version Control",
    category: SkillCategoriesEnum.VersionControl,
    isMainSkill: false,
    skillType: SkillTypesEnum.Technical,
    relatedSkills: [
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.GitHub,
      SkillDatabaseKeys.GitLab,
    ],
  },
  [SkillDatabaseKeys.StateManagement]: {
    name: "State Management",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    isMainSkill: false,
    skillType: SkillTypesEnum.Technical,
    relatedSkills: [SkillDatabaseKeys.Zustand, SkillDatabaseKeys.Redux],
  },

  //^ Soft Skills
  [SkillDatabaseKeys.Communication]: {
    name: "Communication",
    isMainSkill: false,
    skillType: SkillTypesEnum.Soft,
    category: SkillCategoriesEnum.SoftSkills,
  },
  [SkillDatabaseKeys.ProjectManagement]: {
    name: "Project Management",
    isMainSkill: false,
    skillType: SkillTypesEnum.Soft,
    category: SkillCategoriesEnum.SoftSkills,
  },
  [SkillDatabaseKeys.Teamwork]: {
    name: "Teamwork",
    isMainSkill: false,
    skillType: SkillTypesEnum.Soft,
    category: SkillCategoriesEnum.SoftSkills,
  },
  [SkillDatabaseKeys.Leadership]: {
    name: "Leadership",
    isMainSkill: false,
    skillType: SkillTypesEnum.Soft,
    category: SkillCategoriesEnum.SoftSkills,
  },
  [SkillDatabaseKeys.ProblemSolving]: {
    name: "Problem Solving",
    isMainSkill: false,
    skillType: SkillTypesEnum.Soft,
    category: SkillCategoriesEnum.SoftSkills,
  },
  [SkillDatabaseKeys.CriticalThinking]: {
    name: "Critical Thinking",
    isMainSkill: false,
    skillType: SkillTypesEnum.Soft,
    category: SkillCategoriesEnum.SoftSkills,
  },
  [SkillDatabaseKeys.Creativity]: {
    name: "Creativity",
    isMainSkill: false,
    skillType: SkillTypesEnum.Soft,
    category: SkillCategoriesEnum.SoftSkills,
  },
  [SkillDatabaseKeys.Adaptability]: {
    name: "Adaptability",
    isMainSkill: false,
    skillType: SkillTypesEnum.Soft,
    category: SkillCategoriesEnum.SoftSkills,
  },
  [SkillDatabaseKeys.TimeManagement]: {
    name: "Time Management",
    isMainSkill: false,
    skillType: SkillTypesEnum.Soft,
    category: SkillCategoriesEnum.SoftSkills,
  },
  [SkillDatabaseKeys.RiskManagement]: {
    name: "Risk Management",
    isMainSkill: false,
    skillType: SkillTypesEnum.Soft,
    category: SkillCategoriesEnum.SoftSkills,
  },
  [SkillDatabaseKeys.StakeholderManagement]: {
    name: "Stakeholder Management",
    isMainSkill: false,
    skillType: SkillTypesEnum.Soft,
    category: SkillCategoriesEnum.SoftSkills,
  },
  [SkillDatabaseKeys.ScopeManagement]: {
    name: "Scope Management",
    isMainSkill: false,
    skillType: SkillTypesEnum.Soft,
    category: SkillCategoriesEnum.SoftSkills,
  },
  [SkillDatabaseKeys.CostManagement]: {
    name: "Cost Management",
    isMainSkill: false,
    skillType: SkillTypesEnum.Soft,
    category: SkillCategoriesEnum.SoftSkills,
  },
  [SkillDatabaseKeys.QualityManagement]: {
    name: "Quality Management",
    isMainSkill: false,
    skillType: SkillTypesEnum.Soft,
    category: SkillCategoriesEnum.SoftSkills,
  },
  [SkillDatabaseKeys.ProcurementManagement]: {
    name: "Procurement Management",
    isMainSkill: false,
    skillType: SkillTypesEnum.Soft,
    category: SkillCategoriesEnum.SoftSkills,
  },
  [SkillDatabaseKeys.IntegrationManagement]: {
    name: "Integration Management",
    isMainSkill: false,
    skillType: SkillTypesEnum.Soft,
    category: SkillCategoriesEnum.SoftSkills,
  },
  [SkillDatabaseKeys.HumanResourceManagement]: {
    name: "Human Resource Management",
    isMainSkill: false,
    skillType: SkillTypesEnum.Soft,
    category: SkillCategoriesEnum.SoftSkills,
  },
};

export default skillDatabaseMap;

/**
 * List of keys for the skills that can be used to uniquely identify the skills.
 */
export const skillDatabaseKeys: SkillDatabaseKeys[] = Object.keys(
  skillDatabaseMap
) as SkillDatabaseKeys[];
