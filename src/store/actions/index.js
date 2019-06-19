import { restApi, insertSizeAmount } from "../../helpers"

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
	const products = await restApi
		.loadProducts()
		.then(response => {
			const { data } = response
			dispatch({
				type: types.GET_PRODUCTS,
				payload: data
			})
			return data
		}
		)
		.catch(e => console.log("erro", e))

	return products
}

export const getProductsCart = () => async dispatch => {
	const cart = JSON.parse(localStorage.getItem('cart'))

	if (cart) {
		dispatch({
			type: types.GET_PRODUCTS_CART,
			payload: cart
		})

		let total = cart.reduce((a, b) => a + b.totalPrice, 0)
		let installments = Math.max(...cart.map(product => product.installments), 0)
		total = Number(total.toFixed(2))
		installments = Number(installments.toFixed(2))

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

export const addProductCart = (id, size) => async dispatch => {
	let cart = JSON.parse(localStorage.getItem('cart'))

	if (cart) {
		dispatch({
			type: types.GET_PRODUCTS_CART,
			payload: cart
		})

		let product = cart.find(product => product.id === id && product.size === size)

		if (product === undefined) {
			await restApi
				.loadProduct(id)
				.then(response => {
					const { data } = response

					product = insertSizeAmount(data, size)

					cart = [
						...cart,
						product
					]

					dispatch({
						type: types.UPDATE_CART,
						payload: cart
					})

					localStorage.setItem('cart', JSON.stringify(cart))
	
				}
			)
			.catch(e => console.log("erro", e))
		} else {

			let cartList = cart.filter(product => product.id !== id)
			let specify = cart.filter(product => product.id === id && product.size !== size)

			product = insertSizeAmount(product)

			cartList.concat(specify)

			cartList = [
				...cartList,
				product
			]

			localStorage.setItem('cart', JSON.stringify(cart))
		}
	} else {
		await restApi
			.loadProduct(id)
			.then(response => {
				const { data } = response

				const product = insertSizeAmount(data, size)
				dispatch({
					type: types.INSERT_PRODUCT_CART,
					payload: product
				})

				const cartList = [
					product
				]

				localStorage.setItem('cart', JSON.stringify(cartList))

			}
			)
			.catch(e => console.log("erro", e))
	}

	return true
}

export const deleteProductCart = (id, size) => dispatch => {
	let cart = JSON.parse(localStorage.getItem('cart'))

	if (cart) {
		let cartList = cart.filter(product => product.id !== id)
		let specify = cart.filter(product => product.id === id && product.size !== size)

		cartList = cartList.concat(specify)

		dispatch({
			type: types.UPDATE_CART,
			payload: cartList
		})

		let total = cartList.reduce((a, b) => a + b.totalPrice, 0)
		let installments = Math.max(...cartList.map(product => product.installments), 0)
		total = Number(total.toFixed(2))
		installments = Number(installments.toFixed(2))

		const cartAmount = {
			total: total,
			installments: installments
		}

		dispatch({
			type: types.GET_TOTAL_AMOUNT_CART,
			payload: cartAmount
		})

		if(cartAmount.total === 0) {
			dispatch({
				type: types.TOGGLE_BAG,
				payload: false
			})
		}

		localStorage.setItem('cart', JSON.stringify(cartList))

		return true
	}
}

export const clearCart = () => dispatch => {
	localStorage.removeItem('cart')

	dispatch({
		type: types.UPDATE_CART,
		payload: []
	})

	const cartAmount = {
		total: 0,
		installments: null
	}

	dispatch({
		type: types.GET_TOTAL_AMOUNT_CART,
		payload: cartAmount
	})

	const cart = []

	return cart
}