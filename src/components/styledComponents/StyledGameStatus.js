import styled from 'styled-components'


export const StyledGameStatus = styled.div`
    color: ${props => props.statusFont};
    font-size: larger;
    border: 1px solid gray;
    border-radius: 10px;
    padding: 15px 40px;
    margin: 15px;
    background-color: ${props => props.statusBg};


`
