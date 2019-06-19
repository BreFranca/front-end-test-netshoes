import React from 'react'
import BagButton from '.'

import '../../../enzyme'

import { shallow } from 'enzyme'

describe('BagButton', () => {
    it('should be callback on button click', () => {
        const mockFunc = jest.fn()

        const component = shallow(<BagButton onClick={mockFunc} />)

        component.simulate('click')

        expect(mockFunc).toHaveBeenCalledTimes(1)
    })
})