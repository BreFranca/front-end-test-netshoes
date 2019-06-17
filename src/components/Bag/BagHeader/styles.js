import styled from 'styled-components'

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 43px 0; 
`

export const CountBag = styled.div`
    position: relative;
`

export const Count = styled.div`
    background: #dfbd00;
    color: #000000;
    width: 19px;
    height: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    border-radius: 50%;
    position: absolute;
    bottom: -7px;
    right: -5px;
`

export const Title = styled.h3`
    color: #FFFFFF;
    text-transform: uppercase;
    margin-left: 23px;
`