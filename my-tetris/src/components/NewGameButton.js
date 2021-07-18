import React from 'react'
import styled from 'styled-components';

const StyledNewGameButton = styled.button`
    color: white;
    font-size: larger;
    border: 1px solid white;
    border-radius: 10px;
    padding: 15px 40px;
    margin: 15px;
    background-color: #8a0049;
    font-family: Pixel, Arial, Helvetica, sans-serif;
    cursor: pointer;
`;
const NewGameButton = ({onClickFunc}) => {
    return(
        <StyledNewGameButton onClick={onClickFunc} >New Game</StyledNewGameButton>
    )
}

export default NewGameButton