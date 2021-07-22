import { useState, useEffect } from "react";
import { createBoard } from "../gameEssentials";

export const useBoard = (currTetro, newTetroOnBoard) => {
    const [board, setBoard] = useState(createBoard());
    const [clearedRowsCount, setClearedRowsCount] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [dropSpeed, setDropSpeed] = useState(1000);
    const [level, setLevel] = useState(0);
    const [score, setScore] = useState(0);

    const clearFullRows = (updatedBoard) => {
        let totalRowscleared = 0;
        for (let i = 0; i < updatedBoard.length; i++) {
            let tetroCounter = 0;
            for (let j = 0; j < updatedBoard[0].length; j++) {
                if (updatedBoard[i][j][1] === 'unified') {
                    tetroCounter++; //counts how many tetromino cells there are in a row 
                }
            }
            if (tetroCounter === updatedBoard[0].length) {// if there is a full row 
                totalRowscleared++;
                setClearedRowsCount(prev => prev + 1);
                for (let row = i; row > 0; row--) {
                    for (let cell = 0; cell < updatedBoard[0].length; cell++) {
                        updatedBoard[row][cell] = updatedBoard[row - 1][cell]; // updates each cell to be equal to the one above it
                    }
                }
            }
        }
        updateScore(totalRowscleared);
    }

    const updateScore = (totalRowscleared) => { //updates the score according to the num of rows cleared
        if (totalRowscleared === 1) {
            setScore(prev => prev + (40 * (level + 1)));
        } else if (totalRowscleared === 2) {
            setScore(prev => prev + (100 * (level + 1)));
        } else if (totalRowscleared === 3) {
            setScore(prev => prev + (300 * (level + 1)));
        } else if (totalRowscleared >= 4) {
            setScore(prev => prev + (1200 * (level + 1)));
        }
    }

    const setLevelAndSpeed = (rows) => {
        if (rows >= 50) {
            setLevel(5);
            setDropSpeed(150);
        } else if (rows >= 40) {
            setLevel(4);
            setDropSpeed(250);
        } else if (rows >= 30) {
            setLevel(3);
            setDropSpeed(400);
        } else if (rows >= 20) {
            setLevel(2);
            setDropSpeed(550);
        } else if (rows >= 10) {
            setLevel(1);
            setDropSpeed(700);
        } else {
            setLevel(0);
            setDropSpeed(1000);
        }
    }

    // making the updated board
    const updateBoard = prevBoard => {
        //checking each cell if unifiedWithBoard or clear
        const updatedBoard = prevBoard.map(row => row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell)));

        //add the current tetromino to the board
        currTetro.tetromino.map((row, indexRow) => row.map((cell, indexCol) => {
            if (cell !== 0) { //if its a tetromino letter
                if (updatedBoard[currTetro.position.y + indexRow][currTetro.position.x + indexCol][1] !== 'clear') {
                    //if the new tetro is set on top of another tetro then game is over
                    setDropSpeed(null);
                    setGameOver(true);
                }
                updatedBoard[currTetro.position.y + indexRow][currTetro.position.x + indexCol] =
                    [cell, `${currTetro.unifiedWithBoard ? 'unified' : 'clear'}`];
            }
        }));

        if (currTetro.unifiedWithBoard) { //if the prev tetromino unified with the board, show a new tetromino and clear full rows
            clearFullRows(updatedBoard);
            if (currTetro.position.y === 0) {
                //if the current tetro is at the top of the board then game is over 
                setGameOver(true);
                setDropSpeed(null);
            } else {
                newTetroOnBoard();
            }
        }

        return (updatedBoard);
    }

    useEffect(() => {
        setBoard(prevBoard => updateBoard(prevBoard))  //setting the board to the updated one
    }, [currTetro])

    useEffect(() => {
        setLevelAndSpeed(clearedRowsCount)
    }, [clearedRowsCount])

    return [board, setBoard, clearedRowsCount, setClearedRowsCount, gameOver, setGameOver, dropSpeed, setDropSpeed, level, setLevelAndSpeed, score, setScore];

}