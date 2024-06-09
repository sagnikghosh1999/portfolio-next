/**
 * This enum is used to store the keys of the roles in the database.
 * This enum is used to avoid hardcoding the keys in the code, getting autocompletion support and avoiding typos.
 * The strings correspond to location of the markdown files in the blog folder at `public/roles/`.
 * Whenever a new role is added to the database, a new key should be added to this enum.
 *
 * @see {@link roleMap} at `database/roles.ts`
 */
enum RoleDatabaseKeys {
  ProgrammerAnalystTrainee = "programmer-analyst-trainee",
  ProgrammerAnalyst = "programmer-analyst",
}

export default RoleDatabaseKeys;
