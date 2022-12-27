import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type EmployeeWhereInput = {
  dateOfBirth?: DateTimeNullableFilter;
  empName?: StringNullableFilter;
  id?: StringFilter;
};
