import axios from "axios"

export const formatPrice = (format, price) => {
    price = price.toString().split('.')

    return `<small>${format}</small> <strong>${price[0]}<strong><small>,${price[1]}0</small>`
}

export const instance = axios.create({
    baseURL: "http://my-json-server.typicode.com/BreFranca/front-end-test-netshoes/",
    headers: {
        "Access-Control-Allow-Origin": "*",
    },
    responseType: 'text',
    responseEncoding: 'utf8'
})

export const restApi = {
    // get
    loadProducts: () => instance.get("products"),
}
