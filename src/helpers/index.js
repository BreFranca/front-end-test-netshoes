import axios from "axios"

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

    return `<small>${format}</small> <strong>${price[0]}<strong><small>,${cents}</small>`
}

export const formatInstallments = (installments, price, format) => {   
    let quota = price / installments

    quota = quota.toFixed(2).toString().replace('.', ',')

    return `ou ${installments}x ${format + quota}`
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
    loadProduct: (id) => instance.get(`products/${id}`),
}
