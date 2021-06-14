import styled from 'styled-components'


export const StyledBoard = styled.div`
    margin: 20px auto;
    display: grid;
    grid-template-rows: repeat(${props => props.height}, calc(20vw / ${props => props.width}));
    //repeat (how many times to repeat, the size of each one)
    //calc- we want each cell to have the same width and height, because width is 1 fr we make the calc so the height would be the same as the width
    grid-template-columns: repeat(${props => props.width}, 1fr );
    width: 20vw;
    
    background: #333;
    grid-gap: 1px;
    border: 4px solid #888;

`

