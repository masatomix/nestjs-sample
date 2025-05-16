import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class User {
  @Field()
  name: string;

  @Field(() => Int)
  age: number;
}
