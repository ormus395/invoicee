import { OPEN_DRAWER, CLOSE_DRAWER } from "../actions";

const uiReducer = (state, action) => {
  console.log("The uiReducer", state, action);
  switch (action.type) {
    case OPEN_DRAWER:
      return { ...state, drawer: true };
    case CLOSE_DRAWER:
      return { ...state, drawer: false };
    default:
      throw new Error();
  }
};

export default uiReducer;
