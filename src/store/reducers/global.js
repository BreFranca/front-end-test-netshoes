import * as types from "../constants"

const initialState = {
    products: [],
    cart: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PRODUCTS:
            return { products: action.payload }
        case types.INSERT_PRODUCT_CART:
            return { ...state, cart: action.payload }
        case types.DELETE_PRODUCT_CART:
            return { ...state, cart: action.payload }
        default:
            return state
    }
}
