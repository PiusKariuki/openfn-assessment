import DataTable from 'react-data-table-component';
import data from "../../../shared/data/data.json"
import {NavLink} from "react-router";
import {employeesPerProject} from "../helpers/profileHelper.js";

const CompanyProfiles = () => {
    console.log("data", data.projects)

    const headers = [
        {
          name: "Name",
          selector: row => <NavLink className="font-semibold hover:underline hover:text-info-light" to="/profiles">{row.name}</NavLink>
        },
        {
          name: "Sector",
          selector: row => row.sector
        },
        {
          name: "Mission",
          selector: row => row.mission
        },
        {
          name: "# Employees",
          selector: row => employeesPerProject(row.id).length,
            sortable: true
        },
        {
          name: "Actions",
          selector: row => <button className="bg-info-light hover:bg-info text-white  px-6 py-1 rounded-lg">Visit</button>
        },
    ];

    return (
        <div className="flex flex-col p-4 gap-6 w-full">
            <p className="">Project profiles</p>
            <DataTable data={data.projects} columns={headers} />
        </div>
    )
}

export default CompanyProfiles;