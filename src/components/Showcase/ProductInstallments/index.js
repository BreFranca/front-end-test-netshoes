import React from 'react'
import PropTypes from 'prop-types'

import { Installments } from './styles'

import { formatInstallments } from '../../../helpers'

const ProductInstallments = (props) => (
    <Installments>{formatInstallments(props.installments, props.price)}</Installments>
)

ProductInstallments.propTypes = {
    installments: PropTypes.number.isRequired
}

ProductInstallments.defaultProps = {
    Installments: 9
}

export default ProductInstallments