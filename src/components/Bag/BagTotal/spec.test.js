import React from 'react'
import BagTotal from '.'

import '../../../enzyme'

import { Price, Installments } from './styles'

import { mount } from 'enzyme'

describe('BagTotal', () => {
    it('should be a instance of BagTotal', () => {
        const component = mount(<BagTotal formatPrice={'R$'} installments={10} amount={100} />)

        expect(component.find(Price).text()).toEqual('R$ 100,00')
        expect(component.find(Installments).text()).toEqual('ou 10x R$10,00')

        component.unmount()
    });

    it('should be a instance of BagTotal with the components `Price and Installments`', () => {
        const component = mount(<BagTotal formatPrice={'R$'} installments={10} amount={100} />)

        expect(component.find(Price)).toHaveLength(1)
        expect(component.find(Installments)).toHaveLength(1)

        component.unmount()
    });
})