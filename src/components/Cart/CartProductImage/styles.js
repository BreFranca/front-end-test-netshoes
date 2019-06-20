import styled from 'styled-components'

export const Image = styled.div`
    width: 47.5px;
    min-width: 47.5px;
    height: 47.5px;
    background-size: cover;
    background-position: center center;
    display: block;
    @media(max-width: 580px) {
        width: 40px;
        height: 50px;
        min-width: 40px;
    }
`