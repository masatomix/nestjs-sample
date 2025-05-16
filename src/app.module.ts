import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { UserModule } from "./user/user.module";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver, // ★これを追加！
      // autoSchemaFile: true,
      autoSchemaFile: "src/schema.gql", // ← スキーマをファイル出力
    }),
    UserModule,
  ],
})
export class AppModule {}
