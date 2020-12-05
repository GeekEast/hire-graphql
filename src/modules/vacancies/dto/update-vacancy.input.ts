import { CreateVacancyInput } from './create-vacancy.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateVacancyInput extends PartialType(CreateVacancyInput) {
  @Field(() => ID)
  id: string;
}
