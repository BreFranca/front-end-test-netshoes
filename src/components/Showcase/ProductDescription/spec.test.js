import React from 'react'
import ProductDescription from '.'

import '../../../enzyme'

import { mount } from 'enzyme'

describe('ProductDescription', () => {
    it('should be a instance of ProductDescription', () => {
        const component = mount(<ProductDescription>Branco com listras pretas</ProductDescription>)

        expect(component.props().children).toEqual('Branco com listras pretas')
        expect(component.props().children).toEqual('Branco com listras pretas')
        expect(component.props().children).toEqual(expect.stringContaining('Branco com listras pretas'))

        component.unmount()
    })
})