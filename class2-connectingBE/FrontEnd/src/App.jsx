import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
      .then(res => {
        setJokes(res.data)
      })
  }, [])
  return (
    <>
      <h1>Jokes with Khan</h1>
      <h2>Jokes: {jokes.length}</h2>

      {
        jokes.map(joke => (
          <div key={joke.id}>
            <h3>{joke.joke}</h3>
          </div>
        ))
      }
    </>
  )
}

export default App
