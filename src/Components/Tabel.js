import React from "react";

export default function Tabel({data,handleEdit,handleDelete,rowNumber}) 
{
  return (
    <div className="border rounded-sm  ml-44 mr-44 mt-10 mb-80  ">
      <div className="p-10 border bg-blue-100 m-auto">
        <table>
          <thead >
            <tr>

              <th className="border border-slate-300 p-2">No</th>
              <th className="border border-slate-300 p-2">Name</th>
              <th className="border border-slate-300 px-4">Jabatan</th>
              <th className="border border-slate-300 px-4 ">Tanggal Bergabung</th>
              <th className="border border-slate-300 px-4">No.Telp</th>
              <th className="border border-slate-300 px-4">Edit </th>
              <th className="border border-slate-300 px-4">Delate</th>
            </tr>
          </thead>
          {data.map((tables) => {
            return (
              <tbody>
                <tr>
                  <td className="border border-slate-300 p-5">{rowNumber++}</td>
                  <td className="border border-slate-300 p-5">{tables.name}</td>
                  <td className="border border-slate-300 p-5">{tables.jabatan}</td>
                  <td className="border border-slate-300 p-5">{tables.tanggal}</td>
                  <td className="border border-slate-300 p-5">{tables.telp}</td>
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
  );
}
