import React, { useState } from "react";
import CustomButton from "./CustomButton";
import api from "../api"

function InputExpenses() {

    const [expenses, setExpenses] = useState({
        rent: "",
        bills: "",
        transportation: "",
        subscriptions: "",
        groceries: "",
        shopping: "",
        eatingOut: "",
        leisure: "",
        drinks: "",
        holidays: "",
        other: "",
    })

    const [operation, setOperation] = useState("")

    const handleChange = (e, key) => {
        setExpenses({ ...expenses, [key]: e.target.value })
    }

    const handleOperationChange = (e) => {
        setOperation(e.target.value)
    }

    const handleSubmit = async () => {
        try {
            const cleanedExpenses = Object.fromEntries(
                Object.entries(expenses).map(([key, value]) => [key, value === "" ? null : Number(value)])
            );

            // cleanedExpenses["operation"] = operation

            const response = await api.post(`/submit-expenses?operation=${operation}`, cleanedExpenses)

            alert(response.data["message"])

        } catch (error) {
            alert(`Submission error: ${error}`)
        }
    }

    return (
        <div className="input-expenses-container">
            <div className="input-expenses-title-container">
                <p>
                    Add or Remove Expenses
                </p>
            </div>
            <div className="input-expenses-header-container">
                <p>
                    Enter your expense and specify whether to add or remove them.
                </p>
            </div>
            <div className="operation-container">
                <div className="operation-header">
                    <p className="operation-text"><b>Operation</b></p>
                </div>
                <div className="operation-selection-container">
                    <label className="radio-wrapper">
                        <input type="radio" name="operation" value="add" className="radio-input" checked={operation === "add"} onChange={handleOperationChange} />
                        <span className="custom-radio"></span>
                        Add Expense
                    </label>
                    <label className="radio-wrapper">
                        <input type="radio" name="operation" value="remove" className="radio-input" checked={operation === "remove"} onChange={handleOperationChange} />
                        <span className="custom-radio"></span>
                        Remove Expense
                    </label>
                </div>
            </div>
            <div className="inputs-container">

                {Object.entries(expenses)
                    .filter(([key]) => key !== "other")
                    .map(([key, value]) => (
                        <div className="input-field-container" key={key}>
                            <label className="label-field" htmlFor={key}>
                                {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                            </label>
                            <input id={key} className="input-field" type="number" value={value ?? ""} onChange={(e) => handleChange(e, key)} />
                        </div>
                    ))}
            </div>
            <div className="input-field-container input-field-container-other">
                <label className="label-field" htmlFor="other">
                    Other
                </label>
                <input id="other" className="input-field" type="number" value={expenses.other ?? ""} onChange={(e) => handleChange(e, "other")} />
            </div>
            <div className="submit-expenses-button-container" onClick={handleSubmit}>
                <CustomButton buttonText="Submit expenses" />
            </div>
        </div >
    )
}

export default InputExpenses;