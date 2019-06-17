import React from 'react'
import PropTypes from 'prop-types'

const CartProductDelete = (props) => (
    <img src="../../../assets/images/times.png" alt="Delete" onClick={props.onClick} />
)

CartProductDelete.propTypes = {
    onClick: PropTypes.func.isRequired,
}

export default CartProductDelete