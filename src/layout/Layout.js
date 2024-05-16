import { Outlet } from "react-router-dom/dist"
import { Navbar } from "../components/Navbar/Navbar"

export const Layout = () => {
    return <div className="layout">
        <Navbar></Navbar>
        <Outlet/>
    </div>
}