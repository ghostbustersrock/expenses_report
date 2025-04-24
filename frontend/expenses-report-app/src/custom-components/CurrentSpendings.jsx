import React, { useEffect, useState } from "react";
import api from "../api";

function CurrentSpendings() {

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
                Current {currentMonth} spendings
            </h2>
            <span className="current-spendings-value">
                £{spendings !== null ? spendings : "Loading..."}
            </span>
        </div>
    )
}

export default CurrentSpendings;