import React from 'react'
import CartProduct from '.'

import '../../../enzyme'

import CartProductImage from '../CartProductImage';
import CartProductTitle from '../CartProductTitle';
import CartProductAmount from '../CartProductAmount';
import CartProductDelete from '../CartProductDelete';
import CartProductPrice from '../CartProductPrice';
import CartProductStyle from '../CartProductStyle';

import { shallow, mount } from 'enzyme'

describe('CartProduct', () => {
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

    const Product = <CartProduct
        title={product.title}
        description={product.description}
        size={product.availableSizes[0]}
        formatPrice={product.currencyFormat}
        price={product.price}
        style={product.style}
        onClick={mockFunc}
    />

    it('should be a instance of CartProduct with the props', () => {
        const component = mount(Product)

        expect(component.props().title).toEqual('Camisa Adidas Futebol III')
        expect(component.props().size).toEqual('S')
        expect(component.props().formatPrice).toEqual('R$')
        expect(component.props().price).toEqual(229)
        expect(component.props().style).toEqual('Preta e Azul')
        expect(component.props().onClick).toEqual(mockFunc)

        component.unmount()
    });

    it('should be a instance of CartProduct with the specify components', () => {
        const component = shallow(Product)

        expect(component.find(CartProductImage)).toHaveLength(1)
        expect(component.find(CartProductTitle)).toHaveLength(1)
        expect(component.find(CartProductAmount)).toHaveLength(1)
        expect(component.find(CartProductDelete)).toHaveLength(1)
        expect(component.find(CartProductPrice)).toHaveLength(1)
        expect(component.find(CartProductStyle)).toHaveLength(1)

    });

    it('should be a instance of the Components with the specify values', () => {
        const component = mount(Product)

        expect(component.find(CartProductImage).text()).toEqual('')
        expect(component.find(CartProductTitle).text()).toEqual('Camisa Adidas Futebol III 17/18 s/nº')
        expect(component.find(CartProductAmount).text()).toEqual('Quantidade: 1')
        expect(component.find(CartProductDelete).text()).toEqual('')
        expect(component.find(CartProductPrice).text()).toEqual('R$ 229,00')
        expect(component.find(CartProductStyle).text()).toEqual('S | Preta e Azul')

        component.unmount()

    });

    it('should be callback on button click `CartProductDelete`', () => {
        const component = mount(Product)

        component.find(CartProductDelete).simulate('click')

        expect(mockFunc).toHaveBeenCalledTimes(1)

        component.unmount()

    });
})