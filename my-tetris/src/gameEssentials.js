const boardHeight = 20; //rows
const boardWidth = 10; //cols

export const createBoard = () => {

    const fillingArr =  new Array(boardWidth); //cols arr
    fillingArr.fill([0, 'clear']); 

    const filledArr = new Array(boardHeight); //rows arr
    filledArr.fill(fillingArr);

    return(filledArr);
}

    //0 means an empty cell, 'clear' means its not mergend on the board
    // merged is when a tetromino is down and a part of the board

    //clear means we should clear it in the next render, merged means its part of the board for now 
