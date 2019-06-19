import React from 'react'
import CartProductDelete from '.'

import '../../../enzyme'

import { shallow } from 'enzyme'

describe('CartProductDelete', () => {
    const mockFunc = { 
        Mock: jest.fn()
    }

    const spyMock = jest.spyOn(mockFunc, 'Mock');

    it('should call delete item on button click', () => {
        const component = shallow(<CartProductDelete onClick={spyMock} />)

        // component.find('img').simulate('click');

        expect(spyMock).toHaveBeenCalled()

        spyMock.mockRestore()
    })
})