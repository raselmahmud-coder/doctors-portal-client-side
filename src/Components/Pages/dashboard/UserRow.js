import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, refetch }) => {
  const { email, role } = user;
  const handleMakeAdmin = () => {
    fetch(`https://doctors-portal-rm.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 402) {
          toast.error(`You aren't an admin`, {
            toastId: "not-admin",
          });
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          refetch();
          toast.success("You have made an Admin", {
            toastId: "admin",
            theme: "colored",
          });
        }
      });
  };
  return (
    <>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-2">
            <div>
              <div className="font-bold">{email}</div>
            </div>
          </div>
        </td>
        <td>
          {role === "admin" ? (
            <span className="btn btn-primary btn-xs">Confirmed</span>
          ) : (
            <button onClick={handleMakeAdmin} className="btn btn-ghost btn-xs">
              Make Admin
            </button>
          )}
          <br />
        </td>
        <th>
          <button className="btn btn-ghost btn-xs">Cancel</button>
        </th>
      </tr>
    </>
  );
};

export default UserRow;
