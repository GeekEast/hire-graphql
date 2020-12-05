import { LoginUserInput } from '@app/modules/auth/dto/login.dto';
import { RESTDataSource } from 'apollo-datasource-rest';
import { SignupUserInput } from '@app/modules/auth/dto/signup.dto';

export class AuthAPI extends RESTDataSource {
  constructor(baseURL: string) {
    super();
    this.baseURL = baseURL;
  }

  async login(loginUserInput: LoginUserInput) {
    const username = String(loginUserInput.username);
    const password = String(loginUserInput.password);
    return await this.post(`${this.baseURL}/signin`, {
      username,
      password,
    });
  }

  async signup(signupUserInput: SignupUserInput) {
    const user = await this.post(`${this.baseURL}/signup`, {
      name: signupUserInput.name,
      username: signupUserInput.username,
      password: signupUserInput.password,
      confirmed_password: signupUserInput.confirmed_password,
      company: signupUserInput.companyId,
    });
    return { ...user, id: user._id };
  }
}
