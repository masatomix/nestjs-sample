import { Module } from "@nestjs/common";
import { UserService, UserServiceBackendImpl } from "./user.service";
import { UserResolver } from "./user.resolver";

@Module({
  providers: [
    {
      provide: UserService,
      // useClass: UserServiceMockImpl,
      useClass: UserServiceBackendImpl,
    },
    UserResolver,
  ],
})
export class UserModule {}
