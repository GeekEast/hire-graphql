import { User } from '@app/modules/users/entities/user.entity';
import { Vacancy } from '@app/modules/vacancies/entities/vacancy.entity';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class CreateCompanyResponse {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  address: string;

  @Field(() => [Vacancy], { nullable: 'itemsAndList' })
  vacancies?: Vacancy[];

  @Field(() => [User], { nullable: 'itemsAndList' })
  users?: User[];
}
