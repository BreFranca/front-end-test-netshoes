import React from 'react'
import CartProductTitle from '.'

import '../../../enzyme'

import { shallow } from 'enzyme'

describe('CartProductTitle', () => {
    it('should be a instance of CartProductTitle', () => {
        const installments = shallow(<CartProductTitle>Nome do Produto</CartProductTitle>)

        expect(installments.text()).toEqual('Nome do Produto')

        expect(installments.text()).not.toEqual('Nome do Produto 1')
    })
})