import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class LoginResponse {
  @Field(() => String, { nullable: true })
  access_token: string;
}
