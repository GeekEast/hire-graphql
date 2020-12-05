import { Module } from '@nestjs/common';
import { VacanciesResolver } from './vacancies.resolver';

@Module({
  providers: [VacanciesResolver],
})
export class VacanciesModule {}
