import React from 'react'
import CartProductDescription from '.'

import '../../../enzyme'

import { mount } from 'enzyme'

describe('CartProductDescription', () => {
    it('should be a instance of CartProductDescription', () => {
        const component = mount(<CartProductDescription>Boné Vermelho com Preto</CartProductDescription>)

        expect(component.props().children).toEqual('Boné Vermelho com Preto')
        expect(component.props().children).not.toEqual('Boné Vermelho com Verde')
        expect(component.props().children).toEqual(expect.stringContaining('Boné Vermelho com Preto'))

        component.unmount()
    })
})