import axios from "axios";
import React, { useState ,useEffect} from "react";
import { uid } from "uid";
import TabelJab from "./TabelJab";
function DataJabatan() {
  // Klik
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(!showForm);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
   
  };
  //Klikk
  const [rowNumber,setRowNumber]= useState(1);
  
  const [tablejab, setTablejab] = useState([]);

  const [isUpdate, setIsUpdate] = useState({ id: null, status: false });

  const [formjab, setFormjab] = useState({
    jabatan: "",
    gaji: "",
  });


  
  useEffect(()=>{
    //mangambil data 
    axios.get(" http://localhost:3000/tablejab   ").then((res)=>{
      console.log(res.data)
      setTablejab(res?.data??[])
    })

  },[])
  function handleChange(event) {
    let data = { ...formjab };
    data[event.target.name] = event.target.value;
    setFormjab(data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert("oke");
    let data = [...tablejab];
    if (formjab.jabatan === "") {
      return false;
    }
    if (formjab.gaji === "") {
      return false;
    }

    if (isUpdate.status) {
      data.forEach((table) => {
        if (table.id === isUpdate.id) {
          table.jabatan = formjab.jabatan;
          table.gaji = formjab.gaji;
        }
      });  
    axios.put(`http://localhost:3000/tablejab/${isUpdate.id}`,{
      jabatan: formjab.jabatan,
      gaji: formjab.gaji,
    }).then(res=>{
    alert("berhasil mengedit data")
    })
    }else{
      let newData = { id: uid(), jabatan: formjab.jabatan, gaji: formjab.gaji }
      data.push(newData);
      axios.post(" http://localhost:3000/tablejab  ",newData).then((res)=>{
        alert("berhasil menyiimpan data")
      })
     
    }
    // menambahkan data ke tablejab
    setIsUpdate({id:null,status:false});
    setTablejab(data);
    setFormjab({jabatan:"", gaji:""});
  }

  function handleEdit(id){
    let data= [...tablejab];
    let foundData = data.find((table)=> table.id === id);
    setFormjab({jabatan: foundData.jabatan, gaji:foundData.gaji})
    setIsUpdate({id:id,status:true});
  }

  function handleDelate(id){
    let data = [...tablejab];

    let filteredData = data.filter(tabel =>tabel.id !== id);
    axios.delete(`http://localhost:3000/tablejab/${id}`).then(res=>{
      alert("berhasil menghapus data")
    })
    setTablejab(filteredData);
  }
  return (
    <div className="border border-black">
      
      <div className="flex justify-center items-center mt-5 text-3xl font-medium pb-5">Data Karyawan</div>
      <hr className="border-black"/>
      <button
        className="mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleButtonClick}
      >
        {showForm ? 'Back' : 'Create'}
      </button>
      {showForm && (
      <div className="m-auto p-10px w-96 ">
      <form onSubmit={handleSubmit} className=" m-5 border border-slate-300 ">
        <div className="font-bold m-3">
          <label className="pr-4 block">Jabatan</label>
          <input
            type="text"
            className="border rounded-sm px-4"
            onChange={handleChange}
            value={formjab.jabatan}
            name="jabatan"
          />
        </div>
        <div className="font-bold  m-3">
          <label className="pr-4 block">Gaji Perhari</label>
          <input
            type="number"
            className="border  rounded-sm px-4 "
            onChange={handleChange}
            name="gaji"
            value={formjab.gaji}
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
     
      <TabelJab number={rowNumber} dataJab={tablejab} handleDelate={handleDelate} handleEdit={handleEdit} />
     
    </div>
  );
}

export default DataJabatan;
