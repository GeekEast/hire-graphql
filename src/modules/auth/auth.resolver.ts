import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { LoginResponse } from './entities/login.entity';
import { LoginUserInput } from './dto/login.dto';
import { SignUpResponse } from './entities/signup.entity';
import { SignupUserInput } from './dto/signup.dto';

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
    @Args('signupUserInput') signupUserInput: SignupUserInput,
    @Context() { dataSources }: any,
  ) {
    return await dataSources.authAPI.signup(signupUserInput);
  }
}
