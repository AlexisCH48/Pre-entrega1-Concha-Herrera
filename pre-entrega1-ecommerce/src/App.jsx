import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItenListContainer/ItenListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <div className='App'>
        <ItemListContainer greeting={'Bienvenidos a nuestra pagina'}/>
      </div>
    </>
  )
}

export default App
