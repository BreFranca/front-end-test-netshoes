import React from 'react'
import CartProductPrice from '.'

import '../../../enzyme'

import { mount } from 'enzyme'

describe('CartProductPrice', () => {
    it('should be a instance of CartProductPrice with price in the format', () => {
        const component = mount(<CartProductPrice format={'R$'} price={532.0} />)

        expect(component.text()).toEqual('R$ 532,00')
        
        component.unmount()
    })

    it('should be a instance of CartProductPrice with price in the format', () => {
        const component = mount(<CartProductPrice format={'R$'} price={1950.54} />)

        expect(component.text()).toEqual('R$ 1950,54')

        expect(component.text()).not.toEqual('R$ 1950,5')

        component.unmount()
    })

    it('should be a instance of CartProductPrice with price in the format', () => {
        const component = mount(<CartProductPrice format={'R$'} price={233} />)

        expect(component.text()).toEqual('R$ 233,00')

        expect(component.text()).not.toEqual('$233,3')

        component.unmount()
    })
})