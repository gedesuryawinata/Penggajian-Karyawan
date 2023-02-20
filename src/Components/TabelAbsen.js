import React,{useState} from 'react'

function TabelAbsen({table,handleDelete,handleEdit}) {
  const [text, setText] = useState("Hello World");

  const handleClick = () => {
    setText(text === "Hello World" ? "Goodbye World" : "Hello World");
  };
  return (
    <div className="border rounded-sm  ml-44 mr-44 mt-10 mb-80  ">
    <div className="p-10 border bg-slate-100 m-auto">
      <table>
        <thead >
          <tr>
            <th className="border border-slate-300 p-2">No</th>
            <th className="border border-slate-300 p-2">Nama</th>
            <th className="border border-slate-300 p-2">Hari</th>
            <th className="border border-slate-300 px-4">Tanggal</th>
            <th className="border border-slate-300 px-4 ">Status </th>
            <th className="border border-slate-300 px-4 ">Edit </th>
            <th className="border border-slate-300 px-4 ">Delete</th>

          </tr>
        </thead>
        {table.map((tables,index) => {
          return (
            <tbody>
              <tr>
                <td className="border border-slate-300 p-5">{index+1}</td>
                <td className="border border-slate-300 p-5">{tables.nama}</td>
                <td className="border border-slate-300 p-5">{tables.hari}</td>
                <td className="border border-slate-300 p-5">{tables.tanggal}</td>
                <td className="border border-slate-300 p-5">{tables.status}</td>
               
                <td className="border border-slate-300 p-5">
                  <button onClick={()=>handleEdit(tables.id)} className="border border-blue-400 p-2 rounded-xl font-bold">Edit</button>
                </td>
                <td className="border border-slate-300 p-5">
                  <button onClick={()=>handleDelete(tables.id)} className="border p-2 rounded-md bg-red-500 font-bold">Delete</button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  </div>
  )
}

export default TabelAbsen
