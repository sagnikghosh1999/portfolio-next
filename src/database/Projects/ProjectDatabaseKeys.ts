/**
 * This enum is used to represent the keys of the projects in the database.
 * This enum is used to avoid hardcoding the keys in the code, getting autocompletion support and avoiding typos.
 * The strings correspond to location of the markdown files in the blog folder at `public/projects/`.
 * Whenever a new project is added to the database, a new key should be added to this enum.
 *
 * @see {@link projectMap} at `database/projects.ts`
 */
enum ProjectDatabaseKeys {
  //fullstack
  AirbnbClone = "airbnb-clone",
  FacebookClone = "facebook-clone",
  //frontend
  TeslaClone = "tesla-clone",
  TravelWebsite = "travel-website",
  ResumeBuilder = "resume-builder",
  MovieApp = "movie-app",
}

export default ProjectDatabaseKeys;
