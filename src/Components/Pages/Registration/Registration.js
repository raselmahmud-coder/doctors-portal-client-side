import React, { useEffect } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { SpinnerCircular } from "spinners-react";
import auth from "../../../firebase.init";
import useToken from "../../../hooks/useToken";
import Footer from "../../Shared/Footer/Footer";
import SocialLogIn from "../LogIn/SocialLogIn";
const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [token] = useToken(user);

  useEffect(() => {
    if (user && token) {
      navigate("/appointment");
    }
  }, [navigate, user, token]);

  const onSubmit = async (data) => {
    const displayName = data.name;
    const email = data.email;
    const password = data.password;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName });
    toast.success("user is created", {
      id: "updated",
    });
  };
  if (loading || updating) {
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
  if (error || updateError) {
    toast.error(`Error ${error}`, {
      id: "user-error",
    });
  }

  return (
    <>
      <div className="lg:w-1/3 mx-auto bg-base-100 drop-shadow rounded mt-12 p-5">
        <h2 className="text-3xl text-center">Registration</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type={"text"}
              {...register("name", { required: true })}
              className="input w-full border-gray-300 border-2"
            />
            {errors.name && (
              <p className="text-red-500">This field is required</p>
            )}
            <label htmlFor="email">Email</label>
            <input
              {...register("email", {
                required: true,
                pattern: {
                  value: /[A-Za-z]{3}/,
                  message: "error message",
                },
              })}
              className="input w-full border-gray-300 border-2"
              type={"email"}
            />
            {errors.email && (
              <p className="text-red-500">
                This field is required {errors?.email?.message}
              </p>
            )}
            <label htmlFor="password">Password</label>
            <input
              {...register("password", {
                required: true,
                pattern: {
                  value: /[0-9]{6}/,
                  message: [
                    "password contain only number",
                    "must be 6 digit or above",
                  ],
                },
              })}
              className="input w-full border-gray-300 border-2"
              type={"password"}
            />
            {errors?.password?.message && (
              <p className="text-red-500">
                {errors.password.message[0]} {errors.password.message[1]}
              </p>
            )}
            <Link to={"/"} className="block mb-4">
              Forget Password?
            </Link>
            <input
              type="submit"
              value="Registration"
              className="block btn-accent mx-auto w-full py-2 my-3 rounded-lg cursor-pointer uppercase"
            />
            <div className="text-center my-2">
              <span>Already have an account?</span>{" "}
              <Link to={"/log-in"} className="text-primary">
                Log In
              </Link>
            </div>
          </div>
        </form>
        <div className="flex justify-center flex-col w-full border-opacity-50">
          <div className="divider">OR</div>
        </div>
        <SocialLogIn />
      </div>
      <Footer />
    </>
  );
};

export default Registration;
