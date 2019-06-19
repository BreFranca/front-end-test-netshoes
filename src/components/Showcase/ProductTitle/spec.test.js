import React from 'react'
import ProductTitle from '.'

import '../../../enzyme'

import { mount } from 'enzyme'

describe('ProductTitle', () => {
    it('should be a instance of ProductTitle', () => {
        const component = mount(<ProductTitle>Branco com listras pretas</ProductTitle>)

        expect(component.props().children).toEqual('Branco com listras pretas')
        expect(component.props().children).toEqual('Branco com listras pretas')
        expect(component.props().children).toEqual(expect.stringContaining('Branco com listras pretas'))

        component.unmount()
    })
})