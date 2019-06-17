import React from 'react'
import PropTypes from 'prop-types'

import { Title } from './styles'

const CartProductTitle = (props) => (
    <Title>{props.children}</Title>
)

CartProductTitle.propTypes = {
    format: PropTypes.string.isRequired,
}

CartProductTitle.defaultProps = {
    format: 'Nome do Produto',
}

export default CartProductTitle