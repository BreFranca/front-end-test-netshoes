import React from 'react'
import { compose } from "redux"
import { connect } from "react-redux"

import * as actions from "../store/actions"

import Product from '../components/Showcase/Product'

class HomeScreen extends React.Component {
    componentDidMount = () => {
        this.props.getProducts()
    }

    handleAdd = (sku) => {
        this.props.addProductCart(sku)
        this.props.toggleBag('show')
    }

    render() {
        const { products } = this.props
        return (
            <div className="homepage">
                <div className="content">
                    <div className="columns">
                        {products && products.map((product, index) => 
                            <div className="col" key={index}>
                                <Product
                                    onClick={() => this.handleAdd(product.id)}
                                    title={product.title}
                                    formatPrice={product.currencyFormat}
                                    price={product.price}
                                    installments={product.installments}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.product.products
    }
}

export default compose(
    connect(
        mapStateToProps,
        actions
    )
)(HomeScreen)