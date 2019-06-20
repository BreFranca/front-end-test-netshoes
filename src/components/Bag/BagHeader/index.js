import React from 'react'
import PropTypes from 'prop-types'

import { PUBLIC_URL } from '../../../helpers'

import { Header, CountBag, Title, Count } from './styles'

const BagHeader = (props) => (
    <Header>
        <CountBag><Count>{props.total} </Count><img src={PUBLIC_URL + "/assets/images/bag.png"} alt="Sacola" /></CountBag>
        <Title>Sacola</Title>
    </Header>
)

BagHeader.propTypes = {
    total: PropTypes.number.isRequired,
}

BagHeader.defaultProps = {
    total: 1000,
}

export default BagHeader