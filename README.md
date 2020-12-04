## Types
- **Object Types**: defined data model
- **Resolver Types**: define how query and mutation fetch and update data based on object types.
### Type Definition
- ID, Int, Float, String, Boolean, GraphQLISODateTime (Date is not built-in type for apollo)
- Enum and custom
### Apollo Federation
- To separate a monolith graph into microservices, but you still want provide one data access point, use [federation](https://www.apollographql.com/blog/apollo-federation-f260cf525d21/)
<p align="center"><img style="display: block; width: 600px; margin: 0 auto;" src=img/2020-12-05-00-32-16.png alt="no image found"></p>

- **Schema Stitching** is a history, don't use it.
- **Schema Composition** (using `directives`): standard way for federation
  - **GraphQL Service**
  - **Account Service** (`Cognito`)
  - **Data Service**: RESTful API with Mongodb
- **microservice**: Microservices should be seperated by **concerns**, not `types`.

### Problems
- How to solve n+1 problem in GraphQ?
  - `Data Loader` 
### Resources
- [How to GraphQL](https://www.howtographql.com/basics/3-big-picture/)
- [Apollo Federation - A revolutionary architecture for building a distributed graph](https://www.youtube.com/watch?v=lRI0HfXBAm8&list=PLE8UH9yEJFs6xzS4u_NZHpq2KBWAy0DcU&index=604)
- [Principal GraphQL: GraphQL Best Practices](https://principledgraphql.com/integrity)
- [Nexus: nest underlying lib to generate schema from code](https://nexusjs.org/)
- [Prisma: type-safe relational database ORM](https://www.prisma.io/docs/concepts/more/comparisons/prisma-and-typeorm#api-comparison)