import { SortOrder } from "../../util/SortOrder";

export type BlogPostOrderByInput = {
  author?: SortOrder;
  authorName?: SortOrder;
  content?: SortOrder;
  contentText?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  titleText?: SortOrder;
  updatedAt?: SortOrder;
};
