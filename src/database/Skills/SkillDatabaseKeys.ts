/**
 * This enum is used to represent the keys of the skills in the database.
 * This enum is used to avoid hardcoding the keys in the code, getting autocompletion support and avoiding typos.
 * These keys are used within MaterialInterface and its children to represents skills associated with the material.
 *
 * @see {@link skillDatabaseMap} at `interfaces/skills.ts`
 */
enum SkillDatabaseKeys {
  //^ Languages
  JavaScript = "javascript",
  TypeScript = "typescript",
  Python = "python",
  SQL = "sql",
  Scala = "scala",
  Java = "java",
  C = "c",
  ObjectOrientedProgramming = "oop",
  FunctionalProgramming = "fp",

  //^ APIs
  REST = "rest-api",
  OpenAI = "open-ai",
  APIs = "apis",
  // GraphQL = "graphql-api",
  // TRPC = "trpc-api",
  // SocketIO = "socket-io",
  // ReplicateAI = "replicate-ai",
  // SDKs = "sdks",

  //^ Backend Web Development
  Firebase = "firebase",
  Auth0 = "auth0",
  ClerkAuth = "clerk-auth",
  NextAuth = "next-auth",
  Stripe = "stripe",
  ExpressJS = "express-js",
  Cloudinary = "cloudinary",
  UserAuthentication = "user-authentication",
  // WebSockets = "web-sockets",

  //^ Full Stack Web Development
  NextJS = "next-js",

  //^ Frontend Web Development
  ReactJS = "react",
  HTML = "html",
  CSS = "css",
  Redux = "redux",
  TailwindCSS = "tailwind-css",
  Bootstrap = "bootstrap",
  ShadcnUI = "shadcn-ui",
  NextUI = "next-ui",
  RadixUI = "radix-ui",
  ReactQuery = "react-query",
  HeadlessUI = "headless-ui",
  MaterialUI = "material-ui",
  AntDesign = "ant-design",
  Axios = "axios",
  StateManagement = "state-management",
  Zustand = "zustand",

  //^ Database
  PostgreSQL = "postgresql",
  MySQL = "mysql",
  SQLite = "sqlite",
  MongoDB = "mongodb",
  Databases = "databases",
  RelationalDatabases = "relational-databases",
  NonRelationalDatabases = "non-relational-databases",
  DatabaseManagementSystems = "database-management-systems",
  DatabaseIndexing = "indexing",
  // Convex = "convex",
  // Redis = "redis",

  //^ Object-Relational Mappers
  Mongoose = "moongose",
  Prisma = "prisma",
  Drizzle = "drizzle",
  // SQLAlchemy = "sqlalchemy",

  //^ DevOps
  GitLabCI = "gitlab-ci",
  Jenkins = "jenkins",
  ContinuousIntegration = "continuous-integration",
  ContinuousDeployment = "continuous-deployment",
  ContinuousDelivery = "continuous-delivery",
  InfrastructureAsCode = "infrastructure-as-code",
  // Automation = "automation",
  // GitHubActions = "github-actions",

  //^ Version Control Systems
  Git = "git",
  GitHub = "github",
  GitLab = "gitlab",
  VersionControlSystems = "version-control-systems",

  //^ Code Quality
  Zod = "zod",
  Prettier = "prettier",
  ESLint = "eslint",
  Linting = "linting",
  DesignPatterns = "design-patterns",

  //^ Testing
  Jest = "jest",
  ReactTestingLibrary = "react-testing-library",
  Testing = "testing",
  // UnitTest = "unittest",
  // JUnit = "junit",

  //^ Project and Dependency Management
  NPM = "npm",
  Yarn = "yarn",
  PNPM = "pnpm",
  Pip = "pip",
  Bun = "bun",

  //^ Data Engineering
  Pandas = "pandas",
  NumPy = "numpy",
  Jupyter = "jupyter",
  DataEngineering = "data-engineering",
  DataIngestion = "data-ingestion",
  DataFrame = "data-frame",
  ApacheSpark = "apache-spark",
  // Matplotlib = "matplotlib",
  // Seaborn = "seaborn",

  //^ Mathematics
  Probability = "probability",
  Statistics = "statistics",
  Calculus = "calculus",
  Trigonometry = "trigonometry",
  Algebra = "algebra",
  LinearAlgebra = "linear-algebra",
  Discrete = "discrete",
  Geometry = "geometry",
  Mechanics = "mechanics",
  Logics = "logics",
  Mathematics = "mathematics",

  //^ Cloud Computing
  Azure = "azure",
  Azure_AppService = "azure-app-service",
  Azure_Monitor = "azure-monitor",
  Azure_BlobStorage = "azure-blob-storage",
  Azure_Datalake = "azure-datalake",
  Azure_Functions = "azure-functions",
  Azure_ResourceManager = "azure-resource-manager",
  Azure_CosmosDB = "azure-cosmosdb",
  Azure_SQLWarehouse = "azure-sql-warehouse",
  Azure_DataFactory = "azure-data-factory",
  Azure_Databricks = "azure-databricks",

  //^ Algorithms & Data Structures
  Algorithms = "algorithms",
  DataStructures = "data-structures",

  //^ Platform Development
  WebDevelopment = "web",

  //^ Soft Skills
  Communication = "communication",
  ProjectManagement = "project-management",
  Teamwork = "teamwork",
  Leadership = "leadership",
  ProblemSolving = "problem-solving",
  CriticalThinking = "critical-thinking",
  Creativity = "creativity",
  Adaptability = "adaptability",
  TimeManagement = "time-management",
  RiskManagement = "risk-management",
  StakeholderManagement = "stakeholder-management",
  ScopeManagement = "scope-management",
  CostManagement = "cost-management",
  QualityManagement = "quality-management",
  ProcurementManagement = "procurement-management",
  IntegrationManagement = "integration-management",
  HumanResourceManagement = "human-resource-management",
}

export default SkillDatabaseKeys;
