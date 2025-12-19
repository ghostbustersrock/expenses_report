import { useEffect, useState, useSyncExternalStore } from "react"
import api from "../api"


function CurrentTotalMonthBreakdown({ totalSpendings }) {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const [monthlySalary, setMonthlySalary] = useState(null)

    useEffect(() => {
        const fetchExpensesBreakdown = async () => {
            try {
                const response = await api.get("/current-month-expenses-breakdown")
                setData(response.data)
            } catch (err) {
                console.error("Error fetching expenses:", err)
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        fetchExpensesBreakdown()

    }, [])


    const savedAmount = monthlySalary == null ? null : Number(monthlySalary) - totalSpendings
    const moneyStatusClass = savedAmount == null ? "" : savedAmount > 0 ? "money-saved" : "money-not-saved"

    function updateTotalSavedMoney(value) {

        setMonthlySalary(null)

        if (value) {
            setMonthlySalary(value)
        }

    }

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error loading data.</p>
    if (!data) return <p>No expense data found.</p>

    const entries = Object.entries(data).sort(
        ([a], [b]) => Number(a) - Number(b)
    );

    return (
        <div className="monthly-spendings-breakdown-component">
            <div className="spendings-breakdown-component">
                <div className="expenses-table-container">
                    {entries.map(([id, info]) => (
                        <div className="expense-info-container" key={id}>
                            <div className="expense-info">
                                <span>
                                    <strong>{info.category}: </strong>{info.total_expense}
                                </span>
                                <hr className="break-line" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <hr className="grid-break-line" />
            <div className="money-saved-calculator-container">
                <div className="money-saved-info">
                    <div className="salary-input-container">
                        £
                        <input
                            id="monthlySalary"
                            type="number"
                            className="monthly-salary-input"
                            onChange={(e) => updateTotalSavedMoney(e.target.value)}
                        />
                        <div className="info-wrapper">
                            <span className="info-tag">
                                i
                            </span>
                            <span className="info-box">
                                Input your salary to see how much you spent this month
                            </span>
                        </div>
                    </div>
                    <span className="total-spent-money">- {totalSpendings}</span>
                    <div className="money-saved-container">
                        = <span className={savedAmount < 0 ? "show-negative-sign" : "hide-negative-sign"}>-</span><span className={`pound-sterling ${moneyStatusClass}`}>£</span>
                        <span className={moneyStatusClass}>{savedAmount < 0 ? savedAmount * -1 : savedAmount}
                        </span>
                    </div>
                    <hr className="money-saved-line-break" />
                </div>
            </div>
        </div >
    )
}

export default CurrentTotalMonthBreakdown