import React, { useState } from 'react';
//components
import Board from './Board';
import NewGameButton from './NewGameButton';
import GameStatus from './GameStatus';
//styled components
import { StyledTetris } from './styledComponents/StyledTetris';
//hooks
import { useBoard } from '../hooks/useBoard';
import { usePlayer } from '../hooks/usePlayer';
//others
import { getRandomTetromino } from '../tetrominos';
import { createBoard, outOfBounds } from '../gameEssentials';


const Tetris = () => {
  const [gameOver, setGameOver] = useState(false);
  const [player, setPlayer, updatePosition, newTetroOnBoard] = usePlayer();
  const [board, setBoard] = useBoard( player, newTetroOnBoard);

  const newGame = () =>{
    setBoard(createBoard());
    setGameOver(false);
    newTetroOnBoard();
  }

  const moveTetromino = (e) => {
    if(e.keyCode === 37 && !outOfBounds(player,board, -1)){ //moving left 
      updatePosition(-1,0);
    }
    else if(e.keyCode === 39 && !outOfBounds(player,board, 1)){ //moving right 
      updatePosition(1,0);
    }
    else if(e.keyCode === 40){ //moving down 
      if(!outOfBounds(player,board, 0, 1)){
        updatePosition(0,1);
      }else{
        updatePosition(0, 0, true);
      }
    }
  }

  return (
    <StyledTetris 
    
    role="button"
    tabIndex="0"
    onKeyDown={e => moveTetromino(e)}
    >
      <h1 style= {{color:'white', paddingTop:'0px',textAlign: 'center' }}>hello this is going to be a tetris game</h1>
      <Board board={board} />
      <aside>
        {gameOver ? (<GameStatus text='Game Over' />) :
          (<div>
              <GameStatus text='Score' />
              <GameStatus text='Rows' />
              <GameStatus text='Level' />
            </div>)
        }
        <NewGameButton onClickFunc={newGame} />
      </aside>
    </StyledTetris>
  );
}

export default Tetris;