import React from 'react'

import { formatPrice } from '../../../helpers'

import { Price } from './styles'

const CartProductPrice = (props) => (
    <Price>
        <div dangerouslySetInnerHTML={{ __html: formatPrice(props.format, props.price) }} />
    </Price>
)

export default CartProductPrice