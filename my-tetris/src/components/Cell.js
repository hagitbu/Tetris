import React from 'react';
import { StyledCell } from './styledComponents/StyledCell';
import { Tetrominos } from '../tetrominos';

const Cell = ({ type }) =>{
    return(      
        <StyledCell type={type} color={Tetrominos[`${type}`].color}></StyledCell>
    )
}

export default React.memo(Cell);

