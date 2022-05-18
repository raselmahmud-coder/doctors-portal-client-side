import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/booking?patient=${user.email}`)
        .then((res) => res.json())
        .then((data) => setAppointments(data));
    }
  }, [user]);
  console.log(user);
  return (
    <>
      <h1 className="text-xl text-teal-300 text-center my-3 capitalize">
        {user?.displayName} appointments {appointments.length}
      </h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Treatment Name</th>
              <th>Date</th>
              <th>Time</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => {
              return (
                <tr key={appointment._id}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-2">
                      <div>
                        <div className="font-bold">{appointment.treatment}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {appointment.date}
                    <br />
                  </td>
                  <td>{appointment.slot}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">Cancel</button>
                  </th>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>Treatment Name</th>
              <th>Date</th>
              <th>Time</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default MyAppointments;
