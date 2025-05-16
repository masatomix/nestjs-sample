
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
