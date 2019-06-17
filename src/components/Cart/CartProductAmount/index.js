import React from 'react'

import { Amount } from './styles'

const CartProductAmount = (props) => (
    <Amount>Quantidade: {props.amount}</Amount>
)

export default CartProductAmount