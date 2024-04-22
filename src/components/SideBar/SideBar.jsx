import { useState } from "react";
import { Link } from "react-router-dom";
import Home from "../../assets/svg/Home.svg";
import Video from "../../assets/svg/video.svg";
import Saved from "../../assets/svg/saved.svg";
import Album from "../../assets/svg/Album.svg";
import Group from "../../assets/svg/Group.svg";
import Message from "../../assets/svg/Message.svg";

const SideBar = () => {
    const [activeTab, setActiveTab] = useState("Home");

    const tabs = [
        {
            name: "Trang chủ",
            svg: <img className="ml-[11px]" src={Home} alt=""></img>
            ,
            url: "/Home"
        },
        {
            name: "Video",
            svg: <img className="ml-[11px]" src={Video} alt=""></img>
            ,
            url: "/video",
        },
        {
            name: "Đã lưu",
            svg: <img className="ml-[11px]" src={Saved} alt=""></img>

            ,
            url: "/saved",
        },
        {
            name: "Album",
            svg: <img className="ml-[11px]" src={Album} alt=""></img>
            ,
            url: "/album",
        },
        {
            name: "Nhóm",
            svg: <img className="ml-[11px]" src={Group} alt=""></img>
            ,
            url: "/groups",
        },
        {
            name: "Nhắn tin",
            svg: <img className="ml-[11px]" src={Message} alt=""></img>
            ,
            url: "/message",
        },
    ];


    return (<div className="w-[259px] h-[370px] bg-white border">
        <div className="mt-[18px]">
            {tabs.map(({ name, svg, url }) => (
                <Link to={url} onClick={() => setActiveTab(url)}>
                    <div className={`mt-[10px] py-[2px] w-[200px] h-[40px] ml-[19px] flex rounded-xl 
                    ${activeTab == url ? "bg-[#1B66C9] text-white" : "hover:bg-[#E6E6E6] transition-all"}`}>
                        {svg}
                        <p className="mt-2 ml-[15px]">{name}</p>
                    </div>
                </Link>
            ))}
        </div>

    </div >)
}

export default SideBar