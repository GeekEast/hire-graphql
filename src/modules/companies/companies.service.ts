import { ConfigService } from '@nestjs/config';
import { Inject, Injectable } from '@nestjs/common';
import { CreateCompanyInput } from './dto/create-company.input';
import { UpdateCompanyInput } from './dto/update-company.input';
import { RESTDataSource } from 'apollo-datasource-rest';
import { CONTEXT } from '@nestjs/graphql';

@Injectable()
export class CompanyAPI extends RESTDataSource {
  constructor(private configService: ConfigService, @Inject(CONTEXT) context) {
    super();
    this.baseURL = this.configService.get<string>('api_url') + '/companies';
  }
  create(createCompanyInput: CreateCompanyInput) {
    return 'This action adds a new company';
  }

  findAll() {
    return `This action returns all companies`;
  }

  findById(id: string) {
    return `This action returns a #${id} company`;
  }

  findOne(id: string) {
    return `This action returns a company`;
  }

  update(id: number, updateCompanyInput: UpdateCompanyInput) {
    return `This action updates a #${id} company`;
  }

  remove(id: number) {
    return `This action removes a #${id} company`;
  }
}
