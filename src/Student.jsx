import React from 'react';
import "./Student.css";
export default function Student(props) {
  // console.log("test");
  const { student } = props;
  return (
    <div className="card">
    <img src="avatar.png" alt="Avatar" />
    <div className="container">
      <h4>{student.nama_lengkap}</h4>
      <p>{student.nim}</p>
    </div>
  </div>
    // <table>
    //   <thead>
    //     <th>{student.nama_lengkap}</th>
    //   </thead>
    //   <tbody>
    //     <tr>
    //       <td>Nama Lengkap:</td>
    //       <td>{student.nama_lengkap}</td>
    //     </tr>
    //   </tbody>
    // </table>
  );
}