import { Module } from '@nestjs/common';
import { VacanciesService } from './vacancies.service';
import { VacanciesResolver } from './vacancies.resolver';

@Module({
  providers: [VacanciesResolver, VacanciesService]
})
export class VacanciesModule {}
