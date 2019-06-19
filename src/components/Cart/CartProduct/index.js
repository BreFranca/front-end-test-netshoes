import React from 'react'
import PropTypes from 'prop-types'

import { Product, Descriptions, LeftInfos, RightActions } from './styles'

import { getTitle } from '../../../helpers'

import CartProductImage from '../CartProductImage'
import CartProductTitle from '../CartProductTitle'
import CartProductStyle from '../CartProductStyle'
import CartProductAmount from '../CartProductAmount'
import CartProductDelete from '../CartProductDelete'
import CartProductPrice from '../CartProductPrice'

const CartProduct = (props) => (
    <Product>
        <LeftInfos>
            <CartProductImage image={props.imageUrl} />
            <Descriptions>
                <CartProductTitle>{getTitle(props.title, props.description)}</CartProductTitle>
                <CartProductStyle size={props.size} style={props.style} />
                <CartProductAmount amount={props.amount} />
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
    description: PropTypes.string.isRequired,
    size: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    price: PropTypes.number.isRequired,
    formatPrice: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    imageAlt: PropTypes.string,
}

CartProduct.defaultProps = {
    title: "Nome do Produto",
    description: "15/16 S/N",
    size: "G",
    price: 50.0,
    formatPrice: 'R$',
    amount: 1,
    style: 'Descrição de estilo',
    imageUrl: "../../assets/images/product-blank.jpg",
    imageAlt: "Alt Image",
}

export default CartProduct