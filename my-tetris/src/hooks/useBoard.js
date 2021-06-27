import { useState, useEffect } from "react";
import { createBoard } from "../gameEssentials";

export const useBoard = (player) => {
    const [board, setBoard] = useState(createBoard());

    useEffect(() => {

        // making the updated board
        const updateBoard = prevBoard => {
            //checking each cell if unifiedWithBoard or clear
            const updatedBoard = prevBoard.map(row => row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell)));

            //add the current tetromino to the board
            player.tetromino.map((row, indexRow) => row.map((cell, indexCol) => {
                if (cell !== 0) { //tetromino letter
                    updatedBoard[player.position.y + indexRow][player.position.x + indexCol] =
                    [cell, `${player.unifiedWithBoard ? 'unified' : 'clear'}`];
                }
                console.log(updatedBoard);
            }));

            return (updatedBoard);
        }
        setBoard(prevBoard => updateBoard(prevBoard))
    }, [player])

    return [board, setBoard];

}