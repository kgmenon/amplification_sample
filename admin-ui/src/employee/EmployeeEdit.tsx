import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const EmployeeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="DateOfBirth" source="dateOfBirth" />
        <TextInput label="EmpName" source="empName" />
      </SimpleForm>
    </Edit>
  );
};
