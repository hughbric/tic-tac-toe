import Head from 'next/head'
import Game from '../components/game'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>TicTacToe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 text-right">
            <a href="https://github.com/hughbric" target="_blank">hughbric</a>
          </h1>
        </div>
      </header>
      <main className='font-serif'>
        <div className="max-w-md mx-auto mt-14 py-6 sm:px-6 lg:px-8 bg-white rounded-md">
          <div className="max-w-md mx-auto py-6 sm:px-6 lg:px-8 bg-pink-100 rounded-md">
            <Game />
          </div>
        </div>
      </main>
    </div>
  )
}
