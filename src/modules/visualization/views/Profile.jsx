import {useParams} from "react-router";
import DataTable from 'react-data-table-component';
import {useProfile} from "../hooks/useProfile.js";
import {ChartWrapper} from "../components/charts/ChartWrapper.jsx";


const Profile = () => {
    const {projectID} = useParams()

    const {volunteers, headers, project, genderPieChartProps} = useProfile()

    return (
        <div className="flex flex-col p-4 gap-6 w-full">
            <div className="flex flex-col gap-2 ">
                <p className="text-xl font-semibold">{project.name}</p>
                <p className="text-italic text-smoke">"{project.mission}"</p>
            </div>

            <div className="grid grid-cols-2 gap-6  overflow-y-scroll max-h-full">
                <div className="flex flex-col col-span-full">
                    <DataTable title="Volunteer information" data={volunteers} columns={headers}/>
                </div>
                <ChartWrapper {...genderPieChartProps}/>
            </div>
        </div>
    )
}

export default Profile;