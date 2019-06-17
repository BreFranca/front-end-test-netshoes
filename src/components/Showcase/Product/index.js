import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './styles'

import ProductImage from '../ProductImage';
import ProductDescription from '../ProductDescription';
import ProductPrice from '../ProductPrice'
import ProductInstallments from '../ProductInstallments';

const Product = (props) => (
    <Container onClick={props.onClick}>
        <ProductImage src={props.src} alt={props.alt} />
        <ProductDescription>{props.title}</ProductDescription>
        <ProductPrice format={props.formatPrice} price={props.price} />
        { props.installments ?
            <ProductInstallments installments={props.installments} price={props.price} formatPrice={props.formatPrice} />
        : null }
    </Container>
)

Product.propTypes = {
    onClick: PropTypes.func,
    title: PropTypes.string.isRequired,
    formatPrice: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    installments: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    imageAlt: PropTypes.string,
}

Product.defaultProps = {
    title: 'Nome do Produto',
    formatPrice: 'R$',
    price: 299.5,
    installments: 5,
    imageUrl: "../../assets/images/corinthians1.jpg",
    imageAlt: "Alt Image",
}

export default Product