import { Company } from '../companies/entities/company.entity';
import { CreateVacancyInput } from './dto/create-vacancy.input';
import { PaginateVacancyInput } from './dto/paginate-vacancy.inpu';
import { UpdateVacancyInput } from './dto/update-vacancy.input';
import { Vacancy } from './entities/vacancy.entity';
import {
  Resolver,
  Query,
  Mutation,
  Args,
  ID,
  Context,
  ResolveField,
  Parent,
} from '@nestjs/graphql';

@Resolver(() => Vacancy)
export class VacanciesResolver {
  // ----------------- Query Resolver-------------------------
  @Query(() => Vacancy)
  async vacancy(
    @Args('id', { type: () => ID }) id: string,
    @Context() { dataSources },
  ) {
    return await dataSources.vacancyAPI.findById(id);
  }

  @Query(() => [Vacancy], { nullable: 'items' }) // type name will function name by default
  async vacancies(
    @Args('paginateVacancyInput', { nullable: true })
    paginateVacancyInput: PaginateVacancyInput,
    @Context() { dataSources },
  ) {
    return await dataSources.vacancyAPI.findAll(paginateVacancyInput);
  }

  //-----------------Query Field Resolver----------------------
  @ResolveField(() => Company, { nullable: true })
  async company(@Parent() vacancy: Vacancy, @Context() { dataSources }) {
    return await dataSources.vacancyAPI.company(vacancy.id);
  }

  // ----------------- Mutation Resolver-------------------------
  @Mutation(() => Vacancy, { name: 'createVacancy' })
  async createVacancy(
    @Args('createVacancyInput') createVacancyInput: CreateVacancyInput,
    @Context() { dataSources },
  ) {
    return await dataSources.vacancyAPI.createVacancy(createVacancyInput);
  }

  @Mutation(() => Vacancy)
  async updateVacancy(
    @Args('updateVacancyInput') updateVacancyInput: UpdateVacancyInput,
    @Context() { dataSources },
  ) {
    return await dataSources.vacancyAPI.updateVacancy(updateVacancyInput);
  }

  @Mutation(() => Vacancy, { nullable: true })
  async removeVacancy(
    @Args('id', { type: () => String }) id: string,
    @Context() { dataSources },
  ) {
    return await dataSources.vacancyAPI.removeVacancy(id);
  }
}
