import { useState } from "react";
import { getRandomTetromino } from "../tetrominos";

export const usePlayer = () => {
    const [player, setPlayer] = useState({
        position: { x: 0, y: 0 },
        tetromino: getRandomTetromino().shape,
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

    return [player, setPlayer, updatePosition];

}