import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class PaginateCompanyInput {
  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => Int, { nullable: true })
  limit?: number;

  @Field(() => String, { nullable: true })
  sort?: string;
}
