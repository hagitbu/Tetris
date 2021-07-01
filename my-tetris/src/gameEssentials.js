export const boardHeight = 20; //rows
export const boardWidth = 10; //cols

export const createBoard = () => {

    const fillingArr = new Array(boardWidth); //cols arr
    fillingArr.fill([0, 'clear']);
    //0 means an empty cell, 'clear' means its not unified with the board
    //clear means we should clear it in the next render, unified meana its part of the board for now 

    const filledArr = new Array(boardHeight); //rows arr
    filledArr.fill(fillingArr);

    return (filledArr);
}

export const outOfBounds = (player, board, dirX, dirY = 0) => {
    for (let y = 0; y < player.tetromino.length; y++) {
        for (let x = 0; x < player.tetromino[0].length; x++) {
            if (player.tetromino[y][x] !== 0) { //checking each tetromino cell (with a tetromino, not 0) if its out of bounds 
                if (player.position.y + dirY + y > boardHeight - 1 //checking the bottom border
                    ||
                    player.position.x + dirX + x > boardWidth - 1 //checking the right border
                    ||
                    player.position.x + dirX + x < 0 //checking the left border
                    ||
                    board[player.position.y + dirY + y][player.position.x + dirX + x][1] !== 'clear'
                ) {
                    return true; //out of bounds
                }
            }
        }
    }
    return false;// false means we can move, and we are not out of bounds
}