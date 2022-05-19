import React from "react";
import { toast } from "react-toastify";

const DoctorsRow = ({ doctor, refetch }) => {
  const { image, name, specialty, email } = doctor;
  const handleDelete = () => {
    fetch(`http://localhost:5000/doctor/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success(`${name} Doctor deleted`, {
            toastId: "doctor-delete",
          });
          refetch();
        }
      });
  };
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
          <button className="btn btn-ghost btn-xs" onClick={handleDelete}>
            Delete
          </button>
        </th>
      </tr>
    </>
  );
};

export default DoctorsRow;
