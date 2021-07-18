import React from 'react'
import { StyledGameStatus } from './styledComponents/StyledGameStatus';

const GameStatus = ( {text, value}) => (
    <StyledGameStatus>{text} {value}</StyledGameStatus>
)



export default GameStatus;