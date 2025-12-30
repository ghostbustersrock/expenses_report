import NoChartData from './NoChartData';

import Box from '@mui/material/Box';
import { BarChart } from '@mui/x-charts/BarChart';

function BarChartComponent({ expenses, label }) {
    return (
        <>
            {
                expenses ? (
                    <div className="spendings-per-month-chart">
                        <Box className="bar-chart-box-component">
                            <BarChart
                                className="bar-chart-component"
                                series={[
                                    { data: expenses["expenses_total"], label: label },
                                ]}
                                xAxis={[{ data: expenses["categories"], label: "Categories" }]}
                                yAxis={[{ label: "Total spent" }]}
                                margin={{ right: 50 }}
                            />
                        </Box>
                    </div>
                ) : (
                    <NoChartData message="There is currently no data" />
                )
            }
        </>
    )
}

export default BarChartComponent