import React from 'react'

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

    handleClose = () => {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        return(
            <Container className={this.state.show ? 'show' : null}>
                <MaskBag className={this.state.show ? 'show' : null} onClick={this.handleClose} />
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

export default Bag