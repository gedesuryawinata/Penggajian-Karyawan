import { useState } from "react";
import React from "react";
import { ImOffice } from "react-icons/im";
import {
  BsArrowLeft,
  BsSearch,
  BsChevronDown,
  BsReverseLayoutTextSidebarReverse,
} from "react-icons/bs";
import {
  AiFillCreditCard,
  AiOutlineUser,
  AiOutlineBarChart,
  AiOutlineFileText,
  AiOutlineLogout,
} from "react-icons/ai";
import { RiDashboardFill, RiOrganizationChart } from "react-icons/ri";
import { Route, Routes, Link } from "react-router-dom";
import Dashboard from "./Dasboard";
import Error from "./Error";
import DataKaryawan from "./DataKaryawan";
import DataJabatan from "./DataJabatan";
import Absen from "./Absen";
function Sidebar() {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const Menus = [
    { title: "Dasboard", href: "/dashboard" },
    {
      title: "Data Master", href:"/",
      icon: <BsReverseLayoutTextSidebarReverse />,
      submenu: true,
      submenuItems: [
        { title: "Data Karyawan", icon: <AiOutlineUser /> ,href:"/datakaryawan"},
        { title: "Data Jabatan", icon: <RiOrganizationChart />,href:"/datajabatan"},
      ],
    },
    { title: "Absen", icon: <AiOutlineFileText />, href: "/absen" },
    {
      title: "Gaji",
      spacing: true,
      icon: <AiFillCreditCard />,
      href: "/gaji",
    },
    { title: "Analystics", icon: <AiOutlineBarChart />, href: "/analitik" },
    { title: "Logout", icon: <AiOutlineLogout />, href: "/logout" },
  ];

  return (
    
    <div className="flex ">
      <div
        className={`  bg-rose-300 h-screen p-5 pt-8 ${
          open ? "w-72" : "w-20"
        }  duration-300 relative`}
      >
        <BsArrowLeft
          className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border 
        border-dark-purple cursor-pointer ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex">
          <ImOffice
            className={`bg-white text-4xl rounded cursor-pointer block float-left duration-500 mr-2 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-black origin-left font-medium text-2xl duration-300 ${
              !open && "scale-0"
            }`}
          >
            Penggajian
          </h1>
        </div>
        <div
          className={`flex items-center rounded-md bg-sky-600 mt-6  ${
            !open ? "px-2.5" : "px-4"
          } py-2`}
        >
          <BsSearch
            className={`text-white text-lg block float-left cursor-pointer  ${
              open && "mr-2"
            }`}
          />

          <input
            type={"search"}
            placeholder="Search"
            className={`text-base bg-transparant w-full text-black focus:outline-none ${
              !open && "hidden"
            }`}
          />
        </div>

        <ul className="pt-2">
          {Menus.map((menu, index) => {
            return (
              <div key={index}>
                <Link
                  to={menu.href}
                  className={`text-black text-sm flex items-center gap-x-4 cursor-pointer p-2
             hover:bg-gray-400 rounded-md ${menu.spacing ? "mt-9" : "mt-2"}`}
                >
                  <span className="text-2xl block float-left  ">
                    {menu.icon ? menu.icon : <RiDashboardFill />}
                  </span>
                  <span
                    className={`text-base font-medium flex-1 ${
                      !open && "hidden"
                    } `}
                  >
                    {menu.title}
                  </span>
                  {menu.submenu && open && (
                    <BsChevronDown
                      className={`${submenuOpen && "rotate-180"}`}
                      onClick={() => setSubmenuOpen(!submenuOpen)}
                    />
                  )}
                </Link>
                {menu.submenu && submenuOpen && open && (
                  <ul>
                    {menu.submenuItems.map((submenuItems, index) => (
                      <Link to={submenuItems.href}
                        key={index}
                        className="text-black text-lg  flex items-center gap-x-4 cursor-pointer p-2 px-4
                  hover:bg-gray-400 rounded-md "
                      >
                        {submenuItems.icon} {submenuItems.title}
                      </Link>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </ul>

      </div>
      <div className="pl-6 pt-10 ">
      <div className="flex justify-between mb-10 w-auto h-20 border-t-4 border-l-4 border-blue-300  bg-white shadow-xl items-center rounded-md">
        <div className="pl-5 text-4xl text-gray-400"> PT.Rekaya Perangkat Lunak</div>
        <div className="flex pr-10 ">
          <div className="pr-8" >Selamat datang</div>
          <div>Profil</div>
        </div>
      </div>
        <Content />
      </div>
    </div>
  );
}
function Content() {
  return (
    <div>
    
      <Routes>
        <Route path="/dashboard" element={<div><Dashboard/></div>} ></Route>
        <Route path="/absen" element={<div><Absen/></div>} ></Route>
        <Route path="*" element={<div><Error/></div>} ></Route>
        <Route path="/datakaryawan" element={<div><DataKaryawan/></div>} ></Route>
        <Route path="/datajabatan" element={<div><DataJabatan/></div>} ></Route>
      </Routes>
     
    </div>
  );
}
export default Sidebar;
