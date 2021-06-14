import React from 'react';
import Cell from './Cell';
import { StyledBoard } from './styledComponents/StyledBoard';

const Board = ({ board }) => {
    return (
        <StyledBoard width={board[0].length} height={board.length}>
            {board.map(row => row.map((cell, index) => <Cell key={index} type={cell[0]} />))}
        </StyledBoard>
    )

}

export default Board;