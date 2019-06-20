import axios from "axios"

export const ENV = process.env.NODE_ENV
export const PUBLIC_URL = process.env.PUBLIC_URL

let API_URL = ''
if(ENV === "development") {
    API_URL = 'http://localhost:8000/api/'
} else {
    API_URL = 'https://my-json-server.typicode.com/BreFranca/front-end-test-netshoes/'
}
export default API_URL

export const formatPrice = (format, price) => {
    price = Number(price).toString().split('.')

    let cents = '0'
    if(price[1] === undefined) {
        cents = '00'
    } else if(price[1].length > 1) {
        cents = price[1]
    } else {
        cents = price[1] + '0'
    }
    cents = cents.substring(0, 2)

    return `<small>${format}</small> <strong>${price[0]}</strong><small>,${cents}</small>`
}

export const formatInstallments = (installments, price, format) => {   
    let quota = price / installments

    quota = quota.toFixed(2).toString().replace('.', ',')

    return `ou ${installments}x ${format}${quota}`
}

export const getTitle = (title, description) => {
    return title + ' ' + description
}

export const getImage = id => {
    if(id === 9) {
        id = 1
    } else if(id > 9) {
        id = id.toString().split('')
        id = id[1]
    }
    return PUBLIC_URL + '/assets/products/corinthians' + id +'.jpg'
}

export const getRandomSize = (sizes) => {
    const size = sizes[Math.floor(Math.random() * sizes.length)]

    return size
}

export const insertSizeAmount = (product, size) => {
	if(product.amount) {
		product.amount = product.amount + 1
		product.totalPrice = product.totalPrice + product.price
	} else {
		product.amount = 1
		product.totalPrice = product.price
    }

	if(size) {
		product.size = size
	}
	return product
}

export const instance = axios.create({
    baseURL: API_URL,
    headers: {
        "Access-Control-Allow-Origin": "*",
    },
    responseType: 'text',
    responseEncoding: 'utf8'
})

export const restApi = {
    // get
    loadProducts: () => instance.get("products"),
    loadProduct: (id) => instance.get(`products/${id}`),
}
