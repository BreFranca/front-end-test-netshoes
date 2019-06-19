import styled from 'styled-components'

export const Title = styled.h3`
    font-size: 1em;
    font-weight: 400;
    margin: 8px -20px 14px;
    min-height: 38px;
    position: relative;
    cursor: pointer;
    &::after {
        content: '';
        width: 15px;
        height: 2px;
        background: #dfbd00;
        display: block;
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 7px;
    }
`