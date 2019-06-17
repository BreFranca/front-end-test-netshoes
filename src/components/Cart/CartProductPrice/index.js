import React from 'react'

import { formatPrice } from '../../../helpers'

import { Price } from './styles'

const CartProductPrice = (props) => (
    <Price>
        <div dangerouslySetInnerHTML={{ __html: formatPrice('R$', 299.5) }} />
    </Price>
)

export default CartProductPrice