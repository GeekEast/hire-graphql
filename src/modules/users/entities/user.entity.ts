import { Role } from '@app/types/enums/Role.enum';
import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  username: string;

  @Field(() => Role)
  role: string;

  // TODO: Need it for grapql?
  // @Field(() => String)
  // hashed_password: string;
}
