import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Mensagem from './componets/Mensagem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Hello World 🌏</h1> 

     <h2>go home 🚀</h2>

     <h3> you can't help me ? 👹</h3>

     <h4> test</h4>

     <h5>1 2 3... testando</h5>

     <h6>no ideal</h6>

     <p>este é meu primeiro React </p>

      {/* Componente */}
     <Mensagem/>
    </>
  )
}
