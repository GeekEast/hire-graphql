import { Vacancy } from '@app/modules/vacancies/entities/vacancy.entity';
import {
  Args,
  Context,
  ID,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Company } from './entities/company.entity';
import { CreateCompanyInput } from './dto/create-company.input';
import { ListCompanyInput } from './dto/list-company.input';
import { UpdateCompanyInput } from './dto/update-company.input';

@Resolver(() => Company)
export class CompaniesResolver {
  // ----------------- Query Resolver-------------------------
  // let's start from a show resolver
  @Query(() => Company)
  async company(
    @Args('id', { type: () => ID }) id: string,
    @Context() { dataSources },
  ) {
    return await dataSources.companyAPI.findById(id);
  }

  @ResolveField(() => [Vacancy], { nullable: 'items' })
  async vacancies(@Parent() company: Company) {
    const { id } = company;
  }

  // index
  @Query(() => [Company], { nullable: 'items' }) // type name will function name by default
  async companies(
    @Args('listCompanyInput', { nullable: true })
    listCompanyInput: ListCompanyInput,
    @Context() { dataSources },
  ) {
    return await dataSources.companyAPI.findAll(listCompanyInput);
  }

  // ----------------- Mutation Resolver-------------------------

  @Mutation(() => Company, { name: 'createCompany' })
  async createCompany(
    @Args('createCompanyInput') createCompanyInput: CreateCompanyInput,
    @Context() { dataSources },
  ) {
    return await dataSources.dataAPI.createCompany(createCompanyInput);
  }

  @Mutation(() => Company)
  updateCompany(
    @Args('updateCompanyInput') updateCompanyInput: UpdateCompanyInput,
  ) {
    return '';
  }

  @Mutation(() => Company)
  removeCompany(@Args('id', { type: () => Int }) id: number) {
    return '';
  }
}
