import React from 'react'
import PropTypes from 'prop-types'

import { Installments } from './styles'

const formatInstallments = (installments, price) => {   
    let quota = price / installments

    quota = quota.toFixed(2).toString().replace('.', ',')

    return `ou ${installments}x R$${quota}`
}

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