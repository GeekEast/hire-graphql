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
- **Subscription**: currently **not** supported in federated service
## Bricks
### Types
- **Object Types**: defined data model
- **Resolver Types**: define how query and mutation fetch and update data based on object types.
### Type Definition
- ID, Int, Float, String, Boolean, GraphQLISODateTime (Date is not built-in type for apollo)
- Enum and custom

## Project Plan
- Apollo Offical Starter Tutorial: especially about `auth`, `paginiation` and `subscription` implementation.
- Implement Apollo Starter project using Nest.js
- Build this project
  - Implement the GraphQL server on the Restful API.
  - Implement the GraphQL server on the Auth Service.
  - Implement the GraphQL gateway 
## Problems
- Build apollo server with Typescript failed the non-relative path. `So I switch to Nest.js, bit of overhead`
- How to solve `N+1` problem in GraphQL? - `Data Loader` 
## Resources
- [How to GraphQL: awesome tutorial to start learning graphql](https://www.howtographql.com/basics/3-big-picture/)
- [Apollo Federation - A revolutionary architecture for building a distributed graph](https://www.youtube.com/watch?v=lRI0HfXBAm8&list=PLE8UH9yEJFs6xzS4u_NZHpq2KBWAy0DcU&index=604)
- [Principal GraphQL: GraphQL Best Practices](https://principledgraphql.com/integrity)
- [Nexus: nest underlying lib to generate schema from code](https://nexusjs.org/)
- [Prisma: type-safe relational database ORM](https://www.prisma.io/docs/concepts/more/comparisons/prisma-and-typeorm#api-comparison)