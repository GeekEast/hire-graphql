import { registerEnumType } from '@nestjs/graphql';

export enum Role {
  user,
  admin,
}

registerEnumType(Role, {
  name: 'Role',
  description: 'Different roles',
  valuesMap: {
    user: { description: 'default role for new user, have limited access' },
    admin: { description: 'super user have all access' },
  },
});
