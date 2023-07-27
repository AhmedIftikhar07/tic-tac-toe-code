import React from 'react'
import './ResetBtn.css'

const ResetBtn = ({resetBoard}) => {
  return (
    <div>
      <button className='resetBtn' onClick={resetBoard}>Restart</button>
    </div>
  )
}

export default ResetBtn
