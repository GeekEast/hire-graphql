import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Company } from './entities/company.entity';
import { CreateCompanyInput } from './dto/create-company.input';
import { ListCompanyInput } from './dto/list-company.input';
import { UpdateCompanyInput } from './dto/update-company.input';

@Resolver(() => Company)
export class CompaniesResolver {
  @Mutation(() => Company)
  async createCompany(
    @Args('createCompanyInput') createCompanyInput: CreateCompanyInput,
    @Context() { dataSources }: any,
  ) {
    return await dataSources.dataAPI.createCompany(createCompanyInput);
  }

  @Query(() => [Company], { name: 'companies' })
  findAll(
    @Args('listCompanyInput', { nullable: true })
    listCompanyInput: ListCompanyInput,
  ) {
    return '';
  }

  @Query(() => Company, { name: 'company' })
  findOne(@Args('id', { type: () => Int }) id: string) {
    return '';
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
