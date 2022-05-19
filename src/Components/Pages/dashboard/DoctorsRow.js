import React from "react";


const DoctorsRow = ({ doctor, handleConfirming }) => {
  const { image, name, specialty, email } = doctor;

  return (
    <>
      <tr>
        <th>
          <div className="avatar">
            <div className="w-24 rounded-xl">
              <img src={image} alt="" />
            </div>
          </div>
        </th>
        <td>
          <div className="flex items-center space-x-2">
            <div>
              <div className="font-bold">{email}</div>
            </div>
          </div>
        </td>
        <td>
          <div className="font-bold">{name}</div>
        </td>
        <td>
          <div className="font-bold">{specialty}</div>
        </td>
        <th>
          <label htmlFor="delete-confirm" className="btn btn-ghost" onClick={()=>handleConfirming(email, name)}>
            Delete
          </label>
        </th>
      </tr>
      
    </>
  );
};

export default DoctorsRow;
