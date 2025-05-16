import { Injectable, Logger } from "@nestjs/common";
import axios from "axios";
import { AppUserEntityControllerApi, EntityModelAppUser } from "src/generated";
import { mockRecords } from "src/mock-data";

export type UserRecord = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
};

export abstract class UserService {
  abstract findAll(): Promise<Array<EntityModelAppUser>>;
  abstract findById(id: string): Promise<EntityModelAppUser | undefined>;
}

@Injectable()
export class UserServiceMockImpl implements UserService {
  private readonly logger = new Logger(UserServiceMockImpl.name);
  // eslint-disable-next-line @typescript-eslint/require-await
  async findAll() {
    this.logger.debug("UserServiceMockImpl:findAll");
    return mockRecords;
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  async findById(id: string) {
    this.logger.debug("UserServiceMockImpl:findById");
    return mockRecords.find((record) => record.userId === id);
  }
}

// const instance = axios.create({
//   timeout: 5000,
// });

@Injectable()
export class UserServiceBackendImpl implements UserService {
  private readonly logger = new Logger(UserServiceBackendImpl.name);
  private _api: AppUserEntityControllerApi;

  constructor() {
    this._api = new AppUserEntityControllerApi();
    // this._api = new AppUserEntityControllerApi(undefined, undefined, instance);
  }

  async findAll(): Promise<Array<EntityModelAppUser>> {
    try {
      const response = await this._api.getCollectionResourceAppuserGet1();
      const data = response.data;
      if (data._embedded?.user) {
        console.table(data._embedded.user);
        return data._embedded.user;
      }
    } catch (error) {
      console.error(error);
      // if (axios.isAxiosError(error)) {
      //   console.error("APIエラー:", error.response?.data);
      // } else {
      //   console.error("その他のエラー:", error);
      // }
    }
    return [];
  }

  async findById(id: string): Promise<EntityModelAppUser | undefined> {
    try {
      const response = await this._api.getItemResourceAppuserGet(id);
      this.logger.debug(response.data);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("APIエラー:", error.response?.data);
      } else {
        console.error("その他のエラー:", error);
      }
    }
  }
}
