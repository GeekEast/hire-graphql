import { LoginUserInput } from '@app/modules/auth/dto/login.dto';
import { SignupUserInput } from '@app/modules/auth/dto/signup.dto';
import { RESTDataSource } from 'apollo-datasource-rest';

export class AuthAPI extends RESTDataSource {
  constructor(baseURL: string) {
    super();
    this.baseURL = baseURL;
  }

  async login(loginUserInput: LoginUserInput) {
    return await this.post(`${this.baseURL}/signin`, loginUserInput);
  }

  async signup(signupUserInput: SignupUserInput) {
    return await this.post(`${this.baseURL}/signup`, {
      ...signupUserInput,
      company: signupUserInput.companyId,
    });
  }
}
