import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { LoginResponse } from './entities/login.entity';
import { LoginUserInput } from './dto/login.dto';
import { SignUpResponse } from './entities/signup.entity';
import { CreateUserInput } from './dto/signup.dto';

@Resolver()
export class AuthResolver {
  @Mutation(() => LoginResponse)
  async login(
    @Args('loginUserInput') loginUserInput: LoginUserInput,
    @Context() { dataSources }: any,
  ) {
    return await dataSources.authAPI.signin(loginUserInput);
  }

  @Mutation(() => SignUpResponse)
  async signup(
    @Args('createUserInput') createUserInput: CreateUserInput,
    @Context() { dataSources }: any,
  ) {
    return await dataSources.authAPI.signup(createUserInput);
  }
}
