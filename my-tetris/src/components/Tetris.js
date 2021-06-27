import React, { useState } from 'react';
//components
import Board from './Board';
import StartButton from './StartButton';
import GameStatus from './GameStatus';
//styled components
import { StyledTetris } from './styledComponents/StyledTetris';
//hooks
import { useBoard } from '../hooks/useBoard';
import { usePlayer } from '../hooks/usePlayer';
//others
import { getRandomTetromino } from '../tetrominos';
import { createBoard } from '../gameEssentials';


const Tetris = () => {
  const [gameOver, setGameOver] = useState(false);
  const [player, setPlayer, updatePosition] = usePlayer();
  const [board, setBoard] = useBoard(player);


  console.log(player);

  const newGame = () =>{
    setBoard(createBoard());
  }

  const moveTetromino = (e) => {
    if(e.keyCode === 37){ //moving left 
      updatePosition(-1,0);
    }
    else if(e.keyCode === 39){ //moving right 
      updatePosition(1,0);
    }
    else if(e.keyCode === 40){ //moving down 
      updatePosition(0,1);
    }
  }

  return (
    <StyledTetris 
    
    role="button"
    tabIndex="0"
    onKeyDown={e => moveTetromino(e)}
    >
      <h1>hello this is going to be a tetris game</h1>
      <Board board={board} />
      <aside>
        {gameOver ? (<GameStatus text='Game Over' />) :
          (<div>
              <GameStatus text='Score' />
              <GameStatus text='Rows' />
              <GameStatus text='Level' />
            </div>)
        }
        <StartButton onCick={newGame} />
      </aside>
    </StyledTetris>
  );
}

export default Tetris;