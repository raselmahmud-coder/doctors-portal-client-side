import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { SpinnerCircular } from "spinners-react";
import auth from "../../../firebase.init";

const RequiredAuth = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();
  if (loading) {
    return (
      <>
        <SpinnerCircular
          speed={120}
          color={"#0FCFEC"}
          style={{ margin: "0px auto", display: "block" }}
        />
      </>
    );
  }
  if (error) {
    toast.error(`error happen ${error}`, {
      id: "auth-error",
    });
  }
  if (!user) {
    return <Navigate to="/log-in" state={{ from: location }} replace />;
  }
  return children;
};

export default RequiredAuth;
