import React from 'react'
import CartProductImage from '.'

import '../../../enzyme'

import { shallow, mount } from 'enzyme'

describe('CartProductImage', () => {
    it('should be a instance of CartProductImage with image', () => {
        const component = mount(<CartProductImage image={'../../../assets/images/corinthians1.jpg'} />)

        expect(component.props().image).toEqual('../../../assets/images/corinthians1.jpg')

        component.unmount()
    })

    it('should be a instance of CartProductImage', () => {
        const component = mount(<CartProductImage />)

        expect(component.props().image).toEqual('../../../assets/images/product-blank.jpg')

        component.unmount()
    })

    it('should be a instance of div', () => {
        const component = shallow(<CartProductImage />)

        expect(component.html()).toEqual('<div style="background-image:url(&#x27;../../../assets/images/product-blank.jpg&#x27;)" class="sc-bdVaJa dCuRHr"></div>')
    })
})