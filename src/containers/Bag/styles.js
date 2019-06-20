import styled from 'styled-components'

export const Container = styled.div`
    width: 530px;
    background: #202025;
    position: fixed;
    height: 100%;
    top: 0;
    transition: .4s all linear;
    right: -530px;
    opacity: 0;
    overflow: hidden;
    overflow-y: scroll;
    padding-bottom: 50px;
    &::-webkit-scrollbar {
        display: none;
    }
    &.show {
        right: 0;
        opacity: 1;
    }
    @media(max-width: 580px) {
        width: 70%;
    }
    @media(max-width: 420px) {
        width: 90%;
    }
`

export const MaskBag = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: -1;
    display: none;
    &.show {
        display: block;
    }
`