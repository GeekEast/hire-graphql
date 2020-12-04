import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { VacanciesService } from './vacancies.service';
import { Vacancy } from './entities/vacancy.entity';
import { CreateVacancyInput } from './dto/create-vacancy.input';
import { UpdateVacancyInput } from './dto/update-vacancy.input';

@Resolver(() => Vacancy)
export class VacanciesResolver {
  constructor(private readonly vacanciesService: VacanciesService) {}

  @Mutation(() => Vacancy)
  // create
  createVacancy(
    @Args('createVacancyInput') createVacancyInput: CreateVacancyInput,
  ) {
    return this.vacanciesService.create(createVacancyInput);
  }

  // index
  @Query(() => [Vacancy], { name: 'vacancies' })
  findAll() {
    return this.vacanciesService.findAll();
  }

  // show
  @Query(() => Vacancy, { name: 'vacancy' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.vacanciesService.findOne(id);
  }

  // update
  @Mutation(() => Vacancy)
  updateVacancy(
    @Args('updateVacancyInput') updateVacancyInput: UpdateVacancyInput,
  ) {
    return this.vacanciesService.update(
      updateVacancyInput.id,
      updateVacancyInput,
    );
  }

  // delte
  @Mutation(() => Vacancy)
  removeVacancy(@Args('id', { type: () => Int }) id: number) {
    return this.vacanciesService.remove(id);
  }

  //------------- field resolver ----------------
}
