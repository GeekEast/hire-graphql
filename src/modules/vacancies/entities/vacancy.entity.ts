import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Vacancy {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  title: string;

  @Field(() => String, { nullable: true })
  description: string;

  @Field(() => Date)
  expiredAt: Date;

  // company: Company;
}
