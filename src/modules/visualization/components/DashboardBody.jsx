import {ChartWrapper} from "./charts/ChartWrapper.jsx";
import {useCharts} from "../hooks/useCharts.js";

export const DashboardBody = () => {
    const {hoursPerCompanyProps, employeePerCompanyProps} = useCharts()

    return (
        <div className="grid grid-cols-2 gap-8 w-full">
            <ChartWrapper {...hoursPerCompanyProps} />
            <ChartWrapper {...employeePerCompanyProps} />
        </div>
    )
}