/**
 * This enum is used to represent the keys of the certificates in the database.
 * This enum is used to avoid hardcoding the keys in the code, getting autocompletion support and avoiding typos.
 * The strings correspond to location of the markdown files in the blog folder at `public/certificates/`.
 * Whenever a new certificate is added to the database, a new key should be added to this enum.
 *
 * @see {@link certificateMap} at `database/certificates.ts`
 */
enum CertificateDatabaseKeys {
  //^ Programming Languages
  HackerrankJavascriptBasic = "242ab0dcb035",
  HackerrankJavascriptIntermediate = "8fb04f20976f",

  //^ Algorithms and Data Structures

  //^ Web Development

  //^ Databases
  UdemyRelationalDatabaseDesign = "UC-ee0353de-bffd-4d1c-8a0a-115f9729193f",

  //^ Mathematics

  //^ Data Engineering
  CognizantPysparkIntermediate = "5ff38238-ebcf-471d-85c0-bc0fbd00f756",
  CognizantGenAIBasics = "013ba1b5-7f78-4902-98db-bb223a138b30",

  //^ Management

  //^ Cloud Computing
  AzureDataFundamentals = "884c294acfce5138",
  AzureDataEngineerAssociate = "f1a81750a7afb373",
  AzureFundamentals = "9893579dc8f2c222",
  AzureAdministratorAssociate = "e93a243c4ae783cd",
  AzureAIFundamentals = "ebc987627748d06e",
}

export default CertificateDatabaseKeys;
