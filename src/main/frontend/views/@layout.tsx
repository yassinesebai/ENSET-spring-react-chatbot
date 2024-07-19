import {NavLink, Outlet} from "react-router-dom";

export default function Layout(){
    return <div className="p-m">
        <nav className="flex gap-s">
            <NavLink className="btn btn-outline-info" to="/">Home</NavLink>
            <NavLink className="btn btn-outline-info" to="/chat">Chat</NavLink>
            <NavLink className="btn btn-outline-info" to="/person">Person</NavLink>
        </nav>
        <main>
            <Outlet></Outlet>
        </main>
    </div>
}