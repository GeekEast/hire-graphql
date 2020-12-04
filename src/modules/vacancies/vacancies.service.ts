import { Injectable } from '@nestjs/common';
import { CreateVacancyInput } from './dto/create-vacancy.input';
import { UpdateVacancyInput } from './dto/update-vacancy.input';

@Injectable()
export class VacanciesService {
  create(createVacancyInput: CreateVacancyInput) {
    return 'This action adds a new vacancy';
  }

  findAll() {
    return `This action returns all vacancies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vacancy`;
  }

  update(id: number, updateVacancyInput: UpdateVacancyInput) {
    return `This action updates a #${id} vacancy`;
  }

  remove(id: number) {
    return `This action removes a #${id} vacancy`;
  }
}
