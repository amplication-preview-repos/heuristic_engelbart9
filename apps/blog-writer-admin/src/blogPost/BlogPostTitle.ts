import { BlogPost as TBlogPost } from "../api/blogPost/BlogPost";

export const BLOGPOST_TITLE_FIELD = "authorName";

export const BlogPostTitle = (record: TBlogPost): string => {
  return record.authorName?.toString() || String(record.id);
};
