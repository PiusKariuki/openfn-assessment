import {BarChart} from "./charts/BarChart.jsx";
import {useCharts} from "../hooks/useCharts.js";

export const DashboardBody = () => {
    const {hoursPerCompanyProps} = useCharts()

    return(
        <div className="grid grid-cols-2 gap-8 w-full">
                <BarChart {...hoursPerCompanyProps} />
        </div>
    )
}