import * as actionType from "./ActionType";

export function addUser(user) {
  return { type: actionType.ADD_USER, user: user };
}
