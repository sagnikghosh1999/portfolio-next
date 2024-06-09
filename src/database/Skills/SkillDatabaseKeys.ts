/**
 * This enum is used to represent the keys of the skills in the database.
 * This enum is used to avoid hardcoding the keys in the code, getting autocompletion support and avoiding typos.
 * These keys are used within MaterialInterface and its children to represents skills associated with the material.
 *
 * @see {@link skillDatabaseMap} at `interfaces/skills.ts`
 */
enum SkillDatabaseKeys {
  //^ Languages
  Python = "python",
  JavaScript = "javascript",
  TypeScript = "typescript",
  Java = "java",
  C = "c",
  Scala = "scala",
  ObjectOrientedProgramming = "oop",
  FunctionalProgramming = "fp",

  //^ APIs
  REST = "rest-api",
  // GraphQL = "graphql-api",
  TRPC = "trpc-api",
  // SocketIO = "socket-io",
  OpenAI = "open-ai",
  ReplicateAI = "replicate-ai",
  APIs = "apis",
  // SDKs = "sdks",

  //^ Backend Web Development
  Firebase = "firebase",
  Auth0 = "auth0",
  ClerkAuth = "clerk-auth",
  NextAuth = "next-auth",
  Stripe = "stripe",
  ExpressJS = "express-js",
  Cloudinary = "cloudinary",
  WebSockets = "web-sockets",
  UserAuthentication = "user-authentication",

  //^ Full Stack Web Development
  NextJS = "next-js",

  //^ Frontend Web Development
  ReactJS = "react",
  Zustand = "zustand",
  Redux = "redux",
  TailwindCSS = "tailwind-css",
  HTML = "html",
  CSS = "css",
  HeadlessUI = "headless-ui",
  ShadcnUI = "shadcn-ui",
  RadixUI = "radix-ui",
  ReactQuery = "react-query",
  NextUI = "next-ui",
  Bootstrap = "bootstrap",
  MaterialUI = "material-ui",
  AntDesign = "ant-design",
  SimpleGUI = "simple-gui",
  Axios = "axios",
  StateManagement = "state-management",

  //^ Database
  PostgreSQL = "postgresql",
  MySQL = "mysql",
  SQLite = "sqlite",
  MongoDB = "mongodb",
  // Redis = "redis",
  Convex = "convex",
  Databases = "databases",
  RelationalDatabases = "relational-databases",
  NonRelationalDatabases = "non-relational-databases",
  DatabaseManagementSystems = "database-management-systems",
  DatabaseIndexing = "indexing",

  //^ Object-Relational Mappers
  Mongoose = "moongose",
  Prisma = "prisma",
  Drizzle = "drizzle",
  // SQLAlchemy = "sqlalchemy",

  //^ DevOps
  GitHubActions = "github-actions",
  GitLabCI = "gitlab-ci",
  Jenkins = "jenkins",
  ContinuousIntegration = "continuous-integration",
  ContinuousDeployment = "continuous-deployment",
  ContinuousDelivery = "continuous-delivery",
  InfrastructureAsCode = "infrastructure-as-code",
  Automation = "automation",

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
  UnitTest = "unittest",
  JUnit = "junit",
  ReactTestingLibrary = "react-testing-library",
  Testing = "testing",

  //^ Project and Dependency Management
  NPM = "npm",
  Yarn = "yarn",
  PNPM = "pnpm",
  Pip = "pip",
  Bun = "bun",

  //^ Artificial Intelligence, Machine Learning, and Data Science
  Pandas = "pandas",
  NumPy = "numpy",
  Matplotlib = "matplotlib",
  Seaborn = "seaborn",
  Jupyter = "jupyter",
  ArtificialIntelligence = "artificial-intelligence",
  DataEngineering = "data-engineering",

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
  AWS = "aws",
  AWS_CloudWatch = "aws-cloudwatch",
  AWS_ApplicationLoadBalancer = "aws-application-load-balancer",
  AWS_ElasticCache = "aws-elastic-cache",
  AWS_K3s = "aws-k3s",
  AWS_EC2 = "aws-ec2",
  AWS_S3 = "aws-s3",
  AWS_VPC = "aws-vpc",
  AWS_Lambda = "aws-lambda",
  AWS_ElasticFileSystem = "aws-elastic-filesystem",
  AWS_ElasticBlockStore = "aws-elastic-block-store",
  AWS_RelationalDatabaseService = "aws-relational-database-service",
  AWS_AutoScaling = "aws-auto-scaling",
  AWS_CloudFormation = "aws-cloudformation",
  AWS_CloudFront = "aws-cloudfront",
  AWS_ElasticBeanstalk = "aws-elastic-beanstalk",
  Azure = "azure",
  Azure_AppService = "azure-app-service",
  Azure_Monitor = "azure-monitor",
  Azure_BlobStorage = "azure-blob-storage",
  Azure_DurableFunctions = "azure-durable-functions",
  Azure_Functions = "azure-functions",
  Azure_ResourceManager = "azure-resource-manager",
  Azure_ContainerRegistry = "azure-container-registry",

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
