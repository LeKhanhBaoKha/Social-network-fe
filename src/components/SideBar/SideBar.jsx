import { useState } from "react";
import { Link } from "react-router-dom";


const SideBar = () => {
    const [activeTab, setActiveTab] = useState("Trang chủ");

    const tabs = [
        {
            name: "Trang chủ",
            svg: <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-[11px]">
                <g clip-path="url(#clip0_87_80)">
                    <path d="M7 15V28.8462C7 29.1522 7.12877 29.4457 7.35798 29.662C7.58719 29.8784 7.89807 30 8.22222 30H14.3333V26.1223V20.7692H21.6667V30H27.7778C28.1019 30 28.4128 29.8784 28.642 29.662C28.8712 29.4457 29 29.1522 29 28.8462V15" fill="url(#paint0_linear_87_80)" />
                    <path d="M4.79999 16.8L16.38 6.264C16.8224 5.85924 17.4003 5.63477 18 5.63477C18.5996 5.63477 19.1776 5.85924 19.62 6.264L31.2 16.8" fill="url(#paint1_linear_87_80)" />
                </g>
                <defs>
                    <linearGradient id="paint0_linear_87_80" x1="6.44999" y1="24.1304" x2="29.4519" y2="30.7435" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FFE607" />
                        <stop offset="0.879282" stop-color="#FF7E07" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_87_80" x1="4.13998" y1="12.431" x2="28.7392" y2="23.8325" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FFE607" />
                        <stop offset="0.879282" stop-color="#FF7E07" />
                    </linearGradient>
                    <clipPath id="clip0_87_80">
                        <rect width="36" height="36" fill="white" />
                    </clipPath>
                </defs>
            </svg>
            ,
            url: "Home"
        },
        {
            name: "Video",
            svg: <svg className="ml-[11px]" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 7.875C2.25 6.01104 3.76104 4.5 5.625 4.5H30.375C32.239 4.5 33.75 6.01104 33.75 7.875V28.125C33.75 29.989 32.239 31.5 30.375 31.5H5.625C3.76104 31.5 2.25 29.989 2.25 28.125V7.875ZM5.625 7.3125C5.625 7.00184 5.87684 6.75 6.1875 6.75H9.5625C9.87316 6.75 10.125 7.00184 10.125 7.3125C10.125 7.62316 9.87316 7.875 9.5625 7.875H6.1875C5.87684 7.875 5.625 7.62316 5.625 7.3125ZM6.1875 28.125C5.87684 28.125 5.625 28.3768 5.625 28.6875C5.625 28.9982 5.87684 29.25 6.1875 29.25H9.5625C9.87316 29.25 10.125 28.9982 10.125 28.6875C10.125 28.3768 9.87316 28.125 9.5625 28.125H6.1875ZM12.375 7.3125C12.375 7.00184 12.6268 6.75 12.9375 6.75H16.3125C16.6232 6.75 16.875 7.00184 16.875 7.3125C16.875 7.62316 16.6232 7.875 16.3125 7.875H12.9375C12.6268 7.875 12.375 7.62316 12.375 7.3125ZM12.9375 28.125C12.6268 28.125 12.375 28.3768 12.375 28.6875C12.375 28.9982 12.6268 29.25 12.9375 29.25H16.3125C16.6232 29.25 16.875 28.9982 16.875 28.6875C16.875 28.3768 16.6232 28.125 16.3125 28.125H12.9375ZM19.125 7.3125C19.125 7.00184 19.3768 6.75 19.6875 6.75H23.0625C23.3732 6.75 23.625 7.00184 23.625 7.3125C23.625 7.62316 23.3732 7.875 23.0625 7.875H19.6875C19.3768 7.875 19.125 7.62316 19.125 7.3125ZM19.6875 28.125C19.3768 28.125 19.125 28.3768 19.125 28.6875C19.125 28.9982 19.3768 29.25 19.6875 29.25H23.0625C23.3732 29.25 23.625 28.9982 23.625 28.6875C23.625 28.3768 23.3732 28.125 23.0625 28.125H19.6875ZM25.875 7.3125C25.875 7.00184 26.1268 6.75 26.4375 6.75H29.8125C30.1232 6.75 30.375 7.00184 30.375 7.3125C30.375 7.62316 30.1232 7.875 29.8125 7.875H26.4375C26.1268 7.875 25.875 7.62316 25.875 7.3125ZM26.4375 28.125C26.1268 28.125 25.875 28.3768 25.875 28.6875C25.875 28.9982 26.1268 29.25 26.4375 29.25H29.8125C30.1232 29.25 30.375 28.9982 30.375 28.6875C30.375 28.3768 30.1232 28.125 29.8125 28.125H26.4375Z" fill="url(#paint0_linear_87_154)" />
                <path d="M29.5 10.125H6.5C5.39543 10.125 4.5 11.0204 4.5 12.125V23.875C4.5 24.9796 5.39543 25.875 6.5 25.875H29.5C30.6046 25.875 31.5 24.9796 31.5 23.875V12.125C31.5 11.0204 30.6046 10.125 29.5 10.125Z" fill="url(#paint1_linear_87_154)" />
                <path d="M14.0625 21.6629V14.337C14.0625 13.7206 14.7071 13.3162 15.2623 13.5842L22.59 17.1223C23.2105 17.4219 23.2225 18.3012 22.6104 18.6176L15.2827 22.4055C14.7261 22.6932 14.0625 22.2893 14.0625 21.6629Z" fill="url(#paint2_linear_87_154)" />
                <defs>
                    <linearGradient id="paint0_linear_87_154" x1="33.75" y1="31.5" x2="7.06765" y2="0.370587" gradientUnits="userSpaceOnUse">
                        <stop offset="0.210629" stop-color="#2E2E41" />
                        <stop offset="1" stop-color="#566C80" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_87_154" x1="18" y1="10.125" x2="18" y2="25.875" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#F15700" />
                        <stop offset="1" stop-color="#FF0000" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_87_154" x1="14.0625" y1="13.5" x2="23.0625" y2="22.5" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop offset="0.705" stop-color="#EAEFEF" />
                    </linearGradient>
                </defs>
            </svg>
            ,
            url: "video",
        },
        {
            name: "Đã lưu",
            svg: <svg className="ml-[11px]" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_87_103)">
                    <path d="M27 33C26.803 33 26.608 32.9612 26.426 32.8858C26.244 32.8104 26.0787 32.6999 25.9395 32.5605L18 25.911L9.978 32.6355C9.75966 32.82 9.49331 32.9386 9.21008 32.9773C8.92685 33.0161 8.63844 32.9734 8.37856 32.8543C8.11868 32.7353 7.89806 32.5447 7.74248 32.3048C7.58691 32.065 7.5028 31.7859 7.5 31.5V4.5C7.5 4.10218 7.65804 3.72064 7.93934 3.43934C8.22064 3.15804 8.60218 3 9 3H27C27.3978 3 27.7794 3.15804 28.0607 3.43934C28.342 3.72064 28.5 4.10218 28.5 4.5V31.5C28.5 31.8978 28.342 32.2794 28.0607 32.5607C27.7794 32.842 27.3978 33 27 33Z" fill="url(#paint0_linear_87_103)" />
                </g>
                <defs>
                    <linearGradient id="paint0_linear_87_103" x1="6.97499" y1="21.2609" x2="30.3069" y2="24.4624" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FFE607" />
                        <stop offset="0.879282" stop-color="#FF7E07" />
                    </linearGradient>
                    <clipPath id="clip0_87_103">
                        <rect width="36" height="36" fill="white" />
                    </clipPath>
                </defs>
            </svg>

            ,
            url: "/saved",
        },
        {
            name: "Album",
            svg: <svg className="ml-[11px]" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.25 7.875C2.25 6.01104 3.76104 4.5 5.625 4.5H30.375C32.239 4.5 33.75 6.01104 33.75 7.875V27.5625C33.75 29.7371 31.9871 31.5 29.8125 31.5H5.625C3.76104 31.5 2.25 29.989 2.25 28.125V7.875Z" fill="url(#paint0_linear_87_66)" />
                <path d="M20.8125 15.1875C22.3658 15.1875 23.625 13.9283 23.625 12.375C23.625 10.8217 22.3658 9.5625 20.8125 9.5625C19.2592 9.5625 18 10.8217 18 12.375C18 13.9283 19.2592 15.1875 20.8125 15.1875Z" fill="url(#paint1_linear_87_66)" />
                <path d="M33.75 25.0413L29.241 21.8817C28.2401 21.1803 26.9059 21.2095 25.936 21.954L13.5 31.5H30.375C32.239 31.5 33.75 29.9738 33.75 28.0912V25.0413Z" fill="url(#paint2_linear_87_66)" />
                <path d="M5.46429 31.5C3.68909 31.5 2.25 30.0775 2.25 28.3227L13.7074 19.6938C14.8643 18.8225 16.5024 18.9668 17.4852 20.0266L28.125 31.5H5.46429Z" fill="url(#paint3_linear_87_66)" />
                <defs>
                    <linearGradient id="paint0_linear_87_66" x1="2.25" y1="4.5" x2="28.9324" y2="35.6294" gradientUnits="userSpaceOnUse">
                        <stop offset="0.202906" stop-color="#EFF2F6" />
                        <stop offset="0.849731" stop-color="#B7C6CD" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_87_66" x1="23.625" y1="15.1875" x2="18" y2="9.5625" gradientUnits="userSpaceOnUse">
                        <stop offset="0.251598" stop-color="#FF7E07" />
                        <stop offset="1" stop-color="#FFE607" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_87_66" x1="13.5" y1="21.375" x2="21.6" y2="37.575" gradientUnits="userSpaceOnUse">
                        <stop offset="0.419" stop-color="white" />
                        <stop offset="0.705" stop-color="#EAEFEF" />
                    </linearGradient>
                    <linearGradient id="paint3_linear_87_66" x1="28.125" y1="31.5" x2="18.4915" y2="11.3573" gradientUnits="userSpaceOnUse">
                        <stop offset="0.160411" stop-color="#5200FF" />
                        <stop offset="0.849439" stop-color="#0085FF" />
                    </linearGradient>
                </defs>
            </svg>
            ,
            url: "album",
        },
        {
            name: "Nhóm",
            svg: <svg className="ml-[11px]" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 33C3 26.3726 8.37258 21 15 21C21.6274 21 27 26.3726 27 33H24C24 28.0294 19.9706 24 15 24C10.0294 24 6 28.0294 6 33H3ZM15 19.5C10.0275 19.5 6 15.4725 6 10.5C6 5.5275 10.0275 1.5 15 1.5C19.9725 1.5 24 5.5275 24 10.5C24 15.4725 19.9725 19.5 15 19.5ZM15 16.5C18.315 16.5 21 13.815 21 10.5C21 7.185 18.315 4.5 15 4.5C11.685 4.5 9 7.185 9 10.5C9 13.815 11.685 16.5 15 16.5ZM27.4256 22.0542C31.5966 23.9341 34.5 28.128 34.5 33H31.5C31.5 29.346 29.3224 26.2006 26.1942 24.7906L27.4256 22.0542ZM26.3943 5.11981C29.3916 6.35555 31.5 9.30542 31.5 12.75C31.5 17.0553 28.2063 20.5878 24 20.9664V17.9469C26.545 17.5833 28.5 15.396 28.5 12.75C28.5 10.679 27.3024 8.88904 25.5615 8.03452L26.3943 5.11981Z" fill="url(#paint0_linear_87_34)" />
                <defs>
                    <linearGradient id="paint0_linear_87_34" x1="34.5" y1="33" x2="3" y2="1.5" gradientUnits="userSpaceOnUse">
                        <stop offset="0.339254" stop-color="#089953" />
                        <stop offset="1" stop-color="#16D96F" />
                    </linearGradient>
                </defs>
            </svg>
            ,
            url: "groups",
        },
        {
            name: "Nhắn tin",
            svg: <svg className="ml-[11px]" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.0625 2.25C3.5092 2.25 2.25 3.5092 2.25 5.0625V17.4375C2.25 18.9908 3.5092 20.25 5.0625 20.25H7.11588L5.12576 23.9719C4.87222 24.446 5.43032 24.9397 5.92256 24.6767L14.2071 20.25H23.0625C24.6158 20.25 25.875 18.9908 25.875 17.4375V5.0625C25.875 3.5092 24.6158 2.25 23.0625 2.25H5.0625Z" fill="url(#paint0_linear_87_169)" />
                <path d="M6.75 9C6.75 8.37868 7.25368 7.875 7.875 7.875H20.25C20.8713 7.875 21.375 8.37868 21.375 9C21.375 9.62132 20.8713 10.125 20.25 10.125H7.875C7.25368 10.125 6.75 9.62132 6.75 9Z" fill="url(#paint1_linear_87_169)" />
                <path d="M7.875 12.375C7.25368 12.375 6.75 12.8787 6.75 13.5C6.75 14.1213 7.25368 14.625 7.875 14.625H11.25C11.8713 14.625 12.375 14.1213 12.375 13.5C12.375 12.8787 11.8713 12.375 11.25 12.375H7.875Z" fill="url(#paint2_linear_87_169)" />
                <path d="M14.625 12.375C14.0037 12.375 13.5 12.8787 13.5 13.5C13.5 14.1213 14.0037 14.625 14.625 14.625H16.875C17.4963 14.625 18 14.1213 18 13.5C18 12.8787 17.4963 12.375 16.875 12.375H14.625Z" fill="url(#paint3_linear_87_169)" />
                <path d="M30.375 11.25C32.239 11.25 33.75 12.761 33.75 14.625V25.875C33.75 27.739 32.239 29.25 30.375 29.25H28.8841L30.8742 32.9719C31.1278 33.446 30.5697 33.9397 30.0774 33.6767L21.7929 29.25H13.5C11.636 29.25 10.125 27.739 10.125 25.875V14.625C10.125 12.761 11.636 11.25 13.5 11.25H30.375Z" fill="url(#paint4_linear_87_169)" />
                <path d="M14.625 18C14.625 17.3787 15.1287 16.875 15.75 16.875H28.125C28.7463 16.875 29.25 17.3787 29.25 18C29.25 18.6213 28.7463 19.125 28.125 19.125H15.75C15.1287 19.125 14.625 18.6213 14.625 18Z" fill="url(#paint5_linear_87_169)" />
                <path d="M15.75 21.375C15.1287 21.375 14.625 21.8787 14.625 22.5C14.625 23.1213 15.1287 23.625 15.75 23.625H19.125C19.7463 23.625 20.25 23.1213 20.25 22.5C20.25 21.8787 19.7463 21.375 19.125 21.375H15.75Z" fill="url(#paint6_linear_87_169)" />
                <path d="M22.5 21.375C21.8787 21.375 21.375 21.8787 21.375 22.5C21.375 23.1213 21.8787 23.625 22.5 23.625H24.75C25.3713 23.625 25.875 23.1213 25.875 22.5C25.875 21.8787 25.3713 21.375 24.75 21.375H22.5Z" fill="url(#paint7_linear_87_169)" />
                <defs>
                    <linearGradient id="paint0_linear_87_169" x1="25.875" y1="24.75" x2="3.40176" y2="1.15309" gradientUnits="userSpaceOnUse">
                        <stop offset="0.255437" stop-color="#2E2E41" />
                        <stop offset="0.880102" stop-color="#566C80" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_87_169" x1="10.4063" y1="10.6875" x2="10.4063" y2="7.3125" gradientUnits="userSpaceOnUse">
                        <stop offset="0.155999" stop-color="#71706E" />
                        <stop offset="0.796276" stop-color="#B9AA99" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_87_169" x1="9.5625" y1="15.1875" x2="9.5625" y2="11.8125" gradientUnits="userSpaceOnUse">
                        <stop offset="0.155999" stop-color="#71706E" />
                        <stop offset="0.796276" stop-color="#B9AA99" />
                    </linearGradient>
                    <linearGradient id="paint3_linear_87_169" x1="9.5625" y1="15.1875" x2="9.5625" y2="11.8125" gradientUnits="userSpaceOnUse">
                        <stop offset="0.155999" stop-color="#71706E" />
                        <stop offset="0.796276" stop-color="#B9AA99" />
                    </linearGradient>
                    <linearGradient id="paint4_linear_87_169" x1="33.75" y1="34.0302" x2="10.9849" y2="10.4209" gradientUnits="userSpaceOnUse">
                        <stop offset="0.352596" stop-color="#089953" />
                        <stop offset="1" stop-color="#16D96F" />
                    </linearGradient>
                    <linearGradient id="paint5_linear_87_169" x1="19.1953" y1="16.875" x2="19.1953" y2="19.125" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop offset="0.705" stop-color="#E6E6E6" />
                    </linearGradient>
                    <linearGradient id="paint6_linear_87_169" x1="18.1406" y1="21.375" x2="18.1406" y2="23.625" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop offset="0.705" stop-color="#E6E6E6" />
                    </linearGradient>
                    <linearGradient id="paint7_linear_87_169" x1="18.1406" y1="21.375" x2="18.1406" y2="23.625" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop offset="0.705" stop-color="#E6E6E6" />
                    </linearGradient>
                </defs>
            </svg>
            ,
            url: "message",
        },
    ];


    return (<div className="w-[259px] h-[370px] bg-white border">
        <div className="mt-[18px]">
            {tabs.map(({ name, svg, url }) => (
                <Link to={url} onClick={() => setActiveTab(name)}>
                    <div className={`mt-[10px] py-[2px] w-[200px] h-[40px] ml-[19px] flex rounded-xl 
                    ${activeTab == name ? "bg-[#1B66C9] text-white" : "hover:bg-[#E6E6E6] transition-all"}`}>
                        {svg}
                        <p className="mt-2 ml-[15px]">{name}</p>
                    </div>
                </Link>
            ))}
        </div>

    </div >)
}

export default SideBar