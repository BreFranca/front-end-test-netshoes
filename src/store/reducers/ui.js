import * as types from "../constants"

const initialState = {
    bag: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.TOGGLE_BAG:
            return { bag: action.payload }
        default:
            return state
    }
}
