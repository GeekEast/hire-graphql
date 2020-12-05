import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class SignupUserInput {
  @Field(() => String)
  username: string;

  @Field(() => String)
  password: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  confirmed_password: string;

  @Field(() => String, { nullable: true })
  companyId: string;
}
