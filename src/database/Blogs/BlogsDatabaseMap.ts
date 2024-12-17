import addNestedSkillsMaterialList from "@/actions/material/addNestedSkillsMaterialList";
import BlogCategoriesEnum from "@/enums/Blog/BlogCategoriesEnum";
import BlogDatabaseKeys from "@/database/Blogs/BlogDatabaseKeys";
import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import SkillTypesEnum from "@/enums/Skill/SkillTypesEnum";
import BlogInterface from "@/database/Blogs/BlogInterface";
import skillDatabaseMap from "../Skills/SkillDatabaseMap";
import SkillCategoriesEnum from "@/enums/Skill/SkillCategoriesEnum";

/**
 * Hashmap of blogs with keys as {@link BlogDatabaseKeys} and values as {@link BlogInterface}.
 * The order of the blogs is the order that is used when displaying the blogs on the website.
 * The order of the skills is the order that is used when displaying the skills on the website.
 */
const blogsMap: Database<BlogInterface> = {
  [BlogDatabaseKeys.JavaScriptStringMethods]: {
    name: "Mastering JavaScript String Methods: Practical Guide with Comparisons",
    subtitle:
      "JavaScript string methods are essential for text manipulation. This blog explores key methods like slice() and replace(), with practical examples and use cases to enhance your development skills effectively.",

    category: BlogCategoriesEnum.SoftwareEngineering,
    skills: [SkillDatabaseKeys.WebDevelopment, SkillDatabaseKeys.JavaScript],
  },
  [BlogDatabaseKeys.JavaScriptArrayMethods]: {
    name: "Mastering JavaScript Array Methods: A Complete Guide",
    subtitle:
      "JavaScript arrays are one of the most versatile and commonly used data structures. With the help of array methods, developers can efficiently manipulate and transform data to build complex applications. This blog explores the most important array methods, their practical uses, and comparisons to help you become a JavaScript array expert.",

    category: BlogCategoriesEnum.SoftwareEngineering,
    skills: [SkillDatabaseKeys.WebDevelopment, SkillDatabaseKeys.JavaScript],
  },
};

/**
 * List of keys for the blogs that can be used to uniquely identify the blogs.
 */
export const blogDatabaseKeys: BlogDatabaseKeys[] = Object.keys(
  blogsMap
) as BlogDatabaseKeys[];

/**
 * Hashmap of blogs with keys as {@link BlogDatabaseKeys} and values as {@link BlogInterface}.
 * The order of the blogs is the order that is used when displaying the blogs on the website.
 * The order of the skills is the order that is used when displaying the skills on the website.
 *
 * There are certain sub-skills for the skills that are directly listed under the skill objects within this hashmap.
 * For each of those skills, the sub-skill is added to the list of skills for the blog.
 * These sub-skills are specifically general skills related to the technologies but are not part of programming languages.
 * Programming languages have many sub-skills that are not directly related to the blogs above.
 */
const blogsDatabaseMap: Database<BlogInterface> =
  addNestedSkillsMaterialList<BlogInterface>(
    blogsMap,
    skillDatabaseMap,
    [SkillCategoriesEnum.ProgrammingLanguages],
    SkillTypesEnum.Technical,
    SkillTypesEnum.Technology
  );

export default blogsDatabaseMap;
