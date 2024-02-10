import { WINNER_COMBOS } from "../contants"

export const checkWinnerFrom = (boardToCheck) => {
    //Revisar las convinaciones.
    for (const combo of WINNER_COMBOS) {

      const [a,b,c] = combo

      if (
        boardToCheck[a] && 
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
          return boardToCheck[a]
      }
    }
    //Sin ganador
    return null
}

export const checkEndGame = (newBoard) => {
    // Revisa si es un empate.
    // Si no hay espacios vacios.
    return newBoard.every((square) => square !== null)
}