import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import DoctorsPortalSpinner from "../../Shared/DoctorsPortalSpinner/DoctorsPortalSpinner";

const SocialLogIn = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (googleUser) {
      navigate(from, { replace: true });
    }
  }, [navigate, from, googleUser]);
  const handleGoogle = () => {
    signInWithGoogle();
  };

  if (googleError) {
    toast.error(`error happen ${googleError}`, {
      toastId: "google-error",
      theme: "colored",
    });
  }

  return (
    <>
      <button
        onClick={handleGoogle}
        className="py-3 rounded-md uppercase border-gray-400 border-2"
      >
        {googleLoading ? (
          <DoctorsPortalSpinner className="flex justify-center" />
        ) : (
          "continue with google"
        )}
      </button>
    </>
  );
};

export default SocialLogIn;
