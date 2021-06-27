import Board from './board'

export default function Game() {
  return (
    <div className="m-5 text-sm place-items-center grid text-center">
      <h1 className='text-6xl mb-6'>Tic Tac Toe</h1>
      <div className="game-board">
        <Board />
      </div>
    </div>
  )
}
