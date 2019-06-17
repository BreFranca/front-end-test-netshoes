import React from 'react'

import { Total, Title, PriceInstallments, Price, Installments } from './styles'

import { formatPrice } from '../../../helpers'

const BagTotal = (props) => (
    <Total>
        <Title>Subtotal</Title>
        <PriceInstallments>
            <Price><div dangerouslySetInnerHTML={{ __html: formatPrice('R$', 255.50) }} /></Price>
            <Installments>ou em até 10 X R$ 37,97</Installments>
        </PriceInstallments>
    </Total>
)

export default BagTotal