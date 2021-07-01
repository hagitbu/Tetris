import { useState, useCallback } from "react";
import { getRandomTetromino, Tetrominos } from "../tetrominos";
import { boardWidth, boardHeight } from "../gameEssentials"

export const usePlayer = () => {
    const [player, setPlayer] = useState({
        position: { x: boardWidth / 2 - 2, y: 0 },
        tetromino: Tetrominos[0].shape,
        unifiedWithBoard: false
    });

    const updatePosition = (dirX, dirY, unifiedWithBoard = false) => {
        setPlayer(prevPlayer => {
            return ({
                ...prevPlayer,
                position: { x: prevPlayer.position.x + dirX, y: prevPlayer.position.y + dirY },
                unifiedWithBoard: unifiedWithBoard
            })
        })
    }

    const newTetroOnBoard = () => { 
            const tetro = getRandomTetromino().shape
            setPlayer({
                position: { x: tetro.length > 3 ? boardWidth / 2 - 2 : boardWidth / 2 - 1, y: 0 },
                tetromino: tetro,
                unifiedWithBoard: false
            })
        }
      
    return [player, setPlayer, updatePosition, newTetroOnBoard];

}