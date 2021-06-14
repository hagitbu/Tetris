import React from 'react';
import {getRandomTetromino} from '../tetrominos';
import {createBoard} from '../gameEssentials';
import Board from './Board';
import Cell from './Cell';

const Tetris = () => {
  return(
    <div>
        <h1>hello {getRandomTetromino()} bish this is going to be a tetris game</h1>
        <Board board={createBoard()}/>
        <Cell type={'O'}/>
    </div>
    );
}

export default Tetris;