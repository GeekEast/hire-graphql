import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql/dist/graphql.module';
import { RecipesModule } from '@app/modules/recipes/recipes.module';

@Module({
  imports: [
    RecipesModule,
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
    }),
  ],
})
export class AppModule {}
