import React from 'react'

import { Product, Descriptions, RightActions } from './styles'

import CartProductImage from '../CartProductImage'
import CartProductTitle from '../CartProductTitle'
import CartProductDescription from '../CartProductDescription'
import CartProductAmount from '../CartProductAmount'
import CartProductDelete from '../CartProductDelete'
import CartProductPrice from '../CartProductPrice'

const CartProduct = () => (
    <Product>
        <div>
            <CartProductImage />
            <Descriptions>
                <CartProductTitle />
                <CartProductDescription />
                <CartProductAmount />
            </Descriptions>
        </div>
        <RightActions>
            <CartProductDelete />
            <CartProductPrice />
        </RightActions>
    </Product>
)

export default CartProduct