import { Logger } from "@nestjs/common";
import { Args, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { User } from "./user";
import { UserService } from "./user.service";
import { EntityModelAppUser } from "src/generated";

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
  name(@Parent() userRecord: EntityModelAppUser): string {
    this.logger.debug(`method name called`);
    return userRecord.firstName
      ? `${userRecord.firstName ?? ""} ${userRecord.lastName ?? ""}`
      : `${userRecord.lastName ?? ""}`;
  }
}
