/**
 * This enum is used to represent the keys of the blogs in the database.
 * This enum is used to avoid hardcoding the keys in the code, getting autocompletion support and avoiding typos.
 * The strings correspond to location of the markdown files in the blog folder at `public/blog/`.
 * Whenever a new blog is added to the database, a new key should be added to this enum.
 *
 * @see {@link blogMap} at `database/blogs.ts`
 */
enum BlogDatabaseKeys {
  Backend = "backend",
  Frontend = "front-end",
  JavaScriptVsTypeScript = "javascript-vs-typescript",
  ORM = "orm",
  RESTGraphQL = "rest-graphql-api",
  SDKvsAPI = "sdk-vs-api",
  SessionsVsTokens = "sessions-vs-tokens",
  SQLNOSQL = "sql-vs-nosql-databases",
  SyncAsync = "sync-vs-async",
}

export default BlogDatabaseKeys;
