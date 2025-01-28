import database from "../../../shared/data/data.json"

export const getCountriesWithProjects = (data)=>{
    return data.reduce((prev, curr) => {
        if (prev?.some(a => a.address.country === curr.address.country))
            return prev;
        prev?.push(curr)
        return prev;
    }, []);
}

export const getWorkers = ({sector =null, gender}) =>{
    if(!sector){
        return database.volunteers.filter(item => item.gender === gender)
    }

    const projectsInSector = database.projects.filter(project => project.sector=== sector);
    const logsForProject = database.logs.filter(log => projectsInSector.some(project => project.id === log.project));
    const volunteersFromLogs = database.volunteers.filter(volunteer=>
        logsForProject.some(log => log.volunteer === volunteer.id) && (volunteer.gender === gender));

    return volunteersFromLogs.reduce((prev, curr) => {
        if (prev.some(volunteer => volunteer.id === curr.id))
            return prev;
        prev.push(curr);
        return prev;
    }, [])
}


export const getManHours = ({sector = null}) => {
    if(!sector)
        return database.logs.reduce((prev, curr)=>{
        prev += curr.duration
        return prev;
    }, 0);

    const projectsInSector = database.projects.filter(project => project.sector=== sector);
    const logsForProject = database.logs.filter(log => projectsInSector.some(project => project.id === log.project));

    return logsForProject.reduce((prev, curr)=> {
        prev += curr.duration
        return prev;
    },0);
}

export const resetData = () => {
    return {
        sectors: Array.from(new Set(database.projects.map(project => project?.sector))),
        projects: database.projects,
        volunteers: database.volunteers,
        logs: database.logs,
        countriesWithProjects: getCountriesWithProjects(database.projects),
        maleWorkers: getWorkers({gender:"male"}),
        femaleWorkers: getWorkers({gender:"female"}),
        manHours: getManHours({})
    }
}