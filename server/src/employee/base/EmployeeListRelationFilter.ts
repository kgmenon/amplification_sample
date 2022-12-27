/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EmployeeWhereInput } from "./EmployeeWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class EmployeeListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => EmployeeWhereInput,
  })
  @ValidateNested()
  @Type(() => EmployeeWhereInput)
  @IsOptional()
  @Field(() => EmployeeWhereInput, {
    nullable: true,
  })
  every?: EmployeeWhereInput;

  @ApiProperty({
    required: false,
    type: () => EmployeeWhereInput,
  })
  @ValidateNested()
  @Type(() => EmployeeWhereInput)
  @IsOptional()
  @Field(() => EmployeeWhereInput, {
    nullable: true,
  })
  some?: EmployeeWhereInput;

  @ApiProperty({
    required: false,
    type: () => EmployeeWhereInput,
  })
  @ValidateNested()
  @Type(() => EmployeeWhereInput)
  @IsOptional()
  @Field(() => EmployeeWhereInput, {
    nullable: true,
  })
  none?: EmployeeWhereInput;
}
export { EmployeeListRelationFilter };
