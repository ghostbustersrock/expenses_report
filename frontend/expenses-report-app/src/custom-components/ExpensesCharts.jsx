import api from '../api';
import { expenseCategories } from '../constants';
import { useState, useEffect } from "react";

import BarChartComponent from './BarChartComponent';
import LineChartComponent from './LineChartComponent';


function ExpensesCharts({ refreshTrigger }) {

    const [expensesPerMonth, setExpensesPerMonth] = useState(null)
    const [selectedCategory, setSelectedCategory] = useState(expenseCategories[0])
    const [categoryMonthlyExpense, setCategoryMonthlyExpense] = useState(null)
    const [categoryAllTimeExpenses, setCategoryAllTimeExpenses] = useState(null)

    useEffect(() => {
        const fetchExpensesPerMonth = async () => {
            try {
                const response = await api.get("/get-total-spendings-per-month")
                setExpensesPerMonth(response.data)
            } catch (err) {
                alert("Error fetching total spendings per month:", err)
            }
        }

        fetchExpensesPerMonth()
    }, [refreshTrigger])

    useEffect(() => {
        const fetchAllTimeCategorySpendings = async () => {
            try {
                const response = await api.get("/get-all-time-categories-spendings")
                setCategoryAllTimeExpenses(response.data)
            } catch (err) {
                alert("Error fetching all time categories spendings:", err)
            }
        }

        fetchAllTimeCategorySpendings()
    }, [refreshTrigger])

    useEffect(() => {
        const fetchCategoryMonthlyExpense = async () => {
            try {
                const response = await api.get(`/get-category-spendings-per-month?category=${selectedCategory.toLowerCase()}`)
                setCategoryMonthlyExpense(response.data)
            } catch (err) {
                alert("Error fetching category spendings per month:", err)
            }
        }

        fetchCategoryMonthlyExpense()
    }, [selectedCategory])

    return (
        <div className="charts-container">
            <div className="total-spendings-per-month-container">
                <span className="total-spendings-per-month-header">All time total monthly spendings</span>
                <LineChartComponent expenses={expensesPerMonth} isCategoryGraph={false} category="" />
            </div>
            <div className="category-monthly-spendings-container">
                <div className="mothly-spendings-header">
                    <span>
                        Monthly spendings for{" "}
                        <select
                            id="categoriesDropdown"
                            className="category-selection-dropdown"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            {expenseCategories.map((category) => (
                                <option
                                    key={category.toLowerCase()}
                                    value={category}
                                >
                                    {category.toLowerCase()}
                                </option>
                            ))}
                        </select>
                    </span>
                </div>
                <LineChartComponent expenses={categoryMonthlyExpense} isCategoryGraph={true} category={selectedCategory} />
            </div>
            <div className="all-total-spendings-categories">
                <span className="total-spendings-per-month-header">All time categories spendings</span>
                <BarChartComponent expenses={categoryAllTimeExpenses} label="All time categories spendings" />
            </div>
            {/* TODO: add a bar chart with overall total spendings of all time for each category - ranking */}
        </div>
    )
}


export default ExpensesCharts