import { registerEnumType } from '@nestjs/graphql';

export enum Role {
  USER,
  ADMIN,
}

registerEnumType(Role, {
  name: 'Role',
  description: 'Different roles',
  valuesMap: {
    USER: { description: 'default role for new user, have limited access' },
    ADMIN: { description: 'super user have all access' },
  },
});
