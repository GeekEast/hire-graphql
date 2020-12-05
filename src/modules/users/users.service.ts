import { ProtectedAPIBase } from '@app/common/rest/protected.api';
import { PaginateUserInput } from './dto/paginate-company.input';
import { UpdateUserInput } from './dto/update-user.input';

export class User extends ProtectedAPIBase {
  async findById(id: string) {
    return await this.get(`/${id}`);
  }

  async findAll(paginateUserInput: PaginateUserInput) {
    return await this.get(this.baseURL, { ...paginateUserInput });
  }

  async company(id: string) {
    return await this.get(`/${id}/company`);
  }

  async updateUser(updateUserInput: UpdateUserInput) {
    return await this.patch(`/${updateUserInput.id}`, {
      ...updateUserInput,
    });
  }

  async removeUser(id: string) {
    return await this.delete(`/${id}`);
  }
}
