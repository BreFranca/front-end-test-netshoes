import React from 'react'

import { Product, Descriptions, RightActions } from './styles'

import CartProductImage from '../CartProductImage'
import CartProductTitle from '../CartProductTitle'
import CartProductDescription from '../CartProductDescription'
import CartProductAmount from '../CartProductAmount'
import CartProductDelete from '../CartProductDelete'
import CartProductPrice from '../CartProductPrice'

const CartProduct = (props) => (
    <Product>
        <div>
            <CartProductImage />
            <Descriptions>
                <CartProductTitle>{props.title}</CartProductTitle>
                <CartProductDescription size={props.size} style={props.style} />
                <CartProductAmount amount={1} />
            </Descriptions>
        </div>
        <RightActions>
            <CartProductDelete onClick={props.onClick} />
            <CartProductPrice format={props.formatPrice} price={props.price} />
        </RightActions>
    </Product>
)

export default CartProduct