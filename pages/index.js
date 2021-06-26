import Head from 'next/head'
import Game from '../components/game'

export default function App() {
  return (
    <div>
      <Head>
        <title>TicTacToe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Game />
    </div>
  )
}
