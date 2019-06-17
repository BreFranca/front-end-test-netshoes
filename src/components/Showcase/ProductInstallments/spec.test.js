import React from 'react'
import ProductInstallments from '.'

import '../../../enzyme'

import { shallow, mount } from 'enzyme'

describe('ProductInstallments', () => {
    it('should be a instance of ProductInstallments', () => {
        const installments = shallow(<ProductInstallments installments={8} price={220} />)

        expect(installments.text()).toEqual('ou 8x R$27,50')
        
    })

    it('dsadssda', () => {
        const installments = mount(<ProductInstallments installments={8} price={220} />)
    })
})