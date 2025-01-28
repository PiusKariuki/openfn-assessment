import Chart from "react-apexcharts";

export const ChartWrapper = (props) => {

    return(
        <div className="chart-wrapper">
            <Chart {...props} />
        </div>
    )
}