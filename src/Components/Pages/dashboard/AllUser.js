import React from "react";
import { useQuery } from "react-query";
import { SpinnerCircular } from "spinners-react";
import UserRow from "./UserRow";

const AllUser = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch(`http://localhost:5000/all-user`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return (
      <>
        <div className="flex justify-center">
          <SpinnerCircular
            thickness={200}
            color={"#0FCFEC"}
            speed={150}
            size={130}
          />
        </div>
      </>
    );
  }
  return (
    <>
      <h1 className="text-2xl text-purple-300 uppercase">
        all user {users.length}
      </h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <UserRow key={user._id} user={user} refetch={refetch} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllUser;
