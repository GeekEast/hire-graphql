import { ProtectedAPIBase } from '@app/common/rest/protected.api';
import { CreateCompanyInput } from '@app/modules/companies/dto/create-company.input';
import { ListCompanyInput } from './dto/list-company.input';

export class Company extends ProtectedAPIBase {
  async findById(id: string) {
    return await this.get(`/${id}`);
  }

  async vacancies(id: string) {
    const vs = await this.get(`/${id}/vacancies`);
    console.log(vs);
    return await this.get(`/${id}/vacancies`);
  }

  async createCompany(createCompanyInput: CreateCompanyInput) {
    const { name, address } = createCompanyInput;
    const company = await this.post(this.baseURL, {
      name,
      address,
    });
    return { ...company, id: company._id };
  }

  async findAll(listCompanyDto: ListCompanyInput) {
    const companies = await this.get(this.baseURL, {
      limit: listCompanyDto?.limit || 20,
      skip: listCompanyDto?.skip || 0,
    });
    return companies;
  }
}
