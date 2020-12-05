import _ from 'lodash';
import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';

export class ProtectedAPIBase extends RESTDataSource {
  willSendRequest(request: RequestOptions) {
    const bear_token = _.get(
      this.context,
      ['req', 'headers', 'authorization'],
      '',
    );
    request.headers.set('Authorization', bear_token);
  }
}
