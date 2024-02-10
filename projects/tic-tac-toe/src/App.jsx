import { useState } from "react"
import confetti from "canvas-confetti"
import { Square } from "./components/Square"
import { TURNS } from "./contants"
import { checkWinnerFrom, checkEndGame } from "./logic/board"
import { WinnerModal } from "./components/WinnerModal"
import { saveGameStorage, resetGameStorage } from "./logic/storage"

function App() {

  const [board, setBoard] = useState(() =>{ 
      const boardFromLocalStorage = window.localStorage.getItem('board')
      return boardFromLocalStorage ? JSON.parse(boardFromLocalStorage) : Array(9).fill(null)
  })
     
  //Las const con [] son estados.
  const [turn, setTurn] = useState(() =>  {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })
  
  // null sin ganador / false es un empate.
  const[winner,setWinner] = useState(null) 
  
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    //Reset de la partida.
    resetGameStorage()
  }
  
  const updateBoard = (index) => {

    // Si la casilla es esta vacio no actualizar.
    if(board[index] || winner) return
    
    // crear una nueva constante del board  y actualizar en arrglo.
    //actualiza el tablero.
    const newBoard = [...board] 
    newBoard[index] = turn
    setBoard(newBoard)
    
    //Cambiar el turno.
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    //Guardar la partida.
    saveGameStorage({
      board: newBoard, 
      turn: newTurn 
    })

    //revisar si hay ganador
    const newWinner = checkWinnerFrom(newBoard)
    if(newWinner) {
      confetti()
        setWinner(newWinner) 

        //TODO : check if game is over
    } else if(checkEndGame(newBoard)){
      setWinner(false)
    }
  }

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset del Juego</button>
      <section className="game">
        {
          board.map((_, index) =>{
            return(
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
              {board[index]}
              </Square>
            )
          })
        }
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  )
}

export default App
