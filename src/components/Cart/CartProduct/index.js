import React from 'react'
import PropTypes from 'prop-types'

import { Product, Descriptions, LeftInfos, RightActions } from './styles'

import CartProductImage from '../CartProductImage'
import CartProductTitle from '../CartProductTitle'
import CartProductDescription from '../CartProductDescription'
import CartProductAmount from '../CartProductAmount'
import CartProductDelete from '../CartProductDelete'
import CartProductPrice from '../CartProductPrice'

const CartProduct = (props) => (
    <Product>
        <LeftInfos>
            <CartProductImage />
            <Descriptions>
                <CartProductTitle>{props.title}</CartProductTitle>
                <CartProductDescription size={props.size} style={props.style} />
                <CartProductAmount amount={1} />
            </Descriptions>
        </LeftInfos>
        <RightActions>
            <CartProductDelete onClick={props.onClick} />
            <CartProductPrice format={props.formatPrice} price={props.price} />
        </RightActions>
    </Product>
)

CartProduct.propTypes = {
    title: PropTypes.string.isRequired,
    size: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    price: PropTypes.number.isRequired,
    formatPrice: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired
}

CartProduct.defaultProps = {
    title: "Nome do Produto",
    size: "G",
    price: 50.0,
    formatPrice: 'R$',
    style: 'Descrição de estilo'
}

export default CartProduct