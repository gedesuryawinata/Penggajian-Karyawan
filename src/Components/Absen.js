import React, { useState } from "react";
import { uid } from "uid";
import TabelAbsen from "./TabelAbsen";
export default function Absen() {
   // Klik
   const [showForm, setShowForm] = useState(false);

   const handleButtonClick = () => {
     setShowForm(!showForm);
   };
 
   const handleFormSubmit = (event) => {
     event.preventDefault();
   };
   //Klikk
  const [tableAbsen, setTableAbsen] = useState([
    {
      id: 1,
      nama: "surya",
      hari: "minggu",
      tanggal: "10-05-2023",
      status: "hadir",
    },
    {
      id: 4,
      nama: "Sukar",
      hari: "minggu",
      tanggal: "19-04-2023",
      status: "hadir",
    },
  ]);

  const [isUpdate, setIsUpdate] = useState(false);

  const [formAbsen, setFormAbsen] = useState({
    nama: "",
    hari: "",
    tanggal: "",
    status: "",
  });

  //membuat form berfungsi untuk di ketik
  function handleChange(e) {
    let data = { ...formAbsen };
    data[e.target.name] = e.target.value;
    setFormAbsen(data);
  }

  //handleEdit
  function handleEdit(id) {
    let data = [...tableAbsen];
    let foundData = data.find((table) => table.id === id);
    setFormAbsen({
      nama: foundData.nama,
      hari: foundData.hari,
      tanggal: foundData.tanggal,
      status: foundData.status,
    });
    setIsUpdate({ id: id, status: true });
  }
  //handleDelete
  function handleDelete(id) {
    let data = [...tableAbsen];
    let filteredData = data.filter((table) => table.id !== id);
    setTableAbsen(filteredData);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("oke");
    let data = [...tableAbsen];

    if (formAbsen.nama === "") {
      return false;
    }

    if (formAbsen.hari === "") {
      return false;
    }

    if (formAbsen.tanggal === "") {
      return false;
    }
    if (formAbsen.status === "") {
      return false;
    }

    if (isUpdate.status) {
      data.forEach((table) => {
        if (table.id === isUpdate.id) {
          table.nama = formAbsen.nama;
          table.hari = formAbsen.hari;
          table.tanggal = formAbsen.tanggal;
          table.status = formAbsen.status;
        }
      });
    } else {
      data.push({
        id: uid(),
        nama: formAbsen.nama,
        hari: formAbsen.hari,
        tanggal: formAbsen.tanggal,
        status: formAbsen.status,
      });
    }

    //mendambahkan data
    setTableAbsen(data);
    setIsUpdate({ id: null, status: false });
    setFormAbsen({ nama: "", hari: "", tanggal: "" });
  }

  return (
    <div className="border border-black">
            <div className="flex justify-center items-center mt-5 text-3xl font-medium pb-5">
        Data Karyawan
      </div>
      <hr className="border-black" />
      <button
        className="mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleButtonClick}
      >
        {showForm ? "Back" : "Create"}
      </button>
      {showForm && (
      <div className="m-auto p-10px w-96">
        <form onSubmit={handleSubmit} className=" m-5 border border-slate-300">
          <div className="font-bold m-3  ">
            <label className="pr-4 block">Nama Karyawan</label>
            <input
              type="text"
              className="border rounded-sm px-4"
              onChange={handleChange}
              value={formAbsen.nama}
              name="nama"
            />
          </div>
          <div className="font-bold m-3">
            <label className="pr-4 block">Hari</label>
            <input
              type="text"
              className="border rounded-sm px-4"
              onChange={handleChange}
              value={formAbsen.hari}
              name="hari"
            />
          </div>

          <div className="font-bold m-3">
            <label className="pr-4 block">Tanggal</label>
            <input
              type="date"
              className="border rounded-sm px-4"
              onChange={handleChange}
              value={formAbsen.tanggal}
              name="tanggal"
            />
          </div>
          <div className="font-bold m-3">
            <label className="pr-4 block">Status</label>
            <input
              type="text"
              className="border rounded-sm px-4"
              onChange={handleChange}
              value={formAbsen.status}
              name="status"
            />
          </div>

          <div className="pt-5 m-3">
            <button type="submit" className="border w-60 ">
              Simpan
            </button>
          </div>
        </form>
      </div>
      )}
      <TabelAbsen
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        table={tableAbsen}
      />
    </div>
  );
}
