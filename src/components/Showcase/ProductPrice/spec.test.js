import React from 'react'
import ProductPrice from '.'

import '../../../enzyme'

import { mount } from 'enzyme'

describe('ProductPrice', () => {
    it('should be a instance of ProductPrice', () => {
        const component = mount(<ProductPrice format={'R$'} price={220} />)

        expect(component.text()).toEqual('R$ 220,00')
        
        component.unmount()
    })

    it('should be a instance of ProductPrice', () => {
        const component = mount(<ProductPrice format={'R$'} price={1950.54} />)

        expect(component.text()).toEqual('R$ 1950,54')

        expect(component.text()).not.toEqual('R$ 1950,5')

        component.unmount()
    })
})