import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class LoginUserInput {
  @Field(() => ID)
  username: string;

  @Field(() => String)
  password: string;
}
