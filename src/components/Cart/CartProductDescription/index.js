import React from 'react'

import { Description } from './styles'

const CartProductDescription = (props) => (
    <Description>{props.size} | {props.style}</Description>
)

export default CartProductDescription