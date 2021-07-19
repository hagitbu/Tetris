import React, { useContext } from 'react';
import { StyledCell } from './styledComponents/StyledCell';
import { Tetrominos } from '../tetrominos';
import { ThemeContext } from '../contexts/ThemeContext';


const Cell = ({ type }) => {

    const context = useContext(ThemeContext);
    const { isLightTheme, light, dark, toggleTheme } = context;
    const theme = isLightTheme ? light : dark;

    return (
        <StyledCell type={type} color={isLightTheme ? Tetrominos[`${type}`].colorLight : Tetrominos[`${type}`].colorDark}></StyledCell>
    )
}

export default React.memo(Cell);

