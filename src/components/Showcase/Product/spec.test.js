import React from 'react'
import Product from '.'

import '../../../enzyme'

import ProductDescription from '../ProductDescription'

import { shallow } from 'enzyme'

describe('<ProductInstallments />', () => {
    it('should be a instance of ProductInstallments', () => {
        const product = {
            "id": 0,
            "sku": 8552515751438644,
            "title": "Camisa Nike Corinthians I",
            "description": "14/15 s/nº",
            "availableSizes": ["S", "G", "GG", "GGG"],
            "style": "Branco com listras pretas",
            "price": 229.9,
            "installments": 9,
            "currencyId": "BRL",
            "currencyFormat": "R$",
            "isFreeShipping": true
        };

        const productComponent = shallow(
            <Product
                onClick={() => this.handleAdd(product.id)}
                title={product.title}
                formatPrice={product.currencyFormat}
                price={product.price}
                installments={product.installments}
            />
        )

        expect(productComponent.find(ProductDescription)).toEqual({})
        
    })
})