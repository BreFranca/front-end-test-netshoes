import React from 'react'
import PropTypes from 'prop-types'

import { Description } from './styles'

const CartProductStyle = (props) => (
    <Description>{props.size} | {props.style}</Description>
)

CartProductStyle.propTypes = {
    size: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired
}

CartProductStyle.defaultProps = {
    size: 'GG',
    style: 'Descrição do Produto'
}

export default CartProductStyle