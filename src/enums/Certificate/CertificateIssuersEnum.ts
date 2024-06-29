/**
 * This enum represents the issuers of the certificates that a user can have.
 * This enum is used to avoid hardcoding the issuers in the code, getting autocompletion support and avoiding typos.
 */
enum CertificateIssuersEnum {
  Udemy = "Udemy",
  HackerRank = "HackerRank",
  Microsoft = "Microsoft",
  Cognizant = "Cognizant",
  Databricks = "Databricks",
}

export default CertificateIssuersEnum;
