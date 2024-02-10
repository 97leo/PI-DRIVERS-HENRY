import { GET_DIVERS } from "./actions-types";

const initialState = {
    allDrivers: []
  };

  const reducer = (state= initialState, action) => {
    switch(action.type) {
      case GET_DIVERS:
        return {...state, allDrivers: action.payload};
      default:
        return {
          ... state
         }
    }
  }

  export default reducer;