import { Outlet } from "react-router-dom/dist"
import { Navbar } from "../components/Navbar/Navbar"
import { PopupMessageDetail } from "../components/Navbar/PopupMessageDetail"

export const Layout = () => {
    return <div className="layout">
        <Navbar></Navbar>
        <PopupMessageDetail></PopupMessageDetail>
        <Outlet/>
    </div>
} 