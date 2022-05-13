import React from "react";
import { Link } from "react-router-dom";
import SocialLogIn from "./SocialLogIn";

const LogIn = () => {
  return (
    <>
      <div className="lg:w-1/3 w-full mx-auto bg-base-100 drop-shadow rounded">
        <h2 className="text-3xl text-center">Login</h2>
        <div className="p-6">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="input w-full border-gray-300 border-2"
          />
          <label htmlFor="password">Password</label>
          <input
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
            <Link to={"/"} className="text-primary">
              Create new account
            </Link>
          </div>
          <div className="flex flex-col w-full border-opacity-50">
            <div className="divider">OR</div>
            <SocialLogIn/>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
