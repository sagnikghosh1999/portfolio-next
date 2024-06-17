import addCompanyThumbnail from "@/actions/material/experience/addCompanyThumbnail";
import RoleDatabaseKeys from "@/database/Roles/RoleDatabaseKeys";
import CompanyInterface from "@/database/Companies/CompanyInterface";
import CompanyDatabaseKeys from "./CompanyDatabaseKeys";

const companiesMap: Database<CompanyInterface> = {
  [CompanyDatabaseKeys.Cognizant]: {
    name: "Cognizant Technology Solutions",
    location: "London, UK",
    website: "https://www.cognizant.com/",
    positions: [RoleDatabaseKeys.ProgrammerAnalyst],
    logo: addCompanyThumbnail(CompanyDatabaseKeys.Cognizant),
  },
};

/**
 * List of keys for the companies which uniquely identify them.
 */
export const companyDatabaseKeys = Object.keys(
  companiesMap
) as CompanyDatabaseKeys[];

/**
 * Database of companies I have worked at.
 * Each of these companies can have one or more roles.
 */
const companyDatabaseMap: Database<CompanyInterface> = companiesMap;
export default companyDatabaseMap;
