import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";
import { SpinnerCircular } from "spinners-react";
import auth from "../../../firebase.init";
import useAdmin from "../../../hooks/useAdmin";
import { useNavigate } from "react-router-dom";

const RequiredAdmin = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);

    console.log(admin);
  const navigation = useNavigate()
  if (loading || adminLoading) {
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
  if (!user || !admin) {
    //   signOut(auth);
      navigation("/")
  }
  return children;
};

export default RequiredAdmin;
