import * as React from 'react'
import { calculateStatus, calculateNextValue, calculateWinner } from '../helpers/boardHelpers'

export default function Board() {
  const [squares, setSquares] = React.useState(Array(9).fill(null))

  const nextValue = calculateNextValue(squares)
  const winner = calculateWinner(squares)
  const status = calculateStatus(winner, squares, nextValue)

  function selectSquare(square) {
    if (winner || squares[square]) {
      return
    }
    const squaresCopy = [...squares]
    squaresCopy[square] = nextValue
    setSquares(squaresCopy)
  }

  function restart() {
    setSquares(Array(9).fill(null))
  }

  function renderSquare(i) {
    return (
      <button className="h-16 w-16 p-0 border border-solid border-gray-500 float-left font-bold text-center text-4xl bg-white -mr-px -mt-px focus:outline-none focus:bg-pink-300 dark:bg-gray-darkest dark:active:bg-red-active" onClick={() => selectSquare(i)}>
        {squares[i]}
      </button>
    )
  }

  return (
    <div>
      <div className="mb-10">{status}</div>
      <div className="after:clear-both after:table">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="after:clear-both after:table">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="after:clear-both after:table">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <button className="mt-10 py-2 px-4 border border-white rounded focus:outline-none hover:bg-white active:bg-pink-200 active:border-pink-200 dark:hover:bg-gray-darkest dark:border-gray-light dark:active:bg-red-active dark:focus:bg-red-active" onClick={restart}>
        Restart
      </button>
    </div>
  )
}
