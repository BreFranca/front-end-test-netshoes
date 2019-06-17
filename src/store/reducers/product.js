import * as types from "../constants"

const initialState = {
    products: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PRODUCTS:
            return { products: action.payload }
        default:
            return state
    }
}
