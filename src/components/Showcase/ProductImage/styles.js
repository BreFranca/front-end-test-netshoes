import styled from 'styled-components'

export const Image = styled.div`
    max-width: 180px;
    margin: 0 auto 8px;
    cursor: pointer;
    overflow: hidden;
    max-height: 230px;
    img {
        min-height: 230px;
        // max-width: 100%;
        width: 100%:
        max-width: 180px;
        position: relative;
        transition: .4s all linear;
    }
    &:hover {
        img {
            opacity: .6;
        }
    }
`