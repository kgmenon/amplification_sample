import { SortOrder } from "../../util/SortOrder";

export type EmployeeOrderByInput = {
  createdAt?: SortOrder;
  dateOfBirth?: SortOrder;
  empName?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
