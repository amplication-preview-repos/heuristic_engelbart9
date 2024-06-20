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
import { BlogViewWhereInput } from "./BlogViewWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { BlogViewOrderByInput } from "./BlogViewOrderByInput";

@ArgsType()
class BlogViewFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BlogViewWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => BlogViewWhereInput, { nullable: true })
  @Type(() => BlogViewWhereInput)
  where?: BlogViewWhereInput;

  @ApiProperty({
    required: false,
    type: [BlogViewOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [BlogViewOrderByInput], { nullable: true })
  @Type(() => BlogViewOrderByInput)
  orderBy?: Array<BlogViewOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { BlogViewFindManyArgs as BlogViewFindManyArgs };
