import api from "./api"
import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Components imports ----------------------------------------
import InputExpenses from "./custom-components/InputExpenses"
// import Greeting from "./custom-components/Greeting"
import CurrentTotalMonthSpendings from "./custom-components/CurrentTotalMonthSpendings"

// Components CSS imports --------------------------------------
import "./custom-components-css/InputExpenses.css"
import "./custom-components-css/CurrentTotalMonthSpendings.css"
import "./custom-components-css/CurrentTotalMonthBreakdown.css"



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="main-content-container">
        <div className="greeting-counter-container">
          {/* <Greeting name="Luca" /> */}
          <InputExpenses />
        </div>
        <CurrentTotalMonthSpendings />
      </div>
    </>
  )
}

export default App
