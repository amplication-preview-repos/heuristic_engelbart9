import { BlogViewWhereInput } from "./BlogViewWhereInput";
import { BlogViewOrderByInput } from "./BlogViewOrderByInput";

export type BlogViewFindManyArgs = {
  where?: BlogViewWhereInput;
  orderBy?: Array<BlogViewOrderByInput>;
  skip?: number;
  take?: number;
};
