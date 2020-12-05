import configs from '@app/config';
import { AuthAPI } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { CompaniesModule } from './companies/companies.module';
import { Company as CompanyAPI } from './companies/companies.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql/dist/graphql.module';
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { VacanciesModule } from './vacancies/vacancies.module';
import { Vacancy as VacancyAPI } from './vacancies/vacancies.service';

@Module({
  imports: [
    UsersModule,
    CompaniesModule,
    VacanciesModule,
    GraphQLModule.forRootAsync({
      imports: [ConfigService],
      useFactory: async () =>
        // configService: ConfigService
        ({
          // TODO: NODE_ENV switch
          debug: true,
          playground: true,
          installSubscriptionHandlers: true,
          autoSchemaFile: 'schema.gql',
          dataSources: () => ({
            authAPI: new AuthAPI('/'),
            companyAPI: new CompanyAPI('/companies'),
            vacancyAPI: new VacancyAPI('/vacancies'),
          }),
        }),
      inject: [ConfigService],
    }),
    ConfigModule.forRoot({
      load: [configs],
      envFilePath: ['.local.development.env'],
      isGlobal: true,
      cache: true,
      expandVariables: true,
    }),
    AuthModule,
  ],
})
export class AppModule {}
