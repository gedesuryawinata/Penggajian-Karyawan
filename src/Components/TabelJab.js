import React from "react";

export default function TabelJab({dataJab,handleEdit,handleDelate,number}) {
  
  return (
    <div className="border rounded-sm  ml-44 mr-44 mt-10 mb-80  ">
      <div className="p-10 border bg-slate-100 m-auto">
        <table>
          <thead>
            <tr>
              <th className="border border-slate-300 px-4">No</th>
              <th className="border border-slate-300 px-4">Jabatan</th>
              <th className="border border-slate-300 px-4 ">Gaji perhari</th>
              <th className="border border-slate-300 px-4">Edit</th>
              <th className="border border-slate-300 px-4">Delate</th>
            </tr>
          </thead>
          {dataJab.map((tabelJab) => {
            return (
              <tbody>
                <tr>
                  <td className="border border-slate-300 p-5">{number++}</td>
                  <td className="border border-slate-300 p-5">
                    {tabelJab.jabatan}
                  </td>
                  <td className="border border-slate-300 p-5">
                   RP.{tabelJab.gaji}
                  </td>
                  <td className="border border-slate-300 p-5">
                    <button onClick={()=>handleEdit(tabelJab.id)}  className="border border-blue-400 p-2 rounded-xl font-bold">Edit</button>
                  </td>
                  <td className="border border-slate-300 p-5">
                    <button onClick={()=>handleDelate(tabelJab.id)}   className="border p-2 rounded-md bg-red-500 font-bold">Delete</button>
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


