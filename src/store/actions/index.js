import { restApi } from "../../helpers"

import * as types from "../constants"

export const toggleBag = (status) => dispatch => {
	console.log(status);
	if(status === 'show') {
		dispatch({
			type: types.TOGGLE_BAG,
			payload: true
		})
	} else {
		dispatch({
			type: types.TOGGLE_BAG,
			payload: false
		})
	}
}

// ### PRODUCTS ###
export const getProducts = () => async dispatch => {
	await restApi
		.loadProducts()
		.then(response =>
			console.log(response)
			// dispatch({
			// 	type: types.GET_PRODUCTS,
			// 	payload: response.data
			// })
		)
		.then(response => console.log(response))
		.catch(e => console.log("erro", e))
}

export const addProductCart = (sku) => dispatch => {
	toggleBag('show')

	dispatch({
		type: types.INSERT_PRODUCT_CART,
		payload: sku
	})
}

export const deleteProductCart = (sku) => dispatch => {
	toggleBag('show')

	dispatch({
		type: types.DELETE_PRODUCT_CART,
		payload: sku
	})
}