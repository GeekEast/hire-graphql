import { Injectable } from '@nestjs/common';
import { RESTDataSource } from 'apollo-datasource-rest';
import urljoin from 'url-join';

@Injectable()
export class UnProtectedAPIBase extends RESTDataSource {
  constructor(baseUrl = '/') {
    super();
    this.baseURL = urljoin(
      process.env.api_url || 'http://localhost:3000', // TODO: better way with dependency injection
      baseUrl,
    );
  }
}
