import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql/dist/graphql.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { VacanciesModule } from './vacancies/vacancies.module';
import { CompaniesModule } from './companies/companies.module';
import configs from '@app/config';

@Module({
  imports: [
    UsersModule,
    CompaniesModule,
    VacanciesModule,
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
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
