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
    birsday: Date;
    status: UserStatus;
}
