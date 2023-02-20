import React, { useState, useEffect } from "react";
import Tabel from "./Tabel";
import { uid } from "uid";
import axios from "axios";
function DataKaryawan() {
  // Klik
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(!showForm);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };
  //Klikk

  const [rowNumber, setRowNumber] = useState(1);

  const [tables, setTables] = useState([]);

  const [isUpdate, setIsUpdate] = useState({ id: null, status: false });

  const [formData, setFormData] = useState({
    name: "",
    jabatan: "",
    tanggal: "",
    telp: "",
  });

  useEffect(() => {
    //mengambil data
    axios.get(" http://localhost:3000/tables").then((res) => {
      console.log(res.data);
      setTables(res?.data ?? []);
    });
  }, []);

  function handleChange(e) {
    let data = { ...formData };
    data[e.target.name] = e.target.value;
    setFormData(data);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("oke");

    let data = [...tables];
    if (formData.name === "") {
      return false;
    }

    if (formData.jabatan === "") {
      return false;
    }
    if (formData.tanggal === "") {
      return false;
    }
    if (formData.telp === "") {
      return false;
    }
    if (isUpdate.status) {
      data.forEach((tables) => {
        if (tables.id === isUpdate.id) {
          tables.name = formData.name;
          tables.jabatan = formData.jabatan;
          tables.tanggal = formData.tanggal;
          tables.telp = formData.telp;
        }
      });
      axios
        .put(`http://localhost:3000/tables/${isUpdate.id}`, {
          name: formData.name,
          jabatan: formData.jabatan,
          tanggal: formData.tanggal,
          telp: formData.telp,
        })
        .then((res) => {
          alert("Berhasil Mengedit data");
        });
    } else {
      let newData = {
        id: uid(),
        name: formData.name,
        jabatan: formData.jabatan,
        tanggal: formData.tanggal,
        telp: formData.telp,
      };
      data.push(newData);
      axios.post(" http://localhost:3000/tables", newData).then((res) => {
        alert("Berhasil Menyimpan data");
      });
    }
    //menambahkan data
    setTables(data);
    setFormData({ name: "", jabatan: "", tanggal: "", telp: "" });
    setIsUpdate({ id: null, status: false });
  }

  function handleEdit(id) {
    let data = [...tables];
    let foundData = data.find((tables) => tables.id === id);
    setFormData({
      name: foundData.name,
      jabatan: foundData.jabatan,
      tanggal: foundData.tanggal,
      telp: foundData.telp,
    });
    setIsUpdate({ id: id, status: true });
  }

  function handleDelete(id) {
    let data = [...tables];
    let filteredData = data.filter((tables) => tables.id !== id);
    setTables(filteredData);
    axios.delete(`http://localhost:3000/tables/${id}`).then((res) => {
      alert("berhasil menghapus data");
    });
  }
  return (
    <div className="border border-black ">
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
        <div className="m-auto p-10px w-96 ">
          <form
            onSubmit={handleSubmit}
            className=" m-5 border border-slate-300"
          >
            <div className="font-bold ml-12  mb-5 ">
              <label className="pr-4 block">Name</label>
              <input
                type="text"
                className="border rounded-sm px-4"
                onChange={handleChange}
                value={formData.name}
                name="name"
              />
            </div>
            <div className="font-bold ml-12 mb-5">
              <label className="pr-4 block">Jabatan</label>
              <input
                type="text"
                className="border rounded-sm px-4"
                onChange={handleChange}
                value={formData.jabatan}
                name="jabatan"
              />
            </div>
            <div className="font-bold ml-12  mb-5">
              <label className="pr-4 block">Tanggal Bergabung</label>
              <input
                type="date"
                className="border rounded-sm px-4"
                onChange={handleChange}
                value={formData.tanggal}
                name="tanggal"
              />
            </div>
            <div className="font-bold  ml-12">
              <label className="pr-4 block">No. Telp</label>
              <input
                type="number"
                className="border  rounded-sm px-4 "
                onChange={handleChange}
                name="telp"
                value={formData.telp}
              />
            </div>
            <div className="pt-5 ml-12 mb-5 ">
              <button
                type="submit"
                className="border w-60 bg-blue-400 font-bold  "
              >
                Simpan
              </button>
            </div>
          </form>
        </div>
      )}
      <Tabel
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        data={tables}
        rowNumber={rowNumber}
      />
    </div>
  );
}

export default DataKaryawan;
