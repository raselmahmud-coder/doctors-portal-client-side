import React from "react";
import { useQuery } from "react-query";
import { SpinnerCircular } from "spinners-react";
import DoctorsRow from "./DoctorsRow";

const ManageDoctors = () => {
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
  return (
    <>
      <h1 className="text-3xl my-5 text-center">Manage Doctors {doctors.length}</h1>
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
              <DoctorsRow key={doctor._id} doctor={doctor} refetch={refetch} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageDoctors;
