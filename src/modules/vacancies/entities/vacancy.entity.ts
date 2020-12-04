import { Company } from '@app/modules/companies/entities/company.entity';
import { ObjectType, Field, ID, GraphQLISODateTime } from '@nestjs/graphql';

@ObjectType()
export class Vacancy {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  title: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => GraphQLISODateTime)
  expiredAt: Date;

  @Field(() => Company, { nullable: true })
  company?: Company;
}
