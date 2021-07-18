export const boardHeight = 20; //rows
export const boardWidth = 10; //cols

export const createBoard = () => {

    const fillingArr = new Array(boardWidth); //cols arr
    fillingArr.fill([0, 'clear']);
    //0 means an empty cell, not a tetromino 
    //clear means its not unified with the board and we should clear it in the next render, unified means its part of the board for now 

    const filledArr = new Array(boardHeight); //rows arr
    filledArr.fill(fillingArr);

    return (filledArr);
}

export const outOfBounds = (currTetro, board, dirX, dirY = 0) => {
    for (let y = 0; y < currTetro.tetromino.length; y++) {
        for (let x = 0; x < currTetro.tetromino[0].length; x++) {
            if (currTetro.tetromino[y][x] !== 0) { //checking each tetromino cell (with a tetromino, not 0) if its out of bounds 

                if (currTetro.position.y + dirY + y > boardHeight - 1 //checking the bottom border
                    ||
                    currTetro.position.x + dirX + x > boardWidth - 1 //checking the right border
                    ||
                    currTetro.position.x + dirX + x < 0 //checking the left border
                    ||
                    board[currTetro.position.y + dirY + y][currTetro.position.x + dirX + x][1] !== 'clear'
                ) {
                    
                    return true; //out of bounds
                }
            }
        }
    }
    return false;// false means we can move, and we are not out of bounds
}