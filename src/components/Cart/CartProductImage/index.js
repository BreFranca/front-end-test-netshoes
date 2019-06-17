import React from 'react'
import PropTypes from 'prop-types'

import { Image } from './styles'

const CartProductImage = (props) => (
    <Image style={{backgroundImage: `url('${props.image}')`}}></Image>
)

CartProductImage.propTypes = {
    image: PropTypes.string.isRequired
}

CartProductImage.defaultProps = {
    image: '../../../assets/images/corinthians1.jpg'
}

export default CartProductImage