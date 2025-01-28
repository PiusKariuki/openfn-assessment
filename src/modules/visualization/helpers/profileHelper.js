import database from "../../../shared/data/data.json"


export const employeesPerProject  = (projectId) => {

    const logsForProject = database.logs.filter(log => log.project === projectId);
    const volunteersFromLogs = database.volunteers.filter(volunteer=>
        logsForProject.some(log => log.volunteer === volunteer.id));

    return volunteersFromLogs.reduce((prev, curr) => {
        if (prev.some(volunteer => volunteer.id === curr.id))
            return prev;
        prev.push(curr);
        return prev;
    }, [])
}