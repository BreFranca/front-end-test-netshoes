import React from 'react'
import { compose } from "redux"
import { connect } from "react-redux"

import * as actions from "../store/actions"

import Product from '../components/Showcase/Product'
import { getImage, getRandomSize } from '../helpers'

class HomeScreen extends React.Component {
    state = {
        products: []
    }
    componentDidMount = () => {
        this.props.getProducts()
        .then(response => {
            this.setState({
                products: response
            })
        })
    }

    handleAdd = (id, sizes) => {
        const size = getRandomSize(sizes)
        this.props.addProductCart(id, size)
        .then(() => {
            this.props.toggleBag('show')
            this.props.getProductsCart()
        })
    }

    render() {
        const { products } = this.state
        return (
            <div className="homepage">
                <div className="content">
                    <div className="columns">
                        {products && products.map((product, index) => 
                            <div className="col" key={index}>
                                <Product
                                    onClick={() => this.handleAdd(product.id, product.availableSizes)}
                                    title={product.title}
                                    imageUrl={getImage(product.id)}
                                    description={product.description}
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