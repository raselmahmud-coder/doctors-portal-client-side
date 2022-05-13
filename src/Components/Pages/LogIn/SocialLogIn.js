import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import DoctorsPortalSpinner from "../../Shared/DoctorsPortalSpinner/DoctorsPortalSpinner";

const SocialLogIn = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const handleGoogle = () => {
    signInWithGoogle();
  };
  if (googleLoading) {
    return <DoctorsPortalSpinner />;
  }
  if (googleError) {
    toast(`error happen ${googleError}`, {
      id: "error",
    });
  }
  if (googleUser) {
    navigate("/");
  }
  return (
    <>
      <button
        onClick={handleGoogle}
        className="py-3 rounded-md uppercase border-gray-400 border-2"
      >
        continue with google
      </button>
    </>
  );
};

export default SocialLogIn;
