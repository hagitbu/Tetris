import React from 'react';
import { StyledCell } from './styledComponents/StyledCell';
import { Tetrominos } from '../tetrominos';

const Cell = ({ type }) =>{
    return(
        <>
        {console.log('what?????')}
        <StyledCell type={type} color={Tetrominos[type].color}></StyledCell>
        </>
    )
}

export default Cell;

