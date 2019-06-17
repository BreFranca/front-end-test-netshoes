import React from 'react'

import { Header, CountBag, Title, Image, Count } from './styles'

const BagHeader = (props) => (
    <Header>
        <CountBag><Count>3</Count><img src="/assets/images/bag.png" /></CountBag>
        <Title>Sacola</Title>
    </Header>
)

export default BagHeader