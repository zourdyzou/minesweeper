type UserPermissionsRole = "admin" | "user" | "manager";

type PermissionsWithoutAdminRole = Exclude<UserPermissionsRole, "admin">;

interface DepartmentsForPermissionRole {
  depName: string;
  levelClearence: number;
}

const DepsForPermission: Record<
  UserPermissionsRole,
  DepartmentsForPermissionRole
> = {
  admin: {
    depName: "security engineer",
    levelClearence: 10,
  },
  user: {
    depName: "Sales Markerting",
    levelClearence: 5,
  },
  manager: {
    depName: "Marketing",
    levelClearence: 10,
  },
};

type TuplePermissions = [UserPermissionsRole, UserPermissionsRole];

type BasicUser<A = boolean, P = TuplePermissions> = {
  name: string;
  surname: string;
  age: number;
  isAdmin: A;
  permissions?: P;
};

type BasicUserWithoutPermissions = Omit<BasicUser, "permissions">;

export {
  DepsForPermission,
  BasicUserWithoutPermissions,
  PermissionsWithoutAdminRole,
};
