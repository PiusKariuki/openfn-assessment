const FNSelect = ({options = [], label, id, changeHandler, value}) => {

    return (
        <select
            id={id}
            value={value}
            onChange={changeHandler}
            className="rounded-lg border border-gray-300 bg-gray-100 px-3 py-2 text-sm text-gray-900
            focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400
             dark:focus:ring-primary-800">
            <option value="">{label}</option>
            {options.map(option => (
                <option key={option} value={option}>{option}</option>
            ))}
        </select>
    )
};

export default FNSelect;