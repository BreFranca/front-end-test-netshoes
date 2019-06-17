import React from 'react'
import { compose } from "redux"
import { connect } from "react-redux"

import * as actions from "../../store/actions"

import { Container, MaskBag } from './styles'
import Button from '../../components/Button'
import BagHeader from '../../components/Bag/BagHeader'
import CartProduct from '../../components/Cart/CartProduct'
import BagButton from '../../components/Bag/BagButton'
import BagTotal from '../../components/Bag/BagTotal'

class Bag extends React.Component {
    state = {
        show: false
    }

    componentDidMount = () => {
        this.props.getProductsCart()
    }

    handleRemove = (index) => {
        this.props.deleteProductCart(index)
    }

    handleClear = () => {
        this.props.clearCart()
        this.props.getProductsCart()

        setTimeout(function() {
            this.props.toggleBag('hide')
        }.bind(this), 500);
    }

    render() {
        const { cartList, cartAmount, bag, toggleBag } = this.props
        return(
            <Container className={bag === true ? 'show' : null}>
                <MaskBag className={bag === true ? 'show' : null} onClick={() => toggleBag('hide')} />
                <BagHeader total={cartList ? cartList.length : null} />
                <div>
                    <Button onClick={() => this.handleClear()}>Limpar Sacola</Button>
                    { cartList && cartList.map((product, index) => 
                        <CartProduct
                            key={index}
                            title={product.title}
                            size={product.availableSizes[0]}
                            formatPrice={product.currencyFormat}
                            price={product.price}
                            style={product.style}
                            onClick={() => this.handleRemove(product.id)} />
                    ) }
                    {cartList.length > 0 ?
                        <BagTotal
                            formatPrice={cartList ? cartList[0].currencyFormat : 'R$'}
                            installments={cartAmount ? cartAmount.installments : null}
                            amount={cartAmount ? cartAmount.total : null}
                        />
                    : null}
                    <BagButton />
                </div>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cartList: state.cart.cartList,
        bag: state.ui.bag,
        cartAmount: state.cart.cartAmount
    }
}

export default compose(
    connect(
        mapStateToProps,
        actions
    )
)(Bag)