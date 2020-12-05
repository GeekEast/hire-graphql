import configs from '@app/config';
import { AuthAPI } from '@app/datasources/auth.api';
import { AuthModule } from './auth/auth.module';
import { CompaniesModule } from './companies/companies.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DataAPI } from '@app/datasources/data.api';
import { GraphQLModule } from '@nestjs/graphql/dist/graphql.module';
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { VacanciesModule } from './vacancies/vacancies.module';

@Module({
  imports: [
    UsersModule,
    CompaniesModule,
    VacanciesModule,
    GraphQLModule.forRootAsync({
      imports: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        // TODO: NODE_ENV switch
        debug: true,
        playground: true,
        installSubscriptionHandlers: true,
        autoSchemaFile: 'schema.gql',
        dataSources: () => ({
          authAPI: new AuthAPI(configService.get<string>('api_url')),
          dataAPI: new DataAPI(configService.get<string>('api_url')),
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
