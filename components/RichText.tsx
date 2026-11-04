import type { ElementType } from "react";

type RichTextProps = {
  as?: ElementType;
  html: string;
  className?: string;
};

/** Renders inline markup from the repository's dictionaries; never pass user input. */
export function RichText({ as: Tag = "span", html, className }: RichTextProps) {
  return <Tag className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}
