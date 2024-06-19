import { Outlet } from "react-router-dom/dist"
import { Navbar } from "../components/Navbar/Navbar"
export const Layout = () => {
    return <div className="layout">
        <Navbar></Navbar>
        <div className="h-[105px]">
        </div>
        <Outlet/>
    </div>
} 