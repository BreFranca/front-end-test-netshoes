import React from 'react'

import { Total, Title, PriceInstallments, Price, Installments } from './styles'

import { formatPrice, formatInstallments } from '../../../helpers'

const BagTotal = (props) => (
    <Total>
        <Title>Subtotal</Title>
        <PriceInstallments>
            <Price><div dangerouslySetInnerHTML={{ __html: formatPrice(props.formatPrice, props.amount) }} /></Price>
            <Installments>{formatInstallments(props.Installments, props.amount)}</Installments>
        </PriceInstallments>
    </Total>
)

export default BagTotal