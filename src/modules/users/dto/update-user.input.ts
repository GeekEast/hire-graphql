import { CreateUserInput } from '@app/modules/auth/dto/signup.dto';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => ID)
  id: string;
}
