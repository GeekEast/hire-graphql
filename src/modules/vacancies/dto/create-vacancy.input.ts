import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateVacancyInput {
  @Field(() => String)
  title: string;

  @Field(() => String, { nullable: true })
  description: string;

  @Field(() => String)
  expiredAt: Date;

  @Field(() => String)
  company_id: string;
}
