import { useEffect, useState } from "react";
import api from "../api";

import CurrentTotalMonthBreakdown from "./CurrentTotalMonthBreakdown"

function CurrentTotalMonthSpendings() {

    const [spendings, setSpendings] = useState(null)

    useEffect(() => {
        const fetchSpendings = async () => {
            try {
                const response = await api.get("/spendings/current-month")
                setSpendings(response.data.total_spent)
            } catch (error) {
                console.error("Error fetching spendings:", error)
                setSpendings("Error")
            }
        }

        fetchSpendings()
    }, [])

    const currentMonth = new Date().toLocaleString("default", { month: "long" })

    return (
        <div className="current-spendings-container">
            <h2 className="current-spendings-header">
                {currentMonth} spendings
            </h2>
            <span className="current-spendings-value">
                Total spendings: £{spendings !== null ? spendings : "Loading..."}
            </span>
            <div className="line-break-total-spendings-container">
                <hr className="line-break-total-spendings" />
            </div>
            <CurrentTotalMonthBreakdown totalSpendings={spendings} />
        </div>
    )
}

export default CurrentTotalMonthSpendings;