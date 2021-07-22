import styled from 'styled-components'


export const StyledTetris = styled.div`
    box-sizing: border-box;
    background: url(${props => props.bgImage});
    height: 100vh;
    overflow: auto;
    background-repeat: repeat;
`
