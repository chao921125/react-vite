declare namespace NSP {
  export interface SysUser {
    avatar: string;
    created_at: string;
    id: number;
    username: string;
    phone: string;
  }
  export interface User extends SysUser{
    permissions: string[];
    roles: number[];
    newUser: boolean;
  }
}
