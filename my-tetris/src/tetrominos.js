export const Tetrominos = {
    0 : {
        shape: [[0, 0],
                [0, 0]],
        color: '0, 0, 0'
    },

    O : {
        shape: [['O', 'O'],
                ['O', 'O']],
        color: '255, 255, 0'
    },

    I : {
        shape: [['I', 'I', 'I', 'I'],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]],
        color: '0, 255, 255'
    },

    T : {
        shape: [['T', 'T', 'T'],
                [0, 'T', 0],
                [0, 0, 0]],
        color: '128, 0, 128'
    },

    L : {
        shape: [['L', 0, 0],
                ['L', 0, 0],
                ['L', 'L', 0]],
        color: '255, 127, 0'
    },

    J : {
        shape: [[0, 0, 'J'],
                [0, 0, 'J'],
                [0, 'J', 'J']],
        color: '0, 0, 255'
    },

    S : {
        shape: [[0, 'S', 'S'],
                ['S', 'S', 0],
                [0, 0, 0]],
        color: '0, 255, 0'
    },

    Z : {
        shape: [['Z', 'Z', 0],
                [0, 'Z', 'Z'],
                [0, 0, 0]],
        color: '255, 0, 0'
    }

}

export const getRandomTetromino = () => {
    const tetroString = 'OITLJSZ';
    const randomTetromino = tetroString.charAt(Math.floor(Math.random() * tetroString.length))
    return (Tetrominos[randomTetromino]);

}
