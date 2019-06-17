import React from 'react'
import PropTypes from 'prop-types'

import { formatPrice } from '../../../helpers'

import { Price } from './styles'

const CartProductPrice = (props) => (
    <Price>
        <div dangerouslySetInnerHTML={{ __html: formatPrice(props.format, props.price) }} />
    </Price>
)

CartProductPrice.propTypes = {
    format: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}

CartProductPrice.defaultProps = {
    format: 'R$',
    price: 0.0
}

export default CartProductPrice