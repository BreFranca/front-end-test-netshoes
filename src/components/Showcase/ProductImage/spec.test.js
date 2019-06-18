import React from 'react'
import ProductImage from '.'

import '../../../enzyme'

import { mount } from 'enzyme'

describe('ProductImage', () => {
    it('should be a instance of ProductImage with image', () => {
        const component = mount(<ProductImage src={'../../../assets/images/corinthians1.jpg'} alt="Corinthians 1" />)

        expect(component.props().src).toEqual('../../../assets/images/corinthians1.jpg')
        expect(component.props().alt).toEqual('Corinthians 1')

        component.unmount()
    })

    it('should be a instance of ProductImage without image', () => {
        const component = mount(<ProductImage />)

        expect(component.props().src).toEqual('../../../assets/images/product-blank.jpg')
        expect(component.props().alt).toEqual('Alt Image')

        component.unmount()
    })
})