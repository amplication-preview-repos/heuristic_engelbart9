import { SortOrder } from "../../util/SortOrder";

export type BlogViewOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
