import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductLoader from './components/ProductLoader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <ProductLoader/>
    </div>
  )
}

export default App
