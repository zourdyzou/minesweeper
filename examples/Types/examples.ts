type UserPermissionsRole = "admin" | "user" | "manager";

type PermissionsWithoutAdminRole = Exclude<UserPermissionsRole, "admin">;

interface DepartmentsForPermissionRole {
  depName: string;
  levelClearance: number;
}

const DepsForPermission: Record<
  UserPermissionsRole,
  DepartmentsForPermissionRole
> = {
  admin: {
    depName: "security engineer",
    levelClearance: 10,
  },
  user: {
    depName: "Sales Markerting",
    levelClearance: 5,
  },
  manager: {
    depName: "Marketing",
    levelClearance: 10,
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

type AdvancedUser = {
  account: number;
};

type FullUser<A = boolean, P = string[]> = BasicUser<A, P> & AdvancedUser;

type BasicUserReadonly = Readonly<BasicUser>;
type BasicUserRequired = Required<BasicUser>;
type BasicUserPartial = Partial<BasicUser>;

type BasicUserReadonlyRequired = Readonly<Required<BasicUser>>;

const user: FullUser<boolean> = {
  name: "Nick",
  surname: "Ovchinnikov",
  age: 30,
  isAdmin: true,
  account: 100,
  permissions: ["admin", "user"],
};

user.name = "Zourdy";

const usersArray: FullUser[] = [user, user];

function getFirstItem<T>(arr: T[]) {
  return arr[0];
}

// getFirstItem<FullUser<boolean, TuplePermissions>>()

type BasicUserWithoutPermissions = Omit<BasicUser, "permissions">;

export {
  DepsForPermission,
  BasicUserWithoutPermissions,
  PermissionsWithoutAdminRole,
};
