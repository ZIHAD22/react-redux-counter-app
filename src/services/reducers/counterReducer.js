import { DECREMENT, INCREMENT, RESET } from "../constants/counterConstants";

const initialCounterState = {
    count: 0,
    error: null
}

const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
                error: ""
            }

        case DECREMENT:
            if (state.count > 0) {
                return {
                    ...state,
                    count: state.count - 1
                }
            } else {
                return {
                    ...state,
                    error: "Can't decrement"
                }
            }

        case RESET:
            return {
                ...state,
                count: 0,
                error: ""
            }
        default:
            return state
    }
}

export {
    counterReducer
}