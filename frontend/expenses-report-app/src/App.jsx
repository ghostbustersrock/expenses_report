import api from "./api"
import monthsFormatting from "./constants"
import { useState, useEffect } from 'react'

// Components imports ----------------------------------------
import ExpensesCharts from "./custom-components/ExpensesCharts"
import ExpensesLogs from "./custom-components/ExpensesLogs"
import InputExpenses from "./custom-components/InputExpenses"
import MonthlyBreakdown from "./custom-components/MonthlyBreakdown"

// Components CSS imports --------------------------------------
import './App.css'
import "./custom-components-css/ExpensesCharts.css"
import "./custom-components-css/ExpensesLogs.css"
import "./custom-components-css/InputExpenses.css"
import "./custom-components-css/MonthlyBreakdown.css"



function App() {

  // Get today's date ------
  const today = new Date()
  const month = String(today.getMonth() + 1) // No need to pad as we accept single digits in backend.
  const year = today.getFullYear()
  const todayKey = `${month}-${year}`

  // States ----------------
  const [refreshMonthSpendings, setRefreshMonthSpendings] = useState(0)
  const [spendingsDates, setSpendingsDates] = useState([])
  const [selectedDate, setSelectedDate] = useState(todayKey)

  useEffect(() => {
    const fetchSpendingsDates = async () => {
      try {
        const response = await api.get("/get-spendings-dates")
        const dates = response.data || []

        setSpendingsDates(dates)

        // Always default to today's date.
        setSelectedDate(todayKey)

      } catch (error) {
        alert("Error fetching spendings:", error)
      }
    }

    fetchSpendingsDates()
  }, [todayKey])

  const todayExistsInData = spendingsDates.some(
    d => `${d.month}-${d.year}` === todayKey
  )

  return (
    <>
      <div className="main-content-container">
        <div className="date-selection-container">
          <span className="current-spendings-value">
            <select
              id="datesDropdown"
              className="date-selection-dropdown"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            >

              {/* Show current month even if no data exists */}
              {!todayExistsInData && (
                <option value={todayKey}>
                  {monthsFormatting(todayKey)}
                </option>
              )}

              {/* Dates that actually have data */}
              {spendingsDates.map(({ label, year, month }) => (
                <option
                  key={`${month}-${year}`}
                  value={`${month}-${year}`}
                >
                  {label}
                </option>
              ))}

            </select>
          </span>
        </div>
        <div className="operations-components-containers">
          {selectedDate === todayKey &&
            <div className="show-input-expenses-container">
              <InputExpenses onLoggedExpenses={() => setRefreshMonthSpendings(prev => prev + 1)} />
              <hr className="content-separator" />
            </div>
          }
          <div className="expenses-summaries-components">
            <MonthlyBreakdown selectedDate={selectedDate} refreshTrigger={refreshMonthSpendings} />
            <hr className="content-separator" />
            <ExpensesLogs selectedDate={selectedDate} refreshTrigger={refreshMonthSpendings} />
          </div>
        </div>
        <ExpensesCharts refreshTrigger={refreshMonthSpendings} />
      </div >
    </>
  )
}

export default App
