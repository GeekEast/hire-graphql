import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CompanyAPI } from './companies.service';
import { Company } from './entities/company.entity';
import { CreateCompanyInput } from './dto/create-company.input';
import { UpdateCompanyInput } from './dto/update-company.input';

@Resolver(() => Company)
export class CompaniesResolver {
  constructor(private readonly companyAPI: CompanyAPI) {}

  @Mutation(() => Company)
  createCompany(
    @Args('createCompanyInput') createCompanyInput: CreateCompanyInput,
  ) {
    return this.companyAPI.create(createCompanyInput);
  }

  @Query(() => [Company], { name: 'companies' })
  findAll() {
    return this.companyAPI.findAll();
  }

  @Query(() => Company, { name: 'company' })
  findOne(@Args('id', { type: () => Int }) id: string) {
    return this.companyAPI.findOne(id);
  }

  @Mutation(() => Company)
  updateCompany(
    @Args('updateCompanyInput') updateCompanyInput: UpdateCompanyInput,
  ) {
    return this.companyAPI.update(updateCompanyInput.id, updateCompanyInput);
  }

  @Mutation(() => Company)
  removeCompany(@Args('id', { type: () => Int }) id: number) {
    return this.companyAPI.remove(id);
  }
}
