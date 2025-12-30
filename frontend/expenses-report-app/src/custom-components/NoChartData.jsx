import "/src/custom-components-css/NoChartData.css"

function NoChartData({ message }) {
    return (
        <div className="no-chart-data">
            <span>{message}</span>
        </div>
    )
}

export default NoChartData