import React from 'react'
import PropTypes from 'prop-types'

import { Button } from './styles'

const CartProductDelete = (props) => <Button src="../../../assets/images/times.png" alt="Delete" onClick={props.onClick} />

CartProductDelete.propTypes = {
    onClick: PropTypes.func.isRequired,
}

export default CartProductDelete