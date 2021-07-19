import React, { useContext } from 'react';
import Cell from './Cell';
import { StyledBoard } from './styledComponents/StyledBoard';
import { ThemeContext } from '../contexts/ThemeContext';

const Board = ({ board }) => {
    const context = useContext(ThemeContext);
    const { isLightTheme, light, dark } = context;
    const theme = isLightTheme ? light : dark;

    return (
        <StyledBoard
            boardBorder={theme.boardBorder}
            boardBg={theme.boardBg}
            width={board[0].length}
            height={board.length}>
            {board.map(row => row.map((cell, index) => <Cell key={index} type={cell[0]} />))}
        </StyledBoard>
    )

}

export default Board;