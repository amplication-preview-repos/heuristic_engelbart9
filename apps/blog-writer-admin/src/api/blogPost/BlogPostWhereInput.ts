import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type BlogPostWhereInput = {
  author?: StringNullableFilter;
  authorName?: StringNullableFilter;
  content?: StringNullableFilter;
  contentText?: StringNullableFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
  titleText?: StringNullableFilter;
};
