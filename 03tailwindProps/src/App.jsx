import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './index.css'
import Card from './Card'



function App() {
  // const [count, setCount] = useState(0)
  let myobj = {
    username: "hitesh",
    age: 21
  }
  let newArr = [1, 2, 3, 4];

  return (
    <>
      <h1 className='bg-green-400 text-yellow-400 p-4 rounded inline-block'>
        hello tailwind</h1>
      <Card name="naincy sahu" my={myobj} arr={newArr} />//hum isme do parameter ase nhi de sakhte
      <Card username="naincy sahu" btnText="click me" />
    </>


  )
}

export default App
