import React from 'react'
import { compose } from "redux"
import { connect } from "react-redux"

import * as actions from "../../store/actions"

import { Container, MaskBag } from './styles'
import BagHeader from '../../components/Bag/BagHeader'
import CartProduct from '../../components/Cart/CartProduct'
import BagButton from '../../components/Bag/BagButton'
import BagTotal from '../../components/Bag/BagTotal'

class Bag extends React.Component {
    state = {
        show: false
    }

    componentDidMount = () => {

    }

    render() {
        const { bag, toggleBag } = this.props
        return(
            <Container className={bag == true ? 'show' : null}>
                <MaskBag className={bag == true ? 'show' : null} onClick={() => toggleBag('hide')} />
                <BagHeader />
                <div>
                    <CartProduct />
                    <CartProduct />
                    <BagTotal />
                    <BagButton />
                </div>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        bag: state.ui.bag
    }
}

export default compose(
    connect(
        mapStateToProps,
        actions
    )
)(Bag)