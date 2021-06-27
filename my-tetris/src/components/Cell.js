import React from 'react';
import { StyledCell } from './styledComponents/StyledCell';
import { Tetrominos } from '../tetrominos';

const Cell = ({ type }) =>{
    // console.log('hi isssssfdf');
    // console.log(type);

    // console.log(Tetrominos[`${type}`].color);
    return(
        <>
        <StyledCell type={type} color={Tetrominos[`${type}`].color}></StyledCell>
        </>
    )
}

export default Cell;

