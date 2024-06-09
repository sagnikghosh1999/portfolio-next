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
  [SkillDatabaseKeys.Python]: {
    name: "Python",
    isMainSkill: true,
    skillType: SkillTypesEnum.Technology,
    category: SkillCategoriesEnum.ProgrammingLanguages,
    relatedSkills: [
      SkillDatabaseKeys.SimpleGUI,

      SkillDatabaseKeys.UnitTest,

      SkillDatabaseKeys.Pip,

      SkillDatabaseKeys.Pandas,
      SkillDatabaseKeys.NumPy,
      SkillDatabaseKeys.Matplotlib,
      SkillDatabaseKeys.Seaborn,
      SkillDatabaseKeys.Jupyter,
      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.DataEngineering,

      SkillDatabaseKeys.WebDevelopment,
    ],
  },
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
  [SkillDatabaseKeys.Java]: {
    name: "Java",
    isMainSkill: true,
    skillType: SkillTypesEnum.Technology,
    category: SkillCategoriesEnum.ProgrammingLanguages,
    relatedSkills: [SkillDatabaseKeys.JUnit],
  },

  [SkillDatabaseKeys.C]: {
    name: "C",
    isMainSkill: false,
    skillType: SkillTypesEnum.Technology,
    category: SkillCategoriesEnum.ProgrammingLanguages,
  },

  [SkillDatabaseKeys.Scala]: {
    name: "Scala",
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

  [SkillDatabaseKeys.Zustand]: {
    name: "Zustand",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [
      SkillDatabaseKeys.WebDevelopment,
      SkillDatabaseKeys.StateManagement,
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
  [SkillDatabaseKeys.TailwindCSS]: {
    name: "Tailwind CSS",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    isMainSkill: true,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [SkillDatabaseKeys.CSS, SkillDatabaseKeys.WebDevelopment],
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
  [SkillDatabaseKeys.ShadcnUI]: {
    name: "Shadcn UI",
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

  [SkillDatabaseKeys.ReactQuery]: {
    name: "React Query",
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
  [SkillDatabaseKeys.Bootstrap]: {
    name: "Bootstrap",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [SkillDatabaseKeys.WebDevelopment],
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

  [SkillDatabaseKeys.SimpleGUI]: {
    name: "Simple GUI",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    skillType: SkillTypesEnum.Technology,
  },
  [SkillDatabaseKeys.Axios]: {
    name: "Axios",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [SkillDatabaseKeys.WebDevelopment, SkillDatabaseKeys.APIs],
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
  /*
  [SkillDatabaseKeys.Redis]: {
    name: "Redis",
    category: SkillCategoriesEnum.DatabaseManagement,
    isMainSkill: true,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [
      SkillDatabaseKeys.DatabaseManagementSystems,
      SkillDatabaseKeys.Databases,
      SkillDatabaseKeys.NonRelationalDatabases,
      SkillDatabaseKeys.DatabaseIndexing,
    ],
  },*/
  [SkillDatabaseKeys.Convex]: {
    name: "Convex",
    category: SkillCategoriesEnum.DatabaseManagement,
    isMainSkill: false,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [
      SkillDatabaseKeys.DatabaseManagementSystems,
      SkillDatabaseKeys.Databases,
      SkillDatabaseKeys.NonRelationalDatabases,
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
  [SkillDatabaseKeys.GitHubActions]: {
    name: "GitHub Actions",
    category: SkillCategoriesEnum.DevOps,
    isMainSkill: true,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [
      SkillDatabaseKeys.InfrastructureAsCode,
      SkillDatabaseKeys.ContinuousDelivery,
      SkillDatabaseKeys.ContinuousIntegration,
      SkillDatabaseKeys.ContinuousDeployment,
      SkillDatabaseKeys.Automation,
      SkillDatabaseKeys.GitHub,
    ],
  },
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
      SkillDatabaseKeys.Automation,
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

      SkillDatabaseKeys.Automation,
    ],
  },

  //^ Artificial Intelligence, Machine Learning, and Data Science

  [SkillDatabaseKeys.Pandas]: {
    name: "Pandas",
    category: SkillCategoriesEnum.ArtificialIntelligence,
    isMainSkill: true,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.DataEngineering,
    ],
  },
  [SkillDatabaseKeys.NumPy]: {
    name: "NumPy",
    category: SkillCategoriesEnum.ArtificialIntelligence,
    isMainSkill: true,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.DataEngineering,
      SkillDatabaseKeys.Mathematics,
    ],
  },
  [SkillDatabaseKeys.Matplotlib]: {
    name: "Matplotlib",
    category: SkillCategoriesEnum.ArtificialIntelligence,
    isMainSkill: true,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.DataEngineering,
    ],
  },
  [SkillDatabaseKeys.Seaborn]: {
    name: "Seaborn",
    category: SkillCategoriesEnum.ArtificialIntelligence,
    isMainSkill: true,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.DataEngineering,
    ],
  },

  [SkillDatabaseKeys.Jupyter]: {
    name: "Jupyter Notebooks",
    category: SkillCategoriesEnum.ArtificialIntelligence,
    isMainSkill: true,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.DataEngineering,
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
  /*
  [SkillDatabaseKeys.GraphQL]: {
    name: "GraphQL",
    category: SkillCategoriesEnum.CommunicationProtocolsLibraries,
    isMainSkill: true,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [
      SkillDatabaseKeys.WebDevelopment,
      SkillDatabaseKeys.APIs,
      SkillDatabaseKeys.Apollo,
    ],
  },*/
  [SkillDatabaseKeys.TRPC]: {
    name: "tRPC",
    category: SkillCategoriesEnum.CommunicationProtocolsLibraries,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [SkillDatabaseKeys.WebDevelopment, SkillDatabaseKeys.APIs],
  },
  /*  [SkillDatabaseKeys.SocketIO]: {
    name: "Socket.IO",
    category: SkillCategoriesEnum.CommunicationProtocolsLibraries,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [
      SkillDatabaseKeys.WebDevelopment,
      SkillDatabaseKeys.WebSockets,
    ],
  },*/

  [SkillDatabaseKeys.OpenAI]: {
    name: "OpenAI",
    category: SkillCategoriesEnum.ArtificialIntelligence,
    isMainSkill: true,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [
      SkillDatabaseKeys.APIs,
      SkillDatabaseKeys.ArtificialIntelligence,
    ],
  },
  [SkillDatabaseKeys.ReplicateAI]: {
    name: "Replicate AI",
    category: SkillCategoriesEnum.ArtificialIntelligence,
    isMainSkill: true,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [
      SkillDatabaseKeys.APIs,
      SkillDatabaseKeys.ArtificialIntelligence,
    ],
  },

  //^ Testing
  [SkillDatabaseKeys.Jest]: {
    name: "Jest",
    category: SkillCategoriesEnum.Testing,
    isMainSkill: true,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [SkillDatabaseKeys.JavaScript, SkillDatabaseKeys.TypeScript],
  },

  [SkillDatabaseKeys.UnitTest]: {
    name: "UnitTest",
    category: SkillCategoriesEnum.Testing,
    isMainSkill: true,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [SkillDatabaseKeys.Python],
  },
  [SkillDatabaseKeys.JUnit]: {
    name: "JUnit",
    category: SkillCategoriesEnum.Testing,
    isMainSkill: true,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [SkillDatabaseKeys.Java],
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
    relatedSkills: [
      SkillDatabaseKeys.VersionControlSystems,
      SkillDatabaseKeys.GitHubActions,
    ],
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
  [SkillDatabaseKeys.AWS]: {
    name: "Amazon Web Services",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [
      SkillDatabaseKeys.AWS_K3s,
      SkillDatabaseKeys.AWS_EC2,
      SkillDatabaseKeys.AWS_S3,
      SkillDatabaseKeys.AWS_VPC,
      SkillDatabaseKeys.AWS_Lambda,
      SkillDatabaseKeys.AWS_CloudFormation,
      SkillDatabaseKeys.AWS_CloudFront,
      SkillDatabaseKeys.AWS_ElasticBeanstalk,
    ],
  },
  [SkillDatabaseKeys.AWS_K3s]: {
    name: "K3s",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [SkillDatabaseKeys.AWS],
  },
  [SkillDatabaseKeys.AWS_CloudWatch]: {
    name: "CloudWatch",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [SkillDatabaseKeys.AWS],
  },
  [SkillDatabaseKeys.AWS_ApplicationLoadBalancer]: {
    name: "Application Load Balancer (ALB)",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Technology,
  },
  [SkillDatabaseKeys.AWS_ElasticCache]: {
    name: "Elastic Cache (EC)",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [SkillDatabaseKeys.AWS],
  },

  [SkillDatabaseKeys.AWS_ElasticFileSystem]: {
    name: "Elastic File System (EFS)",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [SkillDatabaseKeys.AWS],
  },
  [SkillDatabaseKeys.AWS_ElasticBlockStore]: {
    name: "Elastic Block Store (EBS)",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [SkillDatabaseKeys.AWS],
  },
  [SkillDatabaseKeys.AWS_RelationalDatabaseService]: {
    name: "Relational Database Service (RDS)",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [
      SkillDatabaseKeys.DatabaseManagementSystems,
      SkillDatabaseKeys.Databases,
      SkillDatabaseKeys.RelationalDatabases,
      SkillDatabaseKeys.DatabaseIndexing,

      SkillDatabaseKeys.AWS,
    ],
  },
  [SkillDatabaseKeys.AWS_AutoScaling]: {
    name: "Auto Scaling",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [SkillDatabaseKeys.AWS],
  },
  [SkillDatabaseKeys.AWS_EC2]: {
    name: "Elastic Compute Cloud (EC2)",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [SkillDatabaseKeys.AWS],
  },
  [SkillDatabaseKeys.AWS_S3]: {
    name: "Simple Storage Service (S3)",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [SkillDatabaseKeys.AWS],
  },
  [SkillDatabaseKeys.AWS_VPC]: {
    name: "Virtual Private Cloud (VPC)",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [SkillDatabaseKeys.AWS],
  },
  [SkillDatabaseKeys.AWS_Lambda]: {
    name: "Lambda",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [SkillDatabaseKeys.AWS],
  },
  [SkillDatabaseKeys.AWS_CloudFormation]: {
    name: "CloudFormation",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [SkillDatabaseKeys.AWS],
  },
  [SkillDatabaseKeys.AWS_CloudFront]: {
    name: "CloudFront",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [SkillDatabaseKeys.AWS],
  },
  [SkillDatabaseKeys.AWS_ElasticBeanstalk]: {
    name: "Elastic Beanstalk",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [SkillDatabaseKeys.AWS],
  },

  [SkillDatabaseKeys.Azure]: {
    name: "Microsoft Azure",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [
      SkillDatabaseKeys.Azure_AppService,
      SkillDatabaseKeys.Azure_BlobStorage,
      SkillDatabaseKeys.Azure_DurableFunctions,
      SkillDatabaseKeys.Azure_Monitor,
      SkillDatabaseKeys.Azure_Functions,
      SkillDatabaseKeys.Azure_ResourceManager,
      SkillDatabaseKeys.Azure_ContainerRegistry,
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
    relatedSkills: [SkillDatabaseKeys.Azure],
  },
  [SkillDatabaseKeys.Azure_DurableFunctions]: {
    name: "Durable Functions",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [SkillDatabaseKeys.Azure],
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
  [SkillDatabaseKeys.Azure_ContainerRegistry]: {
    name: "Azure Container Registry",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Technology,
    relatedSkills: [SkillDatabaseKeys.Azure],
  },

  //^ Mathematics
  [SkillDatabaseKeys.Probability]: {
    name: "Probability",
    category: SkillCategoriesEnum.Mathematics,
    isMainSkill: true,
    skillType: SkillTypesEnum.Technical,
    relatedSkills: [
      SkillDatabaseKeys.Mathematics,

      SkillDatabaseKeys.ArtificialIntelligence,
    ],
  },
  [SkillDatabaseKeys.Statistics]: {
    name: "Statistics",
    category: SkillCategoriesEnum.Mathematics,
    isMainSkill: true,
    skillType: SkillTypesEnum.Technical,
    relatedSkills: [
      SkillDatabaseKeys.Mathematics,

      SkillDatabaseKeys.ArtificialIntelligence,
    ],
  },
  [SkillDatabaseKeys.Calculus]: {
    name: "Calculus",
    category: SkillCategoriesEnum.Mathematics,
    isMainSkill: true,
    skillType: SkillTypesEnum.Technical,
    relatedSkills: [
      SkillDatabaseKeys.Mathematics,

      SkillDatabaseKeys.ArtificialIntelligence,
    ],
  },
  [SkillDatabaseKeys.Trigonometry]: {
    name: "Trigonometry",
    category: SkillCategoriesEnum.Mathematics,
    isMainSkill: true,
    skillType: SkillTypesEnum.Technical,
    relatedSkills: [SkillDatabaseKeys.Mathematics],
  },
  [SkillDatabaseKeys.Algebra]: {
    name: "Algebra",
    category: SkillCategoriesEnum.Mathematics,
    isMainSkill: true,
    skillType: SkillTypesEnum.Technical,
    relatedSkills: [SkillDatabaseKeys.Mathematics],
  },
  [SkillDatabaseKeys.LinearAlgebra]: {
    name: "Linear Algebra",
    category: SkillCategoriesEnum.Mathematics,
    isMainSkill: true,
    skillType: SkillTypesEnum.Technical,
    relatedSkills: [
      SkillDatabaseKeys.Mathematics,

      SkillDatabaseKeys.ArtificialIntelligence,
    ],
  },
  [SkillDatabaseKeys.Discrete]: {
    name: "Discrete",
    category: SkillCategoriesEnum.Mathematics,
    isMainSkill: true,
    skillType: SkillTypesEnum.Technical,
    relatedSkills: [SkillDatabaseKeys.Mathematics],
  },
  [SkillDatabaseKeys.Geometry]: {
    name: "Geometry",
    category: SkillCategoriesEnum.Mathematics,
    isMainSkill: true,
    skillType: SkillTypesEnum.Technical,
    relatedSkills: [SkillDatabaseKeys.Mathematics],
  },
  [SkillDatabaseKeys.Logics]: {
    name: "Logics",
    category: SkillCategoriesEnum.Mathematics,
    isMainSkill: true,
    skillType: SkillTypesEnum.Technical,
    relatedSkills: [SkillDatabaseKeys.Mathematics],
  },
  [SkillDatabaseKeys.Mechanics]: {
    name: "Mechanics",
    category: SkillCategoriesEnum.Mathematics,
    isMainSkill: true,
    skillType: SkillTypesEnum.Technical,
    relatedSkills: [SkillDatabaseKeys.Mathematics],
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
    relatedSkills: [
      SkillDatabaseKeys.GitHubActions,
      SkillDatabaseKeys.GitLabCI,
      SkillDatabaseKeys.Jenkins,
    ],
  },

  [SkillDatabaseKeys.ContinuousDelivery]: {
    name: "Continuous Delivery",
    category: SkillCategoriesEnum.DevOps,
    isMainSkill: false,
    skillType: SkillTypesEnum.Technical,
    relatedSkills: [
      SkillDatabaseKeys.GitHubActions,
      SkillDatabaseKeys.GitLabCI,
      SkillDatabaseKeys.Jenkins,
    ],
  },

  [SkillDatabaseKeys.ContinuousDeployment]: {
    name: "Continuous Deployment",
    category: SkillCategoriesEnum.DevOps,
    isMainSkill: false,
    skillType: SkillTypesEnum.Technical,
    relatedSkills: [
      SkillDatabaseKeys.GitHubActions,
      SkillDatabaseKeys.GitLabCI,
      SkillDatabaseKeys.Jenkins,
    ],
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

  [SkillDatabaseKeys.ArtificialIntelligence]: {
    name: "Artificial Intelligence",
    category: SkillCategoriesEnum.ArtificialIntelligence,
    isMainSkill: false,
    skillType: SkillTypesEnum.Technical,
    relatedSkills: [
      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.DataEngineering,

      SkillDatabaseKeys.Pandas,
      SkillDatabaseKeys.NumPy,
      SkillDatabaseKeys.Matplotlib,
      SkillDatabaseKeys.Seaborn,

      SkillDatabaseKeys.Jupyter,
      SkillDatabaseKeys.OpenAI,
      SkillDatabaseKeys.ReplicateAI,
    ],
  },
  [SkillDatabaseKeys.DataEngineering]: {
    name: "Data Science",
    category: SkillCategoriesEnum.ArtificialIntelligence,
    isMainSkill: false,
    skillType: SkillTypesEnum.Technical,
    relatedSkills: [
      SkillDatabaseKeys.Pandas,
      SkillDatabaseKeys.NumPy,
      SkillDatabaseKeys.Matplotlib,
      SkillDatabaseKeys.Seaborn,
      SkillDatabaseKeys.Jupyter,
    ],
  },

  [SkillDatabaseKeys.APIs]: {
    name: "APIs",
    category: SkillCategoriesEnum.CommunicationProtocolsLibraries,
    isMainSkill: false,
    skillType: SkillTypesEnum.Technical,
    relatedSkills: [
      SkillDatabaseKeys.REST,
      //
      SkillDatabaseKeys.TRPC,
      SkillDatabaseKeys.ReplicateAI,
      SkillDatabaseKeys.OpenAI,
    ],
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
      //
      SkillDatabaseKeys.Convex,
    ],
  },
  [SkillDatabaseKeys.WebSockets]: {
    name: "Web Sockets",
    category: SkillCategoriesEnum.CommunicationProtocolsLibraries,
    isMainSkill: false,
    skillType: SkillTypesEnum.Technical,
    relatedSkills: [],
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
      SkillDatabaseKeys.Convex,
    ],
  },

  [SkillDatabaseKeys.Testing]: {
    name: "Testing",
    category: SkillCategoriesEnum.Testing,
    isMainSkill: false,
    skillType: SkillTypesEnum.Technical,
    relatedSkills: [
      SkillDatabaseKeys.Jest,

      SkillDatabaseKeys.UnitTest,
      SkillDatabaseKeys.JUnit,

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
    isMainSkill: false,
    skillType: SkillTypesEnum.Technical,
    relatedSkills: [
      SkillDatabaseKeys.DatabaseIndexing,
      SkillDatabaseKeys.RelationalDatabases,
      SkillDatabaseKeys.NonRelationalDatabases,

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

      SkillDatabaseKeys.Convex,
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
      SkillDatabaseKeys.TRPC,
      SkillDatabaseKeys.WebSockets,
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
