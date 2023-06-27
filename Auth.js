export const IsAuthenticated = user => !!user;

export const IsAllowed = (user, rights) =>
  rights.some(right => user.rights.includes(right));

export const HasRole = (user, roles) =>
  roles.some(role => user.roles.includes(role));
