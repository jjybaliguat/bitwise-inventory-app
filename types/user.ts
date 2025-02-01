export enum UserRole {
    USER = "USER",
    SALE_ADMIN = "SALE_ADMIN",
    SUPERADMIN = "SUPERADMIN"
  }

export enum UserStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE"
}

export interface User {
  id: string,
  name: string,
  email: string,
  role: UserRole,
  status: UserStatus
}