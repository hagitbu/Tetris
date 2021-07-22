import { useState } from "react";
import { getRandomTetromino, Tetrominos } from "../tetrominos";
import { boardWidth } from "../gameEssentials"
import { outOfBounds } from '../gameEssentials';

export const useTetro = () => {
    const [currTetro, setCurrTetro] = useState({
        position: { x: boardWidth / 2 - 2, y: 0 },
        tetromino: Tetrominos[0].shape,
        unifiedWithBoard: false
    });

    const updatePosition = (dirX, dirY, unifiedWithBoard = false) => {
        //updates the current tetromino position
        setCurrTetro(prevTetro => {
            return ({
                ...prevTetro,
                position: { x: prevTetro.position.x + dirX, y: prevTetro.position.y + dirY },
                unifiedWithBoard: unifiedWithBoard
            })
        })
    }

    const newTetroOnBoard = () => {
        //sets a new tetromino on the board (relevant after the prev tetromino unified with the board)
        const tetro = getRandomTetromino().shape
        setCurrTetro({
            position: { x: tetro.length > 3 ? boardWidth / 2 - 2 : boardWidth / 2 - 1, y: 0 },
            tetromino: tetro,
            unifiedWithBoard: false
        })
    }

    const rotateTetro = (board) => {
        const tetroToRotate = currTetro.tetromino.slice(); // a copy of the current tetromino
        const rotatedTetro = [];

        for (let i = 0; i < tetroToRotate.length; i++) { // making the new array the same size as the tetromino array
            rotatedTetro[i] = tetroToRotate[i].slice();
        }

        for (let i = 0; i < tetroToRotate.length; i++) { // filling the new array to be the rotated tetromino array
            for (let j = 0; j < tetroToRotate[0].length; j++) {
                rotatedTetro[i][j] = tetroToRotate[tetroToRotate.length - 1 - j][i];
            }
        }

        if (!outOfBounds({
            position: currTetro.position,
            tetromino: rotatedTetro,
            unifiedWithBoard: currTetro.unifiedWithBoard
        }, board, 0, 0)) { //update rotated tetromino if not out of bounds
            setCurrTetro(prevTetro => {
                return ({
                    ...prevTetro,
                    tetromino: rotatedTetro
                })
            })
        }
    }

    return [currTetro, updatePosition, newTetroOnBoard, rotateTetro];

}