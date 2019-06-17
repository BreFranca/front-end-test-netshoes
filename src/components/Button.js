import styled from 'styled-components'

const Button = styled.button`
    appearance: none;
    border: none;
    padding: 10px 15px;
    color: #FFFFFF;
    background: rgba(0, 0, 0, .6);
    margin-right: 35px;
    margin-left: auto;
    display: block;
    max-width: 120px;
    cursor: pointer;
    transition: .4s all linear;
    &:hover {
        background: rgba(255, 255, 255, .6)
    }
`

export default Button