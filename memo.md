
## 環境構築

```
$ node -v
v20.9.0

$ pnpm
nodenv: pnpm: command not found

The `pnpm' command exists in these Node versions:
  20.5.0
  21.7.3
  22.2.0

$ npm install -g pnpm 

added 1 package in 931ms

1 package is looking for funding
  run `npm fund` for details
  
$ exec $SHELL -l
$ pnpm -v
9.4.0

$ nest
nodenv: nest: command not found

The `nest' command exists in these Node versions:
  22.2.0

$ npm i -g @nestjs/cli

added 248 packages in 8s

45 packages are looking for funding
  run `npm fund` for details

$ nest -v
11.0.7
$
```


```
$ nest new nestjs-sample
✨  We will scaffold your app in a few seconds..

✔ Which package manager would you ❤️  to use? pnpm
CREATE nestjs-sample/.prettierrc (51 bytes)
CREATE nestjs-sample/README.md (5036 bytes)
CREATE nestjs-sample/eslint.config.mjs (836 bytes)
CREATE nestjs-sample/nest-cli.json (171 bytes)
CREATE nestjs-sample/package.json (2039 bytes)
CREATE nestjs-sample/tsconfig.build.json (97 bytes)
CREATE nestjs-sample/tsconfig.json (544 bytes)
CREATE nestjs-sample/src/app.controller.ts (274 bytes)
CREATE nestjs-sample/src/app.module.ts (249 bytes)
CREATE nestjs-sample/src/app.service.ts (142 bytes)
CREATE nestjs-sample/src/main.ts (228 bytes)
CREATE nestjs-sample/src/app.controller.spec.ts (617 bytes)
CREATE nestjs-sample/test/jest-e2e.json (183 bytes)
CREATE nestjs-sample/test/app.e2e-spec.ts (674 bytes)

✔ Installation in progress... ☕

🚀  Successfully created project nestjs-sample
👉  Get started with the following commands:

$ cd nestjs-sample
$ pnpm run start

                                         
                          Thanks for installing Nest 🙏
                 Please consider donating to our open collective
                        to help us maintain this package.
                                         
                                         
               🍷  Donate: https://opencollective.com/nest
                                         
$ cd nestjs-sample/
nestjs-sample $ 
```


## GraphQLをセットアップする


```
$ pnpm add @nestjs/graphql @nestjs/apollo graphql
```


```
$ nest g module user
nest g service user
nest g resolver user
nest g class user

CREATE src/user/user.module.ts (81 bytes)
UPDATE src/app.module.ts (501 bytes)
CREATE src/user/user.service.spec.ts (446 bytes)
CREATE src/user/user.service.ts (88 bytes)
UPDATE src/user/user.module.ts (155 bytes)
CREATE src/user/user.resolver.spec.ts (456 bytes)
CREATE src/user/user.resolver.ts (86 bytes)
UPDATE src/user/user.module.ts (217 bytes)
CREATE src/user/user.spec.ts (139 bytes)
CREATE src/user/user.ts (21 bytes)
$
```


```:src/user/user.ts
import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class User {
  @Field()
  name: string;

  @Field(() => Int)
  age: number;
}

```

```
$ touch src/mock-data.ts
```

```:src/mock-data.ts
import { UserRecord } from "./user/user.service";

export const mockRecords: UserRecord[] = [
  {
    id: "1",
    firstName: "John",
    lastName: "Doe",
    age: 30,
  },
  {
    id: "2",
    firstName: "Jane",
    lastName: "Smith",
    age: 25,
  },
  {
    id: "3",
    firstName: "Alice",
    lastName: "Johnson",
    age: 28,
  },
];

```

```:src/user/user.service.ts
import { Injectable } from "@nestjs/common";
import { mockRecords } from "src/mock-data";

export type UserRecord = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
};

@Injectable()
export class UserService {
  findAll() {
    return mockRecords;
  }

  findById(id: string) {
    return mockRecords.find((record) => record.id === id);
  }
}

```

```:src/user/user.resolver.ts

import { Logger } from "@nestjs/common";
import { Args, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { User } from "./user";
import { UserRecord, UserService } from "./user.service";

@Resolver(() => User)
export class UserResolver {
  private readonly logger = new Logger(UserResolver.name);

  constructor(private readonly _userService: UserService) {}

  @Query(() => User, { nullable: true, name: "findUserById" })
  findOne(@Args("id") id: string) {
    this.logger.debug(`findOne called with id: ${id}`);
    return this._userService.findById(id);
  }

  @Query(() => [User]) // name がないとメソッド名がそのままクエリ名に。
  findAllUsers() {
    this.logger.debug(`findAll called`);
    return this._userService.findAll();
  }

  @ResolveField(() => String)
  name(@Parent() userRecord: UserRecord): string {
    this.logger.debug(`method name called`);
    return `${userRecord.firstName} ${userRecord.lastName}`;
  }
}

```


```:src/app.module.ts 
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
```

```
$ pnpm run start:dev
[10:05:38 PM] Starting compilation in watch mode...

[10:05:40 PM] Found 0 errors. Watching for file changes.

[Nest] 231525  - 05/14/2025, 10:05:40 PM     LOG [NestFactory] Starting Nest application...
[Nest] 231525  - 05/14/2025, 10:05:40 PM     LOG [InstanceLoader] AppModule dependencies initialized +12ms
[Nest] 231525  - 05/14/2025, 10:05:40 PM     LOG [InstanceLoader] SampleEntityModule dependencies initialized +1ms
[Nest] 231525  - 05/14/2025, 10:05:40 PM     LOG [InstanceLoader] GraphQLSchemaBuilderModule dependencies initialized +0ms
[Nest] 231525  - 05/14/2025, 10:05:40 PM     LOG [InstanceLoader] GraphQLModule dependencies initialized +0ms
[Nest] 231525  - 05/14/2025, 10:05:40 PM     LOG [GraphQLModule] Mapped {/graphql, POST} route +52ms
[Nest] 231525  - 05/14/2025, 10:05:40 PM     LOG [NestApplication] Nest application successfully started +0ms
```


![image-20250516142942600.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/73777/9bd7cd25-68cc-4574-9c82-20c14ba0e71b.png)


```
$ cat data.txt 
{
  "query":
  "query {
    findAllUsers{
       name
    }
  
    findUserById(id:\"3\"){
      name
      age
    }
  }
"
}

$ cat data.txt | curl --data @-  \\
  --request POST \
  --header 'content-type: application/json' \
  --url http://localhost:3000/graphql | jq

  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   256  100   144  100   112  25536  19861 --:--:-- --:--:-- --:--:-- 42666
{
  "data": {
    "findAllUsers": [
      {
        "name": "John Doe"
      },
      {
        "name": "Jane Smith"
      },
      {
        "name": "Alice Johnson"
      }
    ],
    "findUserById": {
      "name": "Alice Johnson",
      "age": 28
    }
  }
}
```

```
$ curl 'http://localhost:3000/graphql' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: http://localhost:3000' --data-binary '{"query":"query {\n  findAllUsers{\n     name\n  }\n  \n  findUserById(id:\"3\"){\n    name\n    age\n  }\n}\n"}' --compressed | jq
```

## SpectaQL 導入


```
$ pnpm add -D spectaql
$ touch spectaql.yml 
$ cat spectaql.yml 
introspection:
  url: http://localhost:3000/graphql
  # schemaFile: ./src/schema.gql

info:
  title: My GraphQL API
  description: Generated via SpectaQL
  version: 1.0.0
```

``pnpm run start:dev`` で起動した状態で別コンソールから、

```
$ npx spectaql spectaql.yml
```

public/index.html を開いてみると、、

![image-20250516160916001.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/73777/b6557371-9ad6-476b-8576-2fcb6e9f5eb8.png)


表示されました。

package.jsonの scriptsに、``"docs": "spectaql spectaql.yml"``を追加して ``pnpm run docs`` とかで実行しても良いかもです。



## Backend接続

https://qiita.com/masatomix/items/53003a34d413206bb619
のBackendサーバ(REST)に接続するサンプル。

NestJSは RxJS 推奨っぽいけど、Axiosでいきます。

```
$ pnpm add axios
$ pnpm add -D @types/axios

Backend起動状態で、


$ curl http://localhost:8080/v3/api-docs -o api-docs.json
$ openapi-generator-cli generate -i api-docs.json -g typescript-axios -o ./src/generated/
```

https://github.com/masatomix/nestjs-sample/commit/bcb3a2ae147cc1e172ab2ac8abe3af5b21a64b8e これらのコード変更後、

```
$ curl 'http://localhost:3000/graphql' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: http://localhost:3000' --data-binary '{"query":"query {\n  findAllUsers{\n     name\n  }\n  \n  findUserById(id:\"u001\"){\n    name\n    age\n  }\n}\n"}' --compressed | jq


{
  "data": {
    "findAllUsers": [
      {
        "name": "木野1"
      },
      {
        "name": "木野2"
      },
      {
        "name": "木野3"
      },
      {
        "name": "佐藤1"
      },
      {
        "name": "佐藤2"
      },
      {
        "name": "佐藤3"
      }
    ],
    "findUserById": {
      "name": "木野1",
      "age": 48
    }
  }
}
```

Backendから値がとれました！