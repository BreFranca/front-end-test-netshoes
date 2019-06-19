import React from 'react'
import BagHeader from '.'

import '../../../enzyme'

import { mount } from 'enzyme'

describe('BagHeader', () => {
    it('should be a instance of BagHeader', () => {
        const component = mount(<BagHeader total={10} />)

        expect(component.props().total).toEqual(10)
        expect(component.props().total).not.toEqual(15)

        expect(component.text()).toEqual('10 Sacola')
        expect(component.text()).not.toEqual('10')

        component.unmount()
    });
})