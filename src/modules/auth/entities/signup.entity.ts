import { User } from '@app/modules/users/entities/user.entity';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SignUpResponse extends User {}
