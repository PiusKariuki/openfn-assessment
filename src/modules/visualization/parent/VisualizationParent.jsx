import {Route, Routes} from "react-router";
import Dashboard from "../views/Dashboard.jsx";
import Sidebar from "../components/Sidebar.jsx";

const VisualizationParent = () => {
    return (
        <div className="flex h-screen gap-8">
            <Sidebar />
            <Routes>
                <Route path="/" element={<Dashboard />} />
            </Routes>
        </div>
    )
};

export default VisualizationParent;