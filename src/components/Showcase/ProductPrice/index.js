import React from 'react'
import PropTypes from 'prop-types'

import { Price } from './styles'

import { formatPrice } from '../../../helpers'

const ProductPrice = (props) => (
    <Price>
        <div dangerouslySetInnerHTML={{ __html: formatPrice(props.format, props.price) }} />
    </Price>
)

ProductPrice.propTypes = {
    format: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
}

ProductPrice.defaultProps = {
    format: "R$",
    price: 229.9,
}

export default ProductPrice