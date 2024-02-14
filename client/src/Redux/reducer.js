import { GET_DIVERS } from "./actions-types";

const initialState = {
    allDrivers: [],
    allTeams: []
  };

  const reducer = (state= initialState, action) => {
    switch(action.type) {
      case GET_DIVERS:
        return {...state, allDrivers: action.payload};
      case GET_TEAMS:
        return {...state, allTeams: action.payload}
      default:
        return {
          ... state
         }
    }
  }

  export default reducer;