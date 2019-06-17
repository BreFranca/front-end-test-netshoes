import React from 'react'
import PropTypes from 'prop-types'

import { Description } from './styles'

const CartProductDescription = (props) => (
    <Description>{props.size} | {props.style}</Description>
)

CartProductDescription.propTypes = {
    size: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired
}

CartProductDescription.defaultProps = {
    size: 'GG',
    style: 'Descrição do Produto'
}

export default CartProductDescription