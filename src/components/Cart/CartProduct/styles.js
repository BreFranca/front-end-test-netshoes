import styled from 'styled-components'

export const Product = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 35px 25px 23px;
    border-bottom: 2px solid #000000;
    transition: .4s all linear;
    &:first-child {
        border-top: 2px solid #000000;
    }
    &:hover {
        background: #000000;
        img {
            filter: brightness(1) invert(1)
        }
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

export const LeftInfos = styled.div`
    display: flex;
    align-items: center;
`
