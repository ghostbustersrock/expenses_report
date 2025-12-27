import api from "./api"
import React, { useState, useEffect } from 'react'
import './App.css'

// Components imports ----------------------------------------
import ExpensesLogs from "./custom-components/ExpensesLogs"
import InputExpenses from "./custom-components/InputExpenses"
import MonthlyBreakdown from "./custom-components/MonthlyBreakdown"

// Components CSS imports --------------------------------------
import "./custom-components-css/ExpensesLogs.css"
import "./custom-components-css/InputExpenses.css"
import "./custom-components-css/MonthlyBreakdown.css"



function App() {
  const [refreshMonthSpendings, setRefreshMonthSpendings] = useState(0)
  const [spendingsDates, setSpendingsDates] = useState(null)
  const [selectedDate, setSelectedDate] = useState("")
  const [latestDate, setLatestDate] = useState("")

  useEffect(() => {
    const fetchSpendingsDates = async () => {
      try {
        const response = await api.get("/get-spendings-dates")

        if (response.data) {
          setSpendingsDates(response.data)

          const recentDate = response.data[0]
          const latest = `${recentDate.month}-${recentDate.year}`

          setLatestDate(latest)
          setSelectedDate(latest)
        }

      } catch (error) {
        alert("Error fetching spendings:", error)
      }
    }

    fetchSpendingsDates()
  }, [])

  // setLatestDate(selectedDate)

  return (
    <>
      <div className="main-content-container">
        <div className="date-selection-container">
          <span className="current-spendings-value">
            {spendingsDates ? (
              <select
                id="datesDropdown"
                className="date-selection-dropdown"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              >
                {spendingsDates.map(({ label, year, month }) => (
                  <option
                    key={`${month}-${year}`}
                    value={`${month}-${year}`}
                  >
                    {label}
                  </option>
                ))}
              </select>
            ) : (
              "Loading dates..."
            )}
          </span>
        </div>
        <div className="operations-summary-containers">
          {/* {
            selectedDate === latestDate && (
              <div>
              </div>
            )
          } */}
          <InputExpenses onLoggedExpenses={() => setRefreshMonthSpendings(prev => prev + 1)} />
          <hr className="content-separator" />
          <MonthlyBreakdown selectedDate={selectedDate} refreshTrigger={refreshMonthSpendings} />
          <hr className="content-separator" />
          <ExpensesLogs selectedDate={selectedDate} refreshTrigger={refreshMonthSpendings} />
        </div>
      </div >
    </>
  )
}

export default App
