import React, { useContext } from 'react'
import { StyledGameStatus } from './styledComponents/StyledGameStatus';
import { ThemeContext } from '../contexts/ThemeContext';

const GameStatus = ({ text, value }) => {
    const context = useContext(ThemeContext);
    const { isLightTheme, light, dark } = context;
    const theme = isLightTheme ? light : dark;

    return (
        <StyledGameStatus
        statusFont={theme.statusFont}
        statusBg={theme.statusBg} >
            {text} {value}</StyledGameStatus>
    )
}



export default GameStatus;