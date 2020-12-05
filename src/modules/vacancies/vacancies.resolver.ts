import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Vacancy } from './entities/vacancy.entity';
import { CreateVacancyInput } from './dto/create-vacancy.input';
import { UpdateVacancyInput } from './dto/update-vacancy.input';

@Resolver(() => Vacancy)
export class VacanciesResolver {
  @Mutation(() => Vacancy)
  // create
  createVacancy(
    @Args('createVacancyInput') createVacancyInput: CreateVacancyInput,
  ) {
    return '';
  }

  // index
  @Query(() => [Vacancy], { name: 'vacancies' })
  findAll() {
    return '';
  }

  // show
  @Query(() => Vacancy, { name: 'vacancy' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return '';
  }

  // update
  @Mutation(() => Vacancy)
  updateVacancy(
    @Args('updateVacancyInput') updateVacancyInput: UpdateVacancyInput,
  ) {
    return '';
  }

  // delte
  @Mutation(() => Vacancy)
  removeVacancy(@Args('id', { type: () => Int }) id: number) {
    return '';
  }

  //------------- field resolver ----------------
}
