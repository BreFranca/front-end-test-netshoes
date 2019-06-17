import React from 'react'
import PropTypes from 'prop-types'
import { Image } from './styles'

const ProductImage = (props) => (
    <Image {...props} />
)

ProductImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string
}

ProductImage.defaultProps = {
    src: "../../assets/images/corinthians1.jpg",
    alt: "Alt Image"
}

export default ProductImage