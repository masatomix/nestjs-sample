import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver, // ★これを追加！
      // autoSchemaFile: true,
      autoSchemaFile: "src/schema.gql", // ← スキーマをファイル出力
    }),
  ],
})
export class AppModule {}
