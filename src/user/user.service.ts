import { Injectable } from "@nestjs/common";
import { mockRecords } from "src/mock-data";

export type UserRecord = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
};

export abstract class UserService {
  abstract findAll(): Array<UserRecord>;
  abstract findById(id: string): UserRecord | undefined;
}

@Injectable()
export class UserServiceMockImpl implements UserService {
  findAll() {
    return mockRecords;
  }

  findById(id: string) {
    return mockRecords.find((record) => record.id === id);
  }
}
