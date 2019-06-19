import React from 'react'
import CartProductAmount from '.'

import '../../../enzyme'

import { mount } from 'enzyme'

describe('CartProductAmount', () => {
    it('should be a instance of CartProductAmount', () => {
        const component = mount(<CartProductAmount amount={10} />)

        expect(component.text()).toEqual('Quantidade: 10')
        expect(component.text()).not.toEqual('10')

        component.unmount()
    });
})