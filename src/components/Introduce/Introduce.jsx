import { useState } from "react";

export default function Introduce() {
  const [activeTab, setActiveTab] = useState("overall");
  const tabs = [
    {
      name: "Tổng quan",
      key: "overall",
    },
    {
      name: "Công việc và học vấn",
      key: "profession",
    },
    {
      name: "Nơi từng sống",
      key: "address",
    },
    {
      name: "Thông tin liên hệ",
      key: "contact",
    },
    {
      name: "Gia đình và mối quan hệ",
      key: "relationship",
    },
    {
      name: "Chi tiết về bạn",
      key: "about",
    },
  ];
  return (
    <div className="w-[900px] flex rounded-xl border">
      <div className="flex flex-col w-[300px] p-2 border-r border-gray-300 ">
        <h1 className="text-lg font-semibold py-2">Giới thiệu</h1>
        {tabs.map(({ name, key }) => (
          <div
            onClick={() => setActiveTab(key)}
            key={key}
            className={`p-2 ${
              activeTab !== key ? "hover:bg-gray-200" : ""
            }   rounded-lg transition-colors mb-2 ${
              activeTab === key ? "bg-purple-200 text-purple-700" : ""
            }`}
          >
            {name}
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
}
