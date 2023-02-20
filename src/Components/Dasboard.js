import React, { useState } from "react";
import { HiOutlineUserGroup } from "react-icons/hi";
import { FaUserCog } from "react-icons/fa";
import {BiMedal} from "react-icons/bi";
import { IoChatbubblesOutline } from "react-icons/io5";

function Dasboard() {
  const [card, setCard] = useState([
    {
      nama: "Data Pegawai",
      jumlah: "2",
      icon: <HiOutlineUserGroup />,
    },
    {
      nama: "Data Admin",
      jumlah: "2",
      icon: <FaUserCog />,
    },
    {
      nama: "Data Jabatan",
      jumlah: "2",
      icon: <BiMedal/>,
    },
    {
      nama: "Data Absen",
      jumlah: "2",
      icon: <IoChatbubblesOutline />,
    },
  ]);
  return (
    <div className="container ">
      <div className="flex">
      {card.map((item, index) => {
        return (
          <div className="flex border border-slate-300 m-3 justify-between rounded-md w-60 h-28 items-center" key={index}>
            <div className="m-4">
              <div className="font-semibold">{item.nama}</div>
              <div>{item.jumlah}</div>
            </div>
            <div className="text-5xl text-gray-300 m-3 ">{item.icon}</div>
          </div>
       
       );
      })}
      </div>
    </div>
  );
}

export default Dasboard;
