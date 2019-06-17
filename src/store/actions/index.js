import { restApi } from "../../helpers"

import * as types from "../constants"

export const toggleBag = (status) => dispatch => {
	if (status === 'show') {
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
			dispatch({
				type: types.GET_PRODUCTS,
				payload: response.data
			})
		)
		.catch(e => console.log("erro", e))
}

export const getProductsCart = () => async dispatch => {
	const cart = JSON.parse(localStorage.getItem('cart'));

	if (cart) {
		dispatch({
			type: types.GET_PRODUCTS_CART,
			payload: cart
		})

		const total = cart.reduce((a, b) => a + b.price, 0)
		const installments = Math.max(...cart.map(product => product.installments), 0);
		const cartAmount = {
			total: total,
			installments: installments
		}

		dispatch({
			type: types.GET_TOTAL_AMOUNT_CART,
			payload: cartAmount
		})
	}
}

export const addProductCart = (id) => async dispatch => {
	let cart = JSON.parse(localStorage.getItem('cart'));

	if (cart) {
		dispatch({
			type: types.GET_PRODUCTS_CART,
			payload: cart
		})
	}

	const product = cart.find(product => product.id === id)
	if (product === undefined) {

		await restApi
			.loadProduct(id)
			.then(response => {
				const { data } = response

				dispatch({
					type: types.INSERT_PRODUCT_CART,
					payload: data
				})

				cart = [
					...cart,
					data
				]

				localStorage.setItem('cart', JSON.stringify(cart));

			}
			)
			.catch(e => console.log("erro", e))
	}
}

export const deleteProductCart = (id) => dispatch => {
	let cart = JSON.parse(localStorage.getItem('cart'));

	if (cart) {
		cart = cart.filter((product, index, cart) => {
			return product.id != id
		})

		dispatch({
			type: types.UPDATE_CART,
			payload: cart
		})

		console.log(cart)

		localStorage.setItem('cart', JSON.stringify(cart));
	}
}