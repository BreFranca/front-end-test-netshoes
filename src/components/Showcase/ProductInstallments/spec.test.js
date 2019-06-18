import React from 'react'
import ProductInstallments from '.'

import '../../../enzyme'

import { shallow, mount } from 'enzyme'

describe('ProductInstallments', () => {
    it('should be a instance of ProductInstallments', () => {
        const installments = shallow(<ProductInstallments installments={9} formatPrice={'R$'} price={220} />)

        expect(installments.text()).toEqual('ou 9x R$24,44')
        
    })

    it('dsadssda', () => {
        const installments = mount(<ProductInstallments installments={8} price={220} />)
    })
})