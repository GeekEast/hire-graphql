import { Module } from '@nestjs/common';
import { CompanyAPI } from './companies.service';
import { CompaniesResolver } from './companies.resolver';

@Module({
  providers: [CompaniesResolver, CompanyAPI],
})
export class CompaniesModule {}
