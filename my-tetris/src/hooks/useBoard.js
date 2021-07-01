import { useState, useEffect } from "react";
import { createBoard } from "../gameEssentials";

export const useBoard = (player, newTetroOnBoard) => {
    const [board, setBoard] = useState(createBoard());

    useEffect(() => {

        // making the updated board
        const updateBoard = prevBoard => {
            //checking each cell if unifiedWithBoard or clear
            const updatedBoard = prevBoard.map(row => row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell)));

            //add the current tetromino to the board
            player.tetromino.map((row, indexRow) => row.map((cell, indexCol) => {
                if (cell !== 0) { //if its a tetromino letter
                    updatedBoard[player.position.y + indexRow][player.position.x + indexCol] =
                    [cell, `${player.unifiedWithBoard ? 'unified' : 'clear'}`];
                }
            }));

            return (updatedBoard);
        }
        setBoard(prevBoard => updateBoard(prevBoard))  //setting the board to the updated one

        if(player.unifiedWithBoard){
            newTetroOnBoard();
        }

    }, [player])

    return [board, setBoard];

}