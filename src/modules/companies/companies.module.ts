import { CompaniesResolver } from './companies.resolver';
import { Module } from '@nestjs/common';

@Module({
  providers: [CompaniesResolver],
})
export class CompaniesModule {}
