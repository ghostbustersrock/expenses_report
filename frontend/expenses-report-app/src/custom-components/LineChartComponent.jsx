import NoChartData from './NoChartData';

import Box from '@mui/material/Box';
import { LineChart } from '@mui/x-charts/LineChart';

function LineChartComponent({ expenses, isCategoryGraph, category }) {

    const baseSeriesLabel = "Monthly spendings"
    const noDataMessage = "There is currently no data"

    const chartSeriesLabel = isCategoryGraph ? `${baseSeriesLabel} for ${category.toLowerCase()}` : "Total monthly spendings"
    const noChartMessage = isCategoryGraph ? `${noDataMessage} ${category.toLowerCase()}` : noDataMessage

    return (
        <>
            {
                expenses ? (
                    <div className="spendings-per-month-chart">
                        <Box className="line-chart-box-component">
                            <LineChart
                                className="line-chart-component"
                                series={[
                                    { data: expenses["expenses_total"], label: chartSeriesLabel },
                                ]}
                                xAxis={[{ scaleType: 'point', data: expenses["dates"], label: "Dates" }]}
                                yAxis={[{ label: "Total spent" }]}
                                margin={{ right: 50 }}
                            />
                        </Box>
                    </div>
                ) : (
                    <NoChartData message={noChartMessage} />
                )
            }
        </>
    )
}

export default LineChartComponent