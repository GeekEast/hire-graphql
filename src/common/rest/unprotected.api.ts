import { Injectable } from '@nestjs/common';
import { RESTDataSource } from 'apollo-datasource-rest';
import urljoin from 'url-join';

@Injectable()
export class UnProtectedAPIBase extends RESTDataSource {
  constructor(baseUrl = '/') {
    super();
    this.baseURL = urljoin(
      `http://${process.env.API_HOST}:${process.env.API_PORT}` ||
        'http://localhost:3000', // TODO: better way with dependency injection
      baseUrl,
    );
  }
}
