import React from 'react'
import PropTypes from 'prop-types'
import { Image } from './styles'

const ProductImage = (props) => (
    <Image>
        <img {...props} alt={props.alt} />
    </Image>
)

ProductImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string
}

ProductImage.defaultProps = {
    src: "../../../assets/images/product-blank.jpg",
    alt: "Alt Image"
}

export default ProductImage