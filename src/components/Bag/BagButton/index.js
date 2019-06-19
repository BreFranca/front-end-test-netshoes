import React from 'react'
import PropTypes from 'prop-types'

import { Button } from './styles'

const BagButton = (props) => <Button onClick={props.onClick}>Comprar</Button>

BagButton.propTypes = {
    onClick: PropTypes.func.isRequired,
}

export default BagButton