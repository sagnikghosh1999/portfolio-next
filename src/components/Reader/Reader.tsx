import Markdown from "markdown-to-jsx";
import React from "react";

type ReaderProps = {
  content: string | undefined;
  //! just giving the size without prose does not work
  size?: "lg:prose-sm" | "lg:prose-base" | "lg:prose-md" | "lg:prose-lg";
};

/**
 * Renders Markdown content into HTML so that it can be displayed on the page.
 * The markdown content is displayed in a reader-friendly format similar to how Markdown readers display content.
 *
 * @param content Markdown content to render
 * @param size Size of the text in the reader
 * @returns Rendered Markdown content
 */
const Reader: React.FC<ReaderProps> = ({ content, size = "lg" }) => {
  return (
    <article
      className={`
        prose
        ${size}
        dark:prose-invert
        prose-img:rounded-lg
        max-w-none
      prose-pre:bg-gray-200 
      prose-pre:dark:bg-gray-800 
      prose-pre:text-gray-800 
      prose-pre:dark:text-gray-200 
        prose-thead:text-left
        prose-table:overflow-x-auto
        prose-pre:transition-all 
        prose-pre:duration-500 
        prose-pre:ease-in-out
      `}
    >
      {content && <Markdown>{content}</Markdown>}
    </article>
  );
};

export default Reader;
