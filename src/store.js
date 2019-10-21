import {createStore} from "redux";

const initialState = { currentValue: 0 };

export const INCREMENT = "INCREMENT";
export const DECREDMENT =  "DECREMENT";

function counter ( state =  initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return { currentValue: state.currentValue +
            action.amount };
        case DECREDMENT:
            return { currentValue: state.currentValue -
            action.amount };    
           default:
             return state;
        }
}

export default createStore(counter);
