import api from "./api"
import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./custom-components-css/InputExpenses.css"
import "./custom-components-css/CurrentSpendings.css"
import InputExpenses from "./custom-components/InputExpenses"
// import Greeting from "./custom-components/Greeting"
import CurrentSpendings from "./custom-components/CurrentSpendings"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="main-content-container">
        <div className="greeting-counter-container">
          {/* <Greeting name="Luca" /> */}
          <InputExpenses />
        </div>
        <CurrentSpendings />
      </div>
    </>
  )
}

export default App
