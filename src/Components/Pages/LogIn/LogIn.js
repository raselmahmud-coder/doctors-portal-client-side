import React, { useEffect } from "react";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { SpinnerCircular } from "spinners-react";
import auth from "../../../firebase.init";
import Footer from "../../Shared/Footer/Footer";
import SocialLogIn from "./SocialLogIn";

const LogIn = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, logInUser, loadingUser, errorUser] =
    useSignInWithEmailAndPassword(auth);
  useEffect(() => {
    if (user || logInUser) {
      navigate(from, { replace: true });
    }
  }, [navigate, from, user, logInUser]);

  if (loading || loadingUser) {
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
  if (error || errorUser) {
    toast.error(`Error ${error}`, {
      id: "user-error",
    });
  }
  const handleForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
  };
  return (
    <>
      <div className="lg:w-1/3 mx-auto bg-base-100 drop-shadow rounded mt-12">
        <h2 className="text-3xl text-center">Login</h2>
        <form className="p-6" onSubmit={handleForm}>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            className="input w-full border-gray-300 border-2"
          />
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            className="input w-full border-gray-300 border-2"
          />
          <Link to={"/"} className="block mb-4">
            Forget Password?
          </Link>
          <input
            type="submit"
            value="Login"
            className="block btn-accent mx-auto w-full py-2 rounded-lg cursor-pointer uppercase"
          />
          <div className="text-center my-2">
            <span>New to Doctors Portal?</span>{" "}
            <Link to={"/registration"} className="text-primary">
              Create new account
            </Link>
          </div>
          <div className="flex flex-col w-full border-opacity-50">
            <div className="divider">OR</div>
            <SocialLogIn />
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default LogIn;
