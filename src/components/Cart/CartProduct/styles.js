import styled from 'styled-components'

export const Product = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 25px 0;
    margin: 0 35px 0 23px;
    border-bottom: 2px solid #000000;
    &:first-child {
        border-top: 2px solid #000000;
    }
`

export const Descriptions = styled.div`
    margin-left: 20px;
`

export const RightActions = styled.div`
    min-height: 52px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
`