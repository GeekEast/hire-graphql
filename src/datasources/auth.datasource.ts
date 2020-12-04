import { RemoteGraphQLDataSource } from '@apollo/gateway';

class AuthenticatedDataSource extends RemoteGraphQLDataSource {
  async willSendRequest({ request, context }) {
    // const { userId } = await decode(context.jwt);
    // request.http.headers.set('x-user-id', userId);
  }
}
