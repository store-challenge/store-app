import { INCREMENT, DECREMENT, INCREMENTBY } from "./counterActions";
import { initialState } from "./counterState";

const counterReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case INCREMENTBY:
      return { ...state, count: state.count + action.payload };
    default:
      return state;
  }
};

export default counterReducer;
