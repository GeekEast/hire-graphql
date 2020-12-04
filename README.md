## Microservice Architecture
- To split a `monolith` graph into many **graphql** `microservices` with only one endpoint, use [federation](https://www.apollographql.com/blog/apollo-federation-f260cf525d21/)
<p align="center"><img style="display: block; width: 600px; margin: 0 auto;" src=img/2020-12-05-00-32-16.png alt="no image found"></p>

- **Schema Stitching** is a history, don't use it.
- **Schema Composition** (using `directives`): you should use this one instead.
  - **GraphQL Gateway**
  - **Account Service** (think about `Cognito`)
  - **Other Service**: for example, RESTful API with Mongodb
- **Microservice**: 
  - Microservices should be seperated by **concerns**, not `types`.
  - `Internal Network Protocol` can be switched to `tcp` or even `gRPC`.
- **Subscription**: currently **not** supported in Apollo Federation

## Project Plan
- Apollo Offical Starter Tutorial: especially about `auth`, `paginiation` and `subscription` implementation.
- Implement Apollo Starter project using `Nest.js`
- Build this project
  - Implement the GraphQL server on the Restful **API**.
  - Implement the GraphQL server on the **Auth** Service.
  - Implement the GraphQL **gateway** 
  - Workaround for **subscription** in current architecture.
## Issues
- Build apollo server with Typescript failed the non-relative path. - `I switch to Nest.js,out of box ts support`
- How to solve `N+1` problem in GraphQL? - `Data Loader` 
## Resources
- [Apollo Learning Notes on this project](/docs/notes.md)
- [How to GraphQL: awesome tutorial to start learning graphql](https://www.howtographql.com/basics/3-big-picture/)
- [Apollo Federation - A revolutionary architecture for building a distributed graph](https://www.youtube.com/watch?v=lRI0HfXBAm8&list=PLE8UH9yEJFs6xzS4u_NZHpq2KBWAy0DcU&index=604)
- [Principal GraphQL: GraphQL Best Practices](https://principledgraphql.com/integrity)
- [Nexus: nest underlying lib to generate schema from code](https://nexusjs.org/)
- [Prisma: type-safe relational database ORM](https://www.prisma.io/docs/concepts/more/comparisons/prisma-and-typeorm#api-comparison)
- [Github: Apollo Federation Demo](https://github.com/apollographql/federation-demo)