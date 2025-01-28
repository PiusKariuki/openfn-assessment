import FNSelect from "../../../shared/components/FNSelect.jsx";
import {useContext} from "react";
import {DataContext} from "../parent/VisualizationParent.jsx";
import StatCard from "../components/StatCard.jsx";
import {useDashboard} from "../hooks/useDashboard.js";
import {DashboardBody} from "../components/DashboardBody.jsx";

const Dashboard = () => {
    const {
        sectors,
        projects,
        countriesWithProjects,
        maleWorkers,
        femaleWorkers,
        manHours,
        setFilters,
        filters
    } = useContext(DataContext)

    const {handleSectorChange} = useDashboard({setFilters});

    const stats = [
        {
            title: "Projects",
            stat: projects.length
        },
        {
            title: "Countries with projects",
            stat: countriesWithProjects?.length
        },
        {
            title: "Male workers",
            stat: maleWorkers.length,
            subStat: `${(maleWorkers.length / (maleWorkers.length + femaleWorkers.length) * 100).toFixed(2)}%`,
        },
        {
            title: "Female workers",
            stat: femaleWorkers.length,
            subStat: `${(femaleWorkers.length / (maleWorkers.length + femaleWorkers.length) * 100).toFixed(2)}%`,
        },
        {
            title: "Man hours",
            stat: manHours,
        },
    ];

    return (
        <div className="flex flex-col p-4 gap-6 w-full">
            <p className="text-xl text-silk font-semibold">OpenFN Dashboard</p>
            <div className="flex w-full">
                <FNSelect value={filters.sector} label="Sectors" options={sectors} changeHandler={handleSectorChange}/>
            </div>

            <div className="flex w-full justify-between gap-3">
                {stats.map(stat => (
                    <StatCard key={stat.title} {...stat} />
                ))}
            </div>


            <div className="flex flex-col w-full">
                <DashboardBody />
            </div>
        </div>
    )
};

export default Dashboard;