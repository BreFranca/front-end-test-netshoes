import React from 'react'

import { Header, CountBag, Title, Count } from './styles'

const BagHeader = (props) => (
    <Header>
        <CountBag><Count>{props.total}</Count><img src="/assets/images/bag.png" alt="Sacola" /></CountBag>
        <Title>Sacola</Title>
    </Header>
)

export default BagHeader