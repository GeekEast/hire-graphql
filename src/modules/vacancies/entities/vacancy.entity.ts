import { Company } from '@app/modules/companies/entities/company.entity';
import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Vacancy {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  title: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  expiredAt: string;

  @Field(() => Company, { nullable: true })
  company?: Company;
}
