import addCompanyThumbnail from "@/actions/material/experience/addCompanyThumbnail";
import RoleDatabaseKeys from "@/database/Roles/RoleDatabaseKeys";
import CompanyInterface from "@/database/Companies/CompanyInterface";
import CompanyDatabaseKeys from "./CompanyDatabaseKeys";

const companiesMap: Database<CompanyInterface> = {
  [CompanyDatabaseKeys.ITCinfotech]: {
    name: "ITC Infotech",
    location: "Kolkata, India",
    website: "https://www.itcinfotech.com/",
    positions: [RoleDatabaseKeys.AssociateITConsultant],
    logo: addCompanyThumbnail(CompanyDatabaseKeys.ITCinfotech),
  },
  [CompanyDatabaseKeys.Cognizant]: {
    name: "Cognizant Technology Solutions",
    location: "Kolkata, India",
    website: "https://www.cognizant.com/",
    positions: [
      RoleDatabaseKeys.Associate,
      RoleDatabaseKeys.ProgrammerAnalyst,
      RoleDatabaseKeys.ProgrammerAnalystTrainee,
    ],
    logo: addCompanyThumbnail(CompanyDatabaseKeys.Cognizant),
  },
  [CompanyDatabaseKeys.DSP]: {
    name: "Durgapur Steel Plant",
    location: "Durgapur, India",
    website: "https://www.sail.co.in/en/plants/about-durgapur-steel-plant",
    positions: [RoleDatabaseKeys.Intern],
    logo: addCompanyThumbnail(CompanyDatabaseKeys.DSP),
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
 *  The order of the roles is important as it determines the order in which they are displayed.
 */
const companyDatabaseMap: Database<CompanyInterface> = companiesMap;
export default companyDatabaseMap;
