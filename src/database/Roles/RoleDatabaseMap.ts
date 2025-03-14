import CertificateDatabaseKeys from "@/database/Certificates/CertificateDatabaseKeys";
import RoleDatabaseKeys from "@/database/Roles/RoleDatabaseKeys";
import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import ExperienceCategoriesEnum from "@/enums/Experience/ExperienceCategoriesEnum";
import ExperienceTypeEnum from "@/enums/Experience/ExperienceTypeEnum";
import RoleInterface from "@/database/Roles/RoleInterface";
import CompanyDatabaseKeys from "../Companies/CompanyDatabaseKeys";

const rolesMap: Database<RoleInterface> = {
  [RoleDatabaseKeys.ProgrammerAnalyst]: {
    name: "Data Engineer, Programmer Analyst",
    category: ExperienceCategoriesEnum.Software,
    type: ExperienceTypeEnum.Professional,
    skills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.CSS,
      SkillDatabaseKeys.HTML,
      SkillDatabaseKeys.Java,
      SkillDatabaseKeys.ObjectOrientedProgramming,
      SkillDatabaseKeys.REST,
      SkillDatabaseKeys.Azure_Datalake,
      SkillDatabaseKeys.Azure_Databricks,
      SkillDatabaseKeys.Azure_SQLWarehouse,
      SkillDatabaseKeys.APIs,
      SkillDatabaseKeys.PostgreSQL,
      SkillDatabaseKeys.MongoDB,
      SkillDatabaseKeys.RelationalDatabases,
      SkillDatabaseKeys.NonRelationalDatabases,
      SkillDatabaseKeys.ContinuousDelivery,
      SkillDatabaseKeys.IntegrationManagement,
      SkillDatabaseKeys.ContinuousDeployment,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.Azure,
      SkillDatabaseKeys.Communication,
      SkillDatabaseKeys.Teamwork,
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.TimeManagement,
      SkillDatabaseKeys.RiskManagement,
      SkillDatabaseKeys.StakeholderManagement,
      SkillDatabaseKeys.ScopeManagement,
      SkillDatabaseKeys.QualityManagement,
    ],
    startDate: "September 2022",
    endDate: "Present",
    relatedMaterials: [
      CertificateDatabaseKeys.AzureDataFundamentals,
      CertificateDatabaseKeys.AzureFundamentals,
      CertificateDatabaseKeys.CognizantGenAIBasics,
      CertificateDatabaseKeys.CognizantPysparkIntermediate,
    ],
    company: CompanyDatabaseKeys.Cognizant,
  },
  [RoleDatabaseKeys.ProgrammerAnalystTrainee]: {
    name: "Programmer Analyst Trainee",
    category: ExperienceCategoriesEnum.Software,
    type: ExperienceTypeEnum.Professional,
    company: CompanyDatabaseKeys.Cognizant,
    startDate: "September 2021",
    endDate: "September 2022",
    skills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.Communication,
      SkillDatabaseKeys.Teamwork,
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.TimeManagement,
      SkillDatabaseKeys.RiskManagement,
      SkillDatabaseKeys.StakeholderManagement,
      SkillDatabaseKeys.ScopeManagement,
      SkillDatabaseKeys.QualityManagement,
    ],
  },
  [RoleDatabaseKeys.Intern]: {
    name: "Intern, Trainee",
    archived: true,
    category: ExperienceCategoriesEnum.Mechanical,
    type: ExperienceTypeEnum.Training,
    company: CompanyDatabaseKeys.DSP,
    startDate: "February 2020",
    endDate: "March 2020",
    skills: [
      SkillDatabaseKeys.Mechanics,
      SkillDatabaseKeys.Communication,
      SkillDatabaseKeys.Teamwork,
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.TimeManagement,
      SkillDatabaseKeys.RiskManagement,
      SkillDatabaseKeys.StakeholderManagement,
      SkillDatabaseKeys.ScopeManagement,
      SkillDatabaseKeys.QualityManagement,
    ],
  },
};

export const roleDatabaseKeys: RoleDatabaseKeys[] = Object.keys(
  rolesMap
) as RoleDatabaseKeys[];

const rolesDatabase: Database<RoleInterface> = rolesMap;

export default rolesDatabase;
