import { RESTDataSource } from 'apollo-datasource-rest';

export class DataAPI extends RESTDataSource {
  constructor(baseURL: string) {
    super();
    this.baseURL = baseURL;
  }
}
