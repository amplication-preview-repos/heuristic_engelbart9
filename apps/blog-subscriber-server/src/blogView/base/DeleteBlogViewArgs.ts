/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BlogViewWhereUniqueInput } from "./BlogViewWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteBlogViewArgs {
  @ApiProperty({
    required: true,
    type: () => BlogViewWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BlogViewWhereUniqueInput)
  @Field(() => BlogViewWhereUniqueInput, { nullable: false })
  where!: BlogViewWhereUniqueInput;
}

export { DeleteBlogViewArgs as DeleteBlogViewArgs };
