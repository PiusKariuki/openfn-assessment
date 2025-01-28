import data from "../../../shared/data/data.json"
import {NavLink, useParams} from "react-router";
import DataTable from 'react-data-table-component';
import {employeesPerProject} from "../helpers/profileHelper.js";


const Profile = () => {
    const {projectID} = useParams()

    const project = data.projects.find(project => project.id === projectID);
    const volunteers = employeesPerProject(projectID);

    const headers = [
        {
            name: "Name",
            selector: row => `${row.family_name} ${row.first_name}`
        },
        {
            name: "Gender",
            selector: row => row.gender
        },
        {
            name: "Nationality",
            selector: row => row.nationality
        },
        {
            name: "Phone",
            selector: row => row.contact.phone,
        },
        {
            name: "Email",
            selector: row => row.contact.email,
        },
    ];

    return (
        <div className="flex flex-col p-4 gap-6 w-full">
            <div className="flex flex-col gap-2 ">
                <p className="text-xl font-semibold">{project.name}</p>
                <p className="text-italic text-smoke">"{project.mission}"</p>
            </div>

            <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col col-span-full">
                    <DataTable title="Volunteer information" data={volunteers} columns={headers}/>
                </div>

            </div>
        </div>
    )
}

export default Profile;