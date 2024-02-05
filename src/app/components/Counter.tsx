"use client"
import { useState } from "react"

export default function Counter() {
  const [counter, setCounter] = useState(0)

  const handleIncrement = () => {
    setCounter(counter => counter + 1)
  }

  const handleDecrement = () => {
    setCounter(counter => counter - 1)
  }

  return (
    <div className="container mx-auto">
      <h1>{counter}</h1>
      <button className="p-2 bg-green-500" onClick={handleIncrement}>Incrementar</button>
      <button className="p-2 bg-red-500" onClick={handleDecrement}>Decrementar</button>
    </div>
  )
}
