import React, { useState } from "react";
import { useQuery } from "react-query";
import { SpinnerCircular } from "spinners-react";
import DeleteConfirmation from "./DeleteConfirmation";
import DoctorsRow from "./DoctorsRow";

const ManageDoctors = () => {
  const [deleteConfirm, setDeleteConfirm] = useState({
    isShow: false,
    name: "",
    email: "",
  });
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery("doctors", () =>
    fetch(`http://localhost:5000/doctors`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <SpinnerCircular speed={120} color={"#0FCFEC"} />;
    }
    console.log(deleteConfirm.isShow);
  const handleConfirming = (email, name) => {
    setDeleteConfirm({
      isShow: true,
      name: name,
      email: email,
    });
  };

  return (
    <>
      <h1 className="text-3xl my-5 text-center">
        Manage Doctors {doctors.length}
      </h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Photo</th>
              <th>Email</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor) => (
              <DoctorsRow
                key={doctor._id}
                doctor={doctor}
                handleConfirming={handleConfirming}
              />
            ))}
          </tbody>
        </table>
      </div>
      {deleteConfirm.isShow && (
        <DeleteConfirmation refetch={refetch} deleteConfirm={deleteConfirm} setDeleteConfirm={setDeleteConfirm}></DeleteConfirmation>
      )}
    </>
  );
};

export default ManageDoctors;
