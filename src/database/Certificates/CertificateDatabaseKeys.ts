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

  //^ Algorithms and Data Structures

  //^ Artificial Intelligence

  //^ Web Development

  //^ Databases
  UdemyRelationalDatabaseDesign = "UC-ee0353de-bffd-4d1c-8a0a-115f9729193f",

  //^ Mathematics

  //^ Software Engineering

  //^ Management

  //^ Cloud Computing
  AzureDataFundamentals = "884c294acfce5138",
}

export default CertificateDatabaseKeys;
