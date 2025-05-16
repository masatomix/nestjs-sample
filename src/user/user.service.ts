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
