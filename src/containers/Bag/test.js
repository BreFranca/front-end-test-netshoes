import React from 'react'
import Bag from '.'

import '../../enzyme'

import Button from '../../components/Button';
import BagHeader from '../../components/Bag/BagHeader';
import CartProduct from '../../components/Cart/CartProduct';
import BagTotal from '../../components/Bag/BagTotal';
import BagButton from '../../components/Bag/BagButton';

import { shallow, mount } from 'enzyme'

describe('CartProduct', () => {
    const mockFunc = jest.fn()

    const Component = <Bag />

    it('should be a instance of Bag', () => {
        const component = mount(Component)

        // expect(component.props().title).toEqual('Camisa Adidas Futebol III')
        // expect(component.props().size).toEqual('S')
        // expect(component.props().formatPrice).toEqual('R$')
        // expect(component.props().price).toEqual(229)
        // expect(component.props().style).toEqual('Preta e Azul')
        // expect(component.props().onClick).toEqual(mockFunc)

        component.unmount()
    });

    it('should be a instance of Bag', () => {
        const component = shallow(Component)

        // expect(component.find(CartProductImage)).toHaveLength(1)
        // expect(component.find(CartProductTitle)).toHaveLength(1)
        // expect(component.find(CartProductAmount)).toHaveLength(1)
        // expect(component.find(CartProductDelete)).toHaveLength(1)
        // expect(component.find(CartProductPrice)).toHaveLength(1)
        // expect(component.find(CartProductStyle)).toHaveLength(1)

    });

    it('should be a instance of Bag', () => {
        const component = mount(Component)

        // expect(component.find(CartProductImage).text()).toEqual('')
        // expect(component.find(CartProductTitle).text()).toEqual('Camisa Adidas Futebol III 17/18 s/nº')
        // expect(component.find(CartProductAmount).text()).toEqual('Quantidade: 1')
        // expect(component.find(CartProductDelete).text()).toEqual('')
        // expect(component.find(CartProductPrice).text()).toEqual('R$ 229,00')
        // expect(component.find(CartProductStyle).text()).toEqual('S | Preta e Azul')

        component.unmount()

    });

    it('should be a instance of Bag', () => {
        const component = mount(Component)

        // component.find(CartProductDelete).simulate('click')

        // expect(mockFunc).toHaveBeenCalledTimes(1)

        component.unmount()

    });
})