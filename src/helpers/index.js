export const formatPrice = (format, price) => {
    price = price.toString().split('.')


    return `<small>${format}</small> <strong>${price[0]}<strong><small>,${price[1]}0</small>`
}