import {getEmployeesPerCompany, getTopManHoursCompanies} from "../helpers/dashHelper.js";

export const useCharts = () => {
    const hoursPerCompany = getTopManHoursCompanies();

    const hoursPerCompanyProps = {
        type: "bar",
        options: {
            chart: {
                id: "hoursPerCompany",
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: "55%",
                }
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                categories: hoursPerCompany.map(item=> item.project.name.length > 8 ? `${item.project.name.substring(0, 8)}...` : item.project.name),
                title: {
                    text: "Projects",
                    style: {
                        color: "#FFFFFF"
                    }
                },
                labels: {
                    style: {
                        colors: "#a9a9a9"
                    }
                }
            },
            yaxis: {
                title: {
                    text: "hours",
                    style: {
                        color: "#FFFFFF"
                    }
                },
                labels: {
                    style: {
                        colors: "#a9a9a9"
                    }
                }
            },
            title: {
                text: "Man hours per project",
                align: "center",
                style: {
                    color: "#FFFFFF",
                    fontSize: "20px"
                }
            },
            tooltip: {
                enabled: true,
                x: {
                    show: true,
                    formatter: value => `Project: ${value}`
                },
                y: {
                    show: true,
                    formatter: value => `Hours: ${value}`
                },
                theme: "dark",
            }
        },
        series: [
            {
                name: 'hours',
                data: hoursPerCompany.map(item=> item.hours)
            }
        ]
    }
    // ............................................................................................
    const employeesPerCompany = getEmployeesPerCompany()
    const employeePerCompanyProps = {
        type: "bar",
        options: {
            chart: {
                id: "employeesPerCompany",
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: "55%",
                }
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                categories: employeesPerCompany.map(item=> item.project.name.length > 8 ? `${item.project.name.substring(0, 8)}...` : item.project.name),
                title: {
                    text: "Project",
                    style: {
                        color: "#FFFFFF"
                    }
                },
                labels: {
                    style: {
                        colors: "#a9a9a9"
                    }
                }
            },
            yaxis: {
                title: {
                    text: "hours",
                    style: {
                        color: "#FFFFFF"
                    }
                },
                labels: {
                    style: {
                        colors: "#a9a9a9"
                    }
                }
            },
            title: {
                text: "Employees hours per project",
                align: "center",
                style: {
                    color: "#FFFFFF",
                    fontSize: "20px"
                }
            },
            tooltip: {
                enabled: true,
                x: {
                    show: true,
                    formatter: value => `Project: ${value}`
                },
                y: {
                    show: true,
                    formatter: value => `Hours: ${value}`
                },
                theme: "dark",
            },
        },
        series: [
            {
                name: 'hours',
                data: employeesPerCompany.map(item=> item.employees)
            }
        ]
    }


    return {hoursPerCompanyProps, employeePerCompanyProps}
}