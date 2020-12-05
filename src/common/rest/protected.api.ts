import { get } from 'lodash';
import { RequestOptions } from 'apollo-datasource-rest';
import { UnProtectedAPIBase } from './unprotected.api';

export class ProtectedAPIBase extends UnProtectedAPIBase {
  willSendRequest(request: RequestOptions) {
    const bear_token = get(
      this.context,
      ['req', 'headers', 'authorization'],
      '',
    );
    request.headers.set('Authorization', bear_token);
  }
}
