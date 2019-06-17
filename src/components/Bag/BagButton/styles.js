import styled from 'styled-components'

export const Button = styled.button`
    appearance: none;
    width: calc(100% - 23px - 35px);
    font-size: 1em;
    font-weight: 700;
    text-transform: uppercase;
    background: #000000;
    color: #FFFFFF;
    border: none;
    box-shadow: none;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: 0 35px 0 23px;
    transition: .4s all linear;
    font-family: inherit;
    &:hover {
        background: rgba(0, 0, 0, .3);
    }
`