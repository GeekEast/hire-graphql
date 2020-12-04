import { User } from '@app/modules/users/entities/user.entity';
import { Vacancy } from '@app/modules/vacancies/entities/vacancy.entity';
import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Company {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  address: string;

  @Field(() => [Vacancy], { nullable: 'itemsAndList' })
  vacancies?: Vacancy[];

  @Field(() => [User], { nullable: 'itemsAndList' })
  users?: User[];
}
