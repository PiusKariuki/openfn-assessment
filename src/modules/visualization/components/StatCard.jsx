const StatCard = ({title, stat, subStat = null}) => {
    return (
        <div className="flex p-3 flex-col bg-coal rounded-lg w-full gap-2">
            <div className="text-info-lighter">{title}</div>
            <div className="flex flex-row justify-between">
                <p className="text-2xl font-bold">{stat}</p>
                <p className="text-[22px] text-[#A9A9A9]">{subStat}</p>
            </div>
        </div>
    )
};

export default StatCard;