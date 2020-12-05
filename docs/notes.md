### Types
- **Object Types**: defined data model
- **Resolver Types**: define how query and mutation fetch and update data based on object types.
### Type Definition
- ID, Int, Float, String, Boolean, GraphQLISODateTime (Date is not built-in type for apollo)
- Enum and custom


- if you define one fiedd as not nullable, it must return somthing back. other wise errors.
- if youd define one field as not nullbale, and it doesn't return something in you code logic, when the client request that data, it won't throw an error, simply because you don't request it.