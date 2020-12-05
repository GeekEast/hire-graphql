import { ListCompanyInput } from './../modules/companies/dto/list-company.input';
import { CreateCompanyInput } from '@app/modules/companies/dto/create-company.input';
import { ProtectedAPIBase } from './protected.api';

export class DataAPI extends ProtectedAPIBase {
  constructor(baseURL: string) {
    super();
    this.baseURL = baseURL + '/companies';
  }

  async createCompany(createCompanyInput: CreateCompanyInput) {
    const { name, address } = createCompanyInput;
    const company = await this.post(this.baseURL, {
      name,
      address,
    });
    return { ...company, id: company._id };
  }

  async listCompanies(listCompanyDto: ListCompanyInput) {
    const companies = await this.get(this.baseURL, {
      limit: listCompanyDto?.limit || 20,
      skip: listCompanyDto?.skip || 0,
    });
    return companies;
  }
}
