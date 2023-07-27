import React from 'react'
import './ScoreBoard.css'

const ScoreBoard = ({scores, xPlaying}) => {
    const {XScore,OScore} = scores
  return (
    <div className='scoreBoard'>
      <span className={`score x-score ${!xPlaying && "inactive"}`}>X - {XScore}</span>
      <span className={`score o-score ${xPlaying && "inactive"}`}>O - {OScore}</span>
    </div>
  )
}

export default ScoreBoard
