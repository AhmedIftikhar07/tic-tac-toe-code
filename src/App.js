import React,{useState} from 'react';
import './App.css';
import Board from './components/Board';
import ScoreBoard from './components/ScoreBoard';
import ResetBtn from './components/ResetBtn';


function App() {

  const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ]

  const [board,setBoard]= useState(Array(9).fill(null))
  const [xPlaying, setXPlaying] = useState(true);
  const [scores, setScores] = useState({XScore:0,OScore:0})
  const [gameOver, setGameOver] = useState(false)

  const handleBoxClick = (boxIndex) =>{
    const updateBoard = board.map((value, index)=>{
      if(index === boxIndex){
        return xPlaying === true ? "X": "O";
      }else{
        return value
      }
    })

    const winner = chekWinner(updateBoard)
    if(winner){
      if(winner=== "O"){
        let {OScore} = scores
        OScore += 1
        setScores({...scores, OScore})
      }else{
        let {XScore} = scores
        XScore += 1
        setScores({...scores, XScore})
      }
    }
    
    setBoard(updateBoard)
    setXPlaying(!xPlaying);
  }

  const chekWinner = (board)=>{
    for(let i=0; i<winConditions.length; i++){

      const [x,y,z] = winConditions[i];

      if(board[x] && board[x] === board[y] && board[y] === board[z]){
        setGameOver(true)
        return board[x];
      }
    }
  }

  const resetBoard = ()=>{
    setGameOver(false)
    setBoard(Array(9).fill(null))
  }
  return (
    <div>
      <ScoreBoard scores={scores} xPlaying={xPlaying}></ScoreBoard>
     <Board board={board} onClick={gameOver ? resetBoard : handleBoxClick}></Board>
     <ResetBtn resetBoard={resetBoard}></ResetBtn>
    </div>
  );
}

export default App;
