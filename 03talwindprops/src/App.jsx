import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  let myObj = {
    username: "Noorun",
    age: 20
  }
  let newArr = [1, 2, 3, 4]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-4xl'>Tailwind CSS</h1>
      {/* <Card channel="Noor" someObj={myObj} arr={newArr} /> */}
      <Card username="Noor@gmail" btnText="Click me!" />
      <Card username="XYZ" btnText="Visit me!" />

    </>
  )
}

export default App
