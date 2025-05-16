import { Module } from "@nestjs/common";
import { UserService, UserServiceMockImpl } from "./user.service";
import { UserResolver } from "./user.resolver";

@Module({
  providers: [
    {
      provide: UserService,
      useClass: UserServiceMockImpl,
    },
    UserResolver,
  ],
})
export class UserModule {}
