import { ProtectedAPIBase } from '@app/common/rest/protected.api';
import { CreateCompanyInput } from '@app/modules/companies/dto/create-company.input';
import { PaginateCompanyInput } from './dto/paginate-company.input';
import { UpdateCompanyInput } from './dto/update-company.input';

export class Company extends ProtectedAPIBase {
  async findById(id: string) {
    return await this.get(`/${id}`);
  }

  async findAll(paginateCompanyInput: PaginateCompanyInput) {
    return await this.get(this.baseURL, { ...paginateCompanyInput });
  }

  async vacancies(id: string) {
    return await this.get(`/${id}/vacancies`);
  }

  async users(id: string) {
    return await this.get(`/${id}/users`);
  }

  async createCompany(createCompanyInput: CreateCompanyInput) {
    return await this.post(this.baseURL, { ...createCompanyInput });
  }

  async updateCompany(updateCompanyInput: UpdateCompanyInput) {
    return await this.patch(`/${updateCompanyInput.id}`, {
      ...updateCompanyInput,
    });
  }

  async removeCompany(id: string) {
    return await this.delete(`/${id}`);
  }
}
