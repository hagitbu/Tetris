import React, { useCallback } from 'react';
//components
import Board from './Board';
import NewGameButton from './NewGameButton';
import GameStatus from './GameStatus';
//styled components
import { StyledTetris } from './styledComponents/StyledTetris';
//hooks
import { useBoard } from '../hooks/useBoard';
import { useTetro } from '../hooks/useTetro';
import { useInterval } from '../hooks/useInterval';
//others
import { createBoard, outOfBounds } from '../gameEssentials';


const Tetris = () => {

  const [currTetro, updatePosition, newTetroOnBoard, rotateTetro] = useTetro();
  const [board, setBoard, clearedRowsCount, setClearedRowsCount, gameOver, setGameOver, dropSpeed, setDropSpeed, level, setLevelAndSpeed, score, setScore] = useBoard(currTetro, newTetroOnBoard);

  const newGame = () => {
    setBoard(createBoard());
    setGameOver(false);
    newTetroOnBoard();
    setClearedRowsCount(0);
    setLevelAndSpeed(0);
    setScore(0);
  }

  const keyUp = ({ keyCode }) => {
    if (!gameOver) {
      // Activate the interval again when user releases down arrow.
      if (keyCode === 40) {
        setLevelAndSpeed(clearedRowsCount);
      }
    }
  };


  const moveTetromino = (e) => {
    e.preventDefault();
    if (!gameOver) {
      if (e.keyCode === 37 && !outOfBounds(currTetro, board, -1)) { //moving left 
        updatePosition(-1, 0);
      }
      else if (e.keyCode === 38) { // up key - rotate tetromino
        rotateTetro(board);
      }
      else if (e.keyCode === 39 && !outOfBounds(currTetro, board, 1)) { //moving right 
        updatePosition(1, 0);
      }
      else if (e.keyCode === 40) { //moving down 
        setDropSpeed(null);
        moveDown();
      }
    }
  }

  const moveDown = () => {
    if (!outOfBounds(currTetro, board, 0, 1)) {
      updatePosition(0, 1);
    } else {
      updatePosition(0, 0, true);
    }
  }

  useInterval(() => { // activating the moving down interval
    moveDown();
  }, dropSpeed)


  return (
    <StyledTetris
      role="button"
      tabIndex="0"
      onKeyDown={e => moveTetromino(e)}
      onKeyUp={keyUp}>

      <h1 style={{ color: 'white', marginTop: '3vh', textAlign: 'center', textShadow: '4px 4px 19px rgba(150, 150, 152, 1)' }}>TETRIS</h1>
      <div style={{position:'relative', width:'20vw', margin:'auto'}}> 
        <Board board={board} />
        <div style={{ width: 'fit-content', position: 'absolute', top:'0', left:'-250px'}}>
          <aside style={{ width: 'fit-content' }}>
          {gameOver ? (<GameStatus text='Game Over' />) :
              (<></>)
            }
          <div>
                <GameStatus text='Score' value={score} />
                <GameStatus text='Rows' value={clearedRowsCount} />
                <GameStatus text='Level' value={level} />
              </div>

            <NewGameButton onClickFunc={newGame} />
          </aside>
        </div>
      </div>
    </StyledTetris>
  );
}

export default Tetris;