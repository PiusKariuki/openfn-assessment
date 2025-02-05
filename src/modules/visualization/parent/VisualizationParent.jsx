import {Route, Routes} from "react-router";
import Dashboard from "../views/Dashboard.jsx";
import Sidebar from "../components/Sidebar.jsx";
import {createContext, useEffect, useState} from "react";
import data from "../../../shared/data/data.json"
import {getCountriesWithProjects, getManHours, getWorkers, resetData} from "../helpers/dashHelper.js";
import Projects from "../views/Projects.jsx";
import Profile from "../views/Profile.jsx";

export const DataContext = createContext(null);

const VisualizationParent = () => {
    const [state, setState] = useState({
        sectors: Array.from(new Set(data.projects.map(project => project?.sector))),
        projects: data.projects,
        volunteers: data.volunteers,
        logs: data.logs,
        countriesWithProjects: getCountriesWithProjects(data.projects),
        maleWorkers: getWorkers({gender:"male"}),
        femaleWorkers: getWorkers({gender:"female"}),
        manHours: getManHours({}),
    });

    const [filters, setFilters] = useState({
        sector: ""
    });


    useEffect(() => {
        if(filters.sector === ''){
            setState(resetData());
            return
        }
        if (filters.sector) {
            const projectsInThisSector = data.projects.filter(project => project.sector === filters.sector);
            setState(prev => ({
                ...prev,
                projects: projectsInThisSector,
                countriesWithProjects: getCountriesWithProjects(projectsInThisSector),
                maleWorkers: getWorkers({sector: filters.sector, gender: "male"}),
                femaleWorkers: getWorkers({sector: filters.sector, gender: "female"}),
                manHours: getManHours({sector: filters.sector})
            }))
        }

    }, [filters])


    return (
        <div className="flex h-screen gap-8">
            <DataContext.Provider value={{...state, filters, setFilters}}>
                <Sidebar/>
                <Routes>
                    <Route path="/" element={<Dashboard />}/>
                    <Route path="/projects" element={<Projects />}/>
                    <Route path="/projects/:projectID" element={<Profile />}/>
                </Routes>
            </DataContext.Provider>
        </div>
    )
};

export default VisualizationParent;