import { ProtectedAPIBase } from '@app/common/rest/protected.api';
import { CreateVacancyInput } from './dto/create-vacancy.input';
import { PaginateVacancyInput } from './dto/paginate-vacancy.inpu';
import { UpdateVacancyInput } from './dto/update-vacancy.input';

export class Vacancy extends ProtectedAPIBase {
  async findById(id: string) {
    return await this.get(`/${id}`);
  }

  async findAll(paginateVacancyInput: PaginateVacancyInput) {
    return await this.get(this.baseURL, { ...paginateVacancyInput });
  }

  async company(id: string) {
    return await this.get(`/${id}/company`);
  }

  async createVacancy(createVacancyInput: CreateVacancyInput) {
    return await this.post(this.baseURL, { ...createVacancyInput });
  }

  async updateVacancy(updateVacancyInput: UpdateVacancyInput) {
    return await this.patch(`/${updateVacancyInput.id}`, {
      ...updateVacancyInput,
    });
  }

  async removeVacancy(id: string) {
    return await this.delete(`/${id}`);
  }
}
