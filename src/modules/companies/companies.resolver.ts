import { Company } from './entities/company.entity';
import { CreateCompanyInput } from './dto/create-company.input';
import { PaginateCompanyInput } from './dto/paginate-company.input';
import { UpdateCompanyInput } from './dto/update-company.input';
import { User } from '@app/modules/users/entities/user.entity';
import { Vacancy } from '@app/modules/vacancies/entities/vacancy.entity';
import {
  Args,
  Context,
  ID,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';

@Resolver(() => Company)
export class CompaniesResolver {
  // ----------------- Query Resolver-------------------------
  @Query(() => Company)
  async company(
    @Args('id', { type: () => ID }) id: string,
    @Context() { dataSources },
  ) {
    return await dataSources.companyAPI.findById(id);
  }

  @Query(() => [Company], { nullable: 'items' }) // type name will function name by default
  async companies(
    @Args('paginateCompanyInput', { nullable: true })
    paginateCompanyInput: PaginateCompanyInput,
    @Context() { dataSources },
  ) {
    return await dataSources.companyAPI.findAll(paginateCompanyInput);
  }

  //-----------------Query Field Resolver----------------------
  @ResolveField(() => [Vacancy], { nullable: 'items' })
  async vacancies(@Parent() company: Company, @Context() { dataSources }) {
    const { id } = company;
    return await dataSources.companyAPI.vacancies(id);
  }

  @ResolveField(() => [User], { nullable: 'items' })
  async users(@Parent() company: Company, @Context() { dataSources }) {
    const { id } = company;
    return await dataSources.companyAPI.users(id);
  }

  // ----------------- Mutation Resolver-------------------------
  @Mutation(() => Company, { name: 'createCompany' })
  async createCompany(
    @Args('createCompanyInput') createCompanyInput: CreateCompanyInput,
    @Context() { dataSources },
  ) {
    return await dataSources.companyAPI.createCompany(createCompanyInput);
  }

  @Mutation(() => Company)
  async updateCompany(
    @Args('updateCompanyInput') updateCompanyInput: UpdateCompanyInput,
    @Context() { dataSources },
  ) {
    return await dataSources.companyAPI.updateCompany(updateCompanyInput);
  }

  @Mutation(() => Company, { nullable: true })
  async removeCompany(
    @Args('id', { type: () => String }) id: string,
    @Context() { dataSources },
  ) {
    return await dataSources.companyAPI.removeCompany(id);
  }
}
