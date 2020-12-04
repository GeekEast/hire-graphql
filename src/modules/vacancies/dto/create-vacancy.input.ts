import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateVacancyInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
