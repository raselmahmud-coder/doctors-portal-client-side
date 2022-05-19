import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import { SpinnerCircular } from "spinners-react";
import auth from "../../../firebase.init";
import useAdmin from "../../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <h1 className="text-5xl text-purple-500 my-5">
          Welcome to your Dashboard
        </h1>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to={"/dashboard"}>My Appointments</Link>
          </li>
          <li>
            <Link to={"/dashboard/my-review"}>My Reviews</Link>
          </li>
          {adminLoading ? (
            <>
              <SpinnerCircular speed={120} color={"#0FCFEC"} />
            </>
          ) : (
            admin && (
              <>
                <li>
                  <Link to={"/dashboard/all-user"}>All User</Link>
                </li>
                <li>
                  <Link to={"/dashboard/add-doctor"}>Add Doctor</Link>
                </li>
              </>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
