import React from 'react'
import PropTypes from 'prop-types'
import { Title } from './styles'

const ProductTitle = (props) => (
    <Title>{props.children}</Title>
)

ProductTitle.propTypes = {
    children: PropTypes.string.isRequired,
}

ProductTitle.defaultProps = {
    children: "Descrição do Produto",
}

export default ProductTitle