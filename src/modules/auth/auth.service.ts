import { UnProtectedAPIBase } from './../../common/rest/unprotected.api';
import { LoginUserInput } from '@app/modules/auth/dto/login.dto';
import { SignupUserInput } from '@app/modules/auth/dto/signup.dto';

export class AuthAPI extends UnProtectedAPIBase {
  async signin(loginUserInput: LoginUserInput) {
    return await this.post(`/signin`, loginUserInput);
  }

  async signup(signupUserInput: SignupUserInput) {
    return await this.post(`/signup`, {
      ...signupUserInput,
      company: signupUserInput.companyId,
    });
  }
}
