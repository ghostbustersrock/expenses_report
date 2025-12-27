import api from "../api"
import { useEffect, useState } from "react"
import monthsFormatting from "../constants"

function ExpensesLogs({ selectedDate, refreshTrigger }) {

    const [logs, setLogs] = useState(null)

    useEffect(() => {
        const fetchMonthExpenses = async () => {
            try {
                const response = await api.get(`/get-logs?selected_date=${selectedDate}`)
                setLogs(response.data)
            } catch (error) {
                alert("Error fetching expenses:", err)
            }
        }

        fetchMonthExpenses()

    }, [refreshTrigger, selectedDate])


    function constructLogMessage(log) {

        const dateText = `${log["year"]}-${log["month"]}-${log["day"]}`

        const operationType = log["operation"]
        const operationClass = `log-${operationType.toLowerCase()}`

        return (
            <span className="log">
                {dateText} <span className={operationClass}>{operationType}</span> £{log["amount"]} in {log["category"]}
            </span>
        )
    }


    return (
        <div className="logs-component">
            <div className="logs-component-header">
                <b>{monthsFormatting(selectedDate)} logs</b>
            </div>
            <div className="logs-parent-container">
                {
                    logs && logs.map((log) => (
                        <div key={log["id"]} className="log-container">
                            {constructLogMessage(log)}
                            <hr className="log-line-break" />
                        </div>
                    ))
                }
            </div>
        </div >
    )
}

export default ExpensesLogs