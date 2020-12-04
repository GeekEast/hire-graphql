import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql/dist/graphql.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { VacanciesModule } from './vacancies/vacancies.module';
import { CompaniesModule } from './companies/companies.module';
import configs from '@app/config';
import { GraphQLGatewayModule } from '@nestjs/graphql';

@Module({
  imports: [
    UsersModule,
    CompaniesModule,
    VacanciesModule,
    GraphQLGatewayModule.forRoot({
      server: {
        cors: true,
        debug: true,
        playground: true,
        // autoSchemaFile: 'schema.gql',
      },
      gateway: {
        serviceList: [
          { name: 'users', url: process.env.USER_SERVICE_GRAPHQL },
          { name: 'companies', url: process.env.COMPANIES_SERVICE_GRAPHQL },
        ],
      },
    }),
    ConfigModule.forRoot({
      load: [configs],
      envFilePath: ['.local.development.env'],
      isGlobal: true,
      cache: true,
      expandVariables: true,
    }),
  ],
})
export class AppModule {}
