import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql/dist/graphql.module';
import { RecipesModule } from '@app/modules/recipes/recipes.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { VacanciesModule } from './vacancies/vacancies.module';
import { CompaniesModule } from './companies/companies.module';
import { UsersModule } from './users/users.module';
import configs from '@app/config';

@Module({
  imports: [
    RecipesModule,
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
    UsersModule,
    CompaniesModule,
    VacanciesModule,
  ],
})
export class AppModule {}
