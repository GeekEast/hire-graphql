// import { Role } from '@app/types/enums/Role.enum';
import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  username: string;

  // TODO: user ENUM to replace string type
  @Field(() => String)
  role: string;
}
