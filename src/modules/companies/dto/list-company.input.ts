import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class ListCompanyInput {
  @Field(() => Int, { nullable: true })
  skip: number;

  @Field(() => Int, { nullable: true })
  limit: number;
}
