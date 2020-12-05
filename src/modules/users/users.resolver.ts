import { Company } from '@app/modules/companies/entities/company.entity';
import { PaginateUserInput } from './dto/paginate-company.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import {
  Resolver,
  Query,
  Mutation,
  Args,
  Context,
  ID,
  ResolveField,
  Parent,
} from '@nestjs/graphql';

@Resolver(() => User)
export class UsersResolver {
  // ----------------- Query Resolver-------------------------
  @Query(() => User)
  async user(
    @Args('id', { type: () => ID }) id: string,
    @Context() { dataSources },
  ) {
    return await dataSources.userAPI.findById(id);
  }

  @Query(() => [User], { nullable: 'items' }) // type name will function name by default
  async users(
    @Args('paginateUserInput', { nullable: true })
    paginateUserInput: PaginateUserInput,
    @Context() { dataSources },
  ) {
    return await dataSources.userAPI.findAll(paginateUserInput);
  }

  //-----------------Query Field Resolver----------------------
  @ResolveField(() => Company, { nullable: true })
  async company(@Parent() User: User, @Context() { dataSources }) {
    const { id } = User;
    return await dataSources.companyAPI.findById(id);
  }

  // ----------------- Mutation Resolver-------------------------
  @Mutation(() => User)
  async updateUser(
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
    @Context() { dataSources },
  ) {
    return await dataSources.userAPI.updateUser(updateUserInput);
  }

  @Mutation(() => User, { nullable: true })
  async removeUser(
    @Args('id', { type: () => String }) id: string,
    @Context() { dataSources },
  ) {
    return await dataSources.userAPI.removeUser(id);
  }
}
