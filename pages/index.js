import * as React from 'react'
import Head from 'next/head'
import Game from '../components/game'

export default function App() {
  const [theme, setTheme] = React.useState('light');

  React.useEffect(() => {
    if (window.localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const toggleDarkMode = () => {
    if (theme === 'light') {
      window.localStorage.theme = 'dark'
      setTheme('dark')
    } else {
      window.localStorage.theme = 'light'
      setTheme('light')
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-dark dark:text-white">
      <Head>
        <title>TicTacToe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-white shadow dark:bg-gray-darkest">
        <div className="flex max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="flex-auto text-3xl font-bold text-right dark:text-gray-300">
            <a href="https://github.com/hughbric" target="_blank">hughbric</a>
          </h1>
          <div className="ml-2 py-2 px-4 border border-white rounded focus:outline-none hover:bg-white active:bg-pink-200 active:border-pink-200 dark:hover:bg-gray-darkest dark:border-gray-light dark:active:bg-red-active dark:focus:bg-red-active" onClick={toggleDarkMode}>
            darkMode
          </div>
        </div>
      </header>
      <main className='font-serif'>
        <div className="max-w-md mx-auto mt-14 py-6 sm:px-6 lg:px-8 bg-white dark:bg-gray-darkest rounded-md">
          <div className="max-w-md mx-auto py-6 sm:px-6 lg:px-8 bg-pink-100 rounded-md dark:bg-red-dark">
            <Game />
          </div>
        </div>
      </main>
    </div>
  )
}
