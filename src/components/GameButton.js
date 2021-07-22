import React, { useContext } from 'react'
import styled from 'styled-components';
import { ThemeContext } from '../contexts/ThemeContext';

const StyledNewGameButton = styled.button`
    color: white;
    font-size: larger;
    border: 1px solid white;
    border-radius: 10px;
    padding: 15px 40px;
    margin: 15px;
    background-color: ${props => props.newGameBg};
    font-family: Pixel, Arial, Helvetica, sans-serif;
    cursor: pointer;
`;

const GameButton = ({ onClickFunc, text, style }) => {
    const context = useContext(ThemeContext);
    const { isLightTheme, light, dark } = context;
    const theme = isLightTheme ? light : dark;

    return (
        <StyledNewGameButton
            style={style ? style : {}}
            newGameBg={theme.newGameBg}
            onClick={onClickFunc} >{text}</StyledNewGameButton>
    )
}

export default GameButton