import { useState } from 'react'
import Header from './components/header/Header'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
    </div>
  )
}

export default App
