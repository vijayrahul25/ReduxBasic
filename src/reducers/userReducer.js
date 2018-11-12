// counterReducer.js

import * as actionType from "../actions/ActionType";
const initialUserState = {
  users: []
};
const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case actionType.ADD_USER:
      return {
        ...state,
        users: state.users.concat(action.user)
      };
      break;
    default:
      return state;
  }
};

export default userReducer;
