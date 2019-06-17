import React from 'react'
import PropTypes from 'prop-types'

import { Amount } from './styles'

const CartProductAmount = (props) => (
    <Amount>Quantidade: {props.amount}</Amount>
)

CartProductAmount.propTypes = {
    title: PropTypes.number.isRequired,
}

CartProductAmount.defaultProps = {
    title: 1,
}

export default CartProductAmount