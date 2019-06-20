import React from 'react'
import PropTypes from 'prop-types'

import { PUBLIC_URL } from "../../../helpers"

import { Button } from './styles'

const CartProductDelete = (props) => <Button src={PUBLIC_URL + "/assets/images/times.png"} alt="Delete" onClick={props.onClick} />

CartProductDelete.propTypes = {
    onClick: PropTypes.func.isRequired,
}

export default CartProductDelete