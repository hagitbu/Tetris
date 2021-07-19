export const Tetrominos = {
    0 : {
        shape: [[0, 0],
                [0, 0]],
        colorDark: '0, 0, 0',
        colorLight: '250, 250, 250'
    },

    O : {
        shape: [['O', 'O'],
                ['O', 'O']],
        colorDark: '255, 255, 0', 
        colorLight: '253, 230, 176'

    },

    I : {
        shape: [['I', 'I', 'I', 'I'],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]],
        colorDark: '0, 255, 255',
        colorLight: '186, 229, 229'
    },

    T : {
        shape: [['T', 'T', 'T'],
                [0, 'T', 0],
                [0, 0, 0]],
        colorDark: '128, 0, 128',
        colorLight: '243, 209, 244'
    },

    L : {
        shape: [['L', 0, 0],
                ['L', 0, 0],
                ['L', 'L', 0]],
        colorDark: '255, 127, 0',
        colorLight: '251, 198, 135'
    },

    J : {
        shape: [[0, 0, 'J'],
                [0, 0, 'J'],
                [0, 'J', 'J']],
        colorDark: '0, 0, 255',
        colorLight: '152, 214, 234'
    },

    S : {
        shape: [[0, 'S', 'S'],
                ['S', 'S', 0],
                [0, 0, 0]],
        colorDark: '0, 255, 0',
        colorLight: '213, 236, 194'
    },

    Z : {
        shape: [['Z', 'Z', 0],
                [0, 'Z', 'Z'],
                [0, 0, 0]],
        colorDark: '255, 0, 0',
        colorLight: '234, 144, 122'
    }

}

export const getRandomTetromino = () => {
    const tetroString = 'OITLJSZ';
    const randomTetromino = tetroString.charAt(Math.floor(Math.random() * tetroString.length))
    return (Tetrominos[randomTetromino]);

}
