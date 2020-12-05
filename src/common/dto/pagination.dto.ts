import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class PaginateInput {
  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => Int, { nullable: true })
  limit?: number;

  // up to models
  @Field(() => String, { nullable: true })
  sort?: string;
}
