export const useDashboard = ({setFilters}) =>{
    const handleSectorChange = (evt) => {
        setFilters(prev => ({...prev, sector: evt.target.value}))
    }


   return {handleSectorChange};
}