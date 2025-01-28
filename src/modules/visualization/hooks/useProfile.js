import data from "../../../shared/data/data.json";
import {employeesPerProject} from "../helpers/profileHelper.js";
import {useParams} from "react-router";

export const useProfile = () => {
    const {projectID} = useParams()

    const project = data.projects.find(project => project.id === projectID);
    const volunteers = employeesPerProject(projectID);

    let projectWorkLogsByDate = data.logs.filter(log => log.project === projectID).sort((a, b) => new Date(a.date) - new Date(b.date));


    projectWorkLogsByDate = projectWorkLogsByDate.reduce((acc, curr) => {
        if (acc.some(log => log.date === curr.date)) {
            acc = acc.map(log => log.date === curr.date ? ({...log, hours: log.hours + curr.duration}) : ({...log}));
            return acc;
        }
        acc.push({date: curr.date, hours: curr.duration});
        return acc;
    }, []);


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

    const malePercentage = (volunteers.filter(volunteer => volunteer.gender === "male").length / volunteers.length * 100).toFixed(2);
    const femalePercentage = (volunteers.filter(volunteer => volunteer.gender === "female").length / volunteers.length * 100).toFixed(2);
    const genderPieChartProps = {
        type: "donut",
        series: [Number(malePercentage), Number(femalePercentage)],
        options: {
            labels: ["Male", "Female"],
            legend: {
                position: "bottom",
            },
            title: {
                text: "Volunteer gender split",
                align: "center",
                style: {
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "#FFFFFF"
                }
            },
            tooltip: {
                enabled: true,
                y: {
                    formatter: value => `${value} %`
                }
            }
        }
    };

    const hoursTimeSeriesProps = {
        type: "line",
        series: [
            {
                name: "Volunteer hours time series",
                data: projectWorkLogsByDate.map(log => ({x: log.date, y: log.hours})),
            }
        ],
        options: {
            chart: {
                zoom: {
                    enabled: false
                }
            },
            stroke: {
                curve: "smooth"
            },
            xaxis: {
                type: "datetime",
                title: {
                    text: "Date"
                }
            },
            yaxis: {
                title: {
                    text: "Hours"
                }
            },
            tooltip: {
                x: {
                    format: "yyyy-mm-dd"
                }
            },
            title: {
                text: "Volunteer hours over time",
                align: "center",
                style: {
                    fontSize: "20px",
                    color: "#FFFFFF"
                }
            }
        }
    }

    return {volunteers, headers, project, genderPieChartProps, hoursTimeSeriesProps};
}