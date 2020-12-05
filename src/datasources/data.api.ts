import { CreateCompanyInput } from '@app/modules/companies/dto/create-company.input';
import { RESTDataSource } from 'apollo-datasource-rest';
import _ from 'lodash';
export class DataAPI extends RESTDataSource {
  constructor(baseURL: string) {
    super();
    this.baseURL = baseURL;
  }

  async createCompany(createCompanyInput: CreateCompanyInput) {
    const { name, address } = createCompanyInput;
    const company = await this.post(`${this.baseURL}/companies`, {
      name,
      address,
    });
    return { ...company, id: company._id };
  }

  willSendRequest(request: any) {
    const bear_token = _.get(
      this.context,
      ['req', 'headers', 'authorization'],
      '',
    );
    request.headers.set('Authorization', bear_token);
  }
}
