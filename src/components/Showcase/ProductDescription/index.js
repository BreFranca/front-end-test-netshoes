import React from 'react'
import PropTypes from 'prop-types'
import { Description } from './styles'

const ProductDescription = (props) => (
    <Description>{props.children}</Description>
)

ProductDescription.propTypes = {
    children: PropTypes.string.isRequired,
}

ProductDescription.defaultProps = {
    children: "Descrição do Produto",
}

export default ProductDescription