import React from 'react'
import PropTypes from 'prop-types'

import { Total, Title, PriceInstallments, Price, Installments } from './styles'

import { formatPrice, formatInstallments } from '../../../helpers'

const BagTotal = (props) => (
    <Total>
        <Title>Subtotal</Title>
        <PriceInstallments>
            <Price><div dangerouslySetInnerHTML={{ __html: formatPrice(props.formatPrice, props.amount) }} /></Price>
            <Installments>{formatInstallments(props.installments, props.amount, props.formatPrice)}</Installments>
        </PriceInstallments>
    </Total>
)

BagTotal.propTypes = {
    formatPrice: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    installments: PropTypes.number.isRequired,
}

BagTotal.defaultProps = {
    formatPrice: 'R$',
    amount: 0.0,
    installments: 9
}

export default BagTotal