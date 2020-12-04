import { CreateVacancyInput } from './create-vacancy.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateVacancyInput extends PartialType(CreateVacancyInput) {
  @Field(() => Int)
  id: number;
}
