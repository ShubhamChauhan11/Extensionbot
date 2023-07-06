import actionConstant from "./action-constant";
import { initialState } from "./initial-state";


export const commonreducer = (state = initialState, action) => {
    switch (action.type) {
    case actionConstant.SEARCHHISTORY:
        return { ...state, searchHistory: action.payload };
        case actionConstant.ENABLECHAT:
          return { ...state, enableChat: action.payload };
  
      default:
        return state;
    }
  };
