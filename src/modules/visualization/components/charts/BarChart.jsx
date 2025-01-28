import Chart from "react-apexcharts";

export const BarChart = (props) => {

    return(
        <div className="chart-wrapper">
            <Chart {...props} h={48} />
        </div>
    )
}