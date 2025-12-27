import api from "../api"
import { useEffect, useState } from "react"
import monthsFormatting from "../constants"

function ExpensesLogs({ selectedDate, refreshTrigger }) {

    const [logs, setLogs] = useState(null)

    useEffect(() => {
        const fetchMonthExpenses = async () => {
            try {
                const response = await api.get("/get-logs")
                setLogs(response.data)
            } catch (error) {
                alert("Error fetching expenses:", err)
            }
        }

        fetchMonthExpenses()

    }, [refreshTrigger])


    return (
        <div className="logs-component">
            <div className="logs-component-header">
                <b>{monthsFormatting(selectedDate)} logs</b>
            </div>
            <div className="logs-parent-container">
                {
                    logs && logs.map((log) => (
                        <div key={log["id"]} className="log-container">
                            <span className="log">
                                {log["date"]} <span className={`log-${log["type"].toLowerCase()}`}>{log["type"]}</span> £{log["amount"]} in {log["category"]}
                            </span>
                            <hr className="log-line-break" />
                        </div>
                    ))
                }
            </div>
        </div >
    )
}

export default ExpensesLogs