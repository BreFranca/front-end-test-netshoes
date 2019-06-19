import React from 'react'
import Product from '.'

import '../../../enzyme'

import ProductImage from '../ProductImage'
import ProductTitle from '../ProductTitle'
import ProductPrice from '../ProductPrice'
import ProductInstallments from '../ProductInstallments'

import { shallow, mount } from 'enzyme'

describe('Product', () => {
    const mockFunc = jest.fn()

    const product = {
        "id": 0,
        "sku": 8552515751438644,
        "title": "Camisa Adidas Futebol III",
        "description": "17/18 s/nº",
        "availableSizes": ["S", "G", "GG", "GGG"],
        "style": "Preta e Azul",
        "price": 229,
        "installments": 5,
        "currencyId": "BRL",
        "currencyFormat": "R$",
        "isFreeShipping": true
    };

    const Component = <Product
        title={product.title}
        description={product.description}
        size={product.availableSizes[0]}
        formatPrice={product.currencyFormat}
        price={product.price}
        style={product.style}
        onClick={mockFunc}
    />

    it('<Product /> has specify props', () => {
        const component = mount(Component)

        expect(component.props().title).toEqual('Camisa Adidas Futebol III')
        expect(component.props().size).toEqual('S')
        expect(component.props().formatPrice).toEqual('R$')
        expect(component.props().price).toEqual(229)
        expect(component.props().style).toEqual('Preta e Azul')
        expect(component.props().onClick).toEqual(mockFunc)

        component.unmount()
    });

    it('<Product /> has specify Components', () => {
        const component = shallow(Component)

        expect(component.find(ProductImage)).toHaveLength(1)
        expect(component.find(ProductTitle)).toHaveLength(1)
        expect(component.find(ProductPrice)).toHaveLength(1)
        expect(component.find(ProductInstallments)).toHaveLength(1)

    });

    it('components into <Product /> return exact values', () => {
        const component = mount(Component)

        expect(component.find(ProductImage).text()).toEqual('')
        expect(component.find(ProductTitle).text()).toEqual('Camisa Adidas Futebol III 17/18 s/nº')
        expect(component.find(ProductPrice).text()).toEqual('R$ 229,00')
        expect(component.find(ProductInstallments).text()).toEqual('ou 5x R$45,80')

        component.unmount()

    });

    it('should be called on click', () => {
        const component = mount(Component)

        component.simulate('click')

        expect(mockFunc).toHaveBeenCalledTimes(1)

        component.unmount()

    });
})