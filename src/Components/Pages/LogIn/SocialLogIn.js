import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import useToken from "../../../hooks/useToken";
import DoctorsPortalSpinner from "../../Shared/DoctorsPortalSpinner/DoctorsPortalSpinner";

const SocialLogIn = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  // const [user, loading, error] = useAuthState(auth);
  const [token] = useToken(user);
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
    console.log("Google User", user);
  }, [navigate, from, token, user]);

  const handleGoogle = () => {
    signInWithGoogle();
  };
  if (loading) {
    return (
      <div className="flex justify-center">
        <DoctorsPortalSpinner />
      </div>
    );
  }
  if (error) {
    toast.error(`error happen ${error}`, {
      toastId: "google_error",
      theme: "colored",
    });
  }

  return (
    <>
      <button
        onClick={handleGoogle}
        className="py-3 rounded-md uppercase border-gray-400 border-2 w-full"
      >
        continue with google
      </button>
    </>
  );
};

export default SocialLogIn;
