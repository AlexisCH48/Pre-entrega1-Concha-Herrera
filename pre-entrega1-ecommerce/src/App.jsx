import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItenListContainer/ItenListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <NavBar/>
        <ItemListContainer greeting={'Bienvenidos'}/>
      </div>
    </>
  )
}

export default App
