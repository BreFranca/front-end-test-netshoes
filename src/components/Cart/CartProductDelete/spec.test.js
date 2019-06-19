import React from 'react'
import CartProductDelete from '.'

import '../../../enzyme'

import { shallow } from 'enzyme'

describe('CartProductDelete', () => {
    it('should be called on click', () => {
        const mockFunc = jest.fn()

        const component = shallow(<CartProductDelete onClick={mockFunc} />)

        component.simulate('click')

        expect(mockFunc).toHaveBeenCalledTimes(1)
    })
})