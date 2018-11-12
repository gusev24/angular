export enum UserRole {
  ADMIN,
  MODER,
  USER
}

export enum UserStatus {
  OFFLINE,
  ONLINE
}

export interface User {
    id: number;
    name: string;
    role: UserRole;
    birthday: Date;
    status: UserStatus;
}


export class User {
  constructor (
    public id: number,
    public name: string,
    public role: UserRole,
    public birthday: Date,
    public status: UserStatus
  ) { }
}
