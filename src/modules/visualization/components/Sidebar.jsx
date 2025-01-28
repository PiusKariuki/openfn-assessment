import {navLinks} from "../assets/navLinks.js";
import {NavLink} from "react-router";

const Sidebar = () => {
    return (
        <div className="flex flex-col w-48 p-4 border-smoke border-[.5px] h-full bg-coal rounded-md">
            {navLinks.map(link => (
                <NavLink
                    key={link.to}
                    to={link.to}
                    className={({isActive}) => isActive ? "active-link": ""}
                >
                    {link.name}
                </NavLink>
            ))}
        </div>
    )
};

export default Sidebar;