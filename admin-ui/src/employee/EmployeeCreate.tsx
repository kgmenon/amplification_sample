import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const EmployeeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="DateOfBirth" source="dateOfBirth" />
        <TextInput label="EmpName" source="empName" />
      </SimpleForm>
    </Create>
  );
};
