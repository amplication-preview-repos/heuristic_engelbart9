import { BlogView as TBlogView } from "../api/blogView/BlogView";

export const BLOGVIEW_TITLE_FIELD = "id";

export const BlogViewTitle = (record: TBlogView): string => {
  return record.id?.toString() || String(record.id);
};
