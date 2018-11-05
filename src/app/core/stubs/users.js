import { UserRole, UserStatus } from 'src/app/core/model/user.model';


export default  [
    {
      id: 1,
      name: 'Vasya',
      role: UserRole.ADMIN,
      birsday: new Date(),
      status: UserStatus.ONLINE

    },
    {
      id: 2,
      name: 'Petya',
      role: UserRole.MODER,
      birsday: new Date(),
      status: UserStatus.ONLINE

    },
    {
      id: 3,
      name: 'Grisgha',
      role: UserRole.USER,
      birsday: new Date(),
      status: UserStatus.OFFLINE

    },
    {
      id: 4,
      name: 'Oleg',
      role: UserRole.USER,
      birsday: new Date(),
      status: UserStatus.OFFLINE

    }
  ];
