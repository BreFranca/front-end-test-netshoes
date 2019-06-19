import * as types from "../constants"

const initialState = {
    cartList: [],
    cartAmount: {
        total: 0,
        installments: null
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.GET_TOTAL_AMOUNT_CART:
            return { ...state, cartAmount: action.payload }
        case types.GET_PRODUCTS_CART:
            return { ...state, cartList: action.payload }
        case types.INSERT_PRODUCT_CART:
            return { ...state, cartList: [...state.cartList, action.payload], }
        case types.UPDATE_CART:
            return { ...state, cartList: action.payload }
        default:
            return state
    }
}
