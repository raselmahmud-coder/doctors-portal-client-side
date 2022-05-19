import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { SpinnerCircular } from "spinners-react";

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { data: services, isLoading } = useQuery("services", () =>
    fetch(`http://localhost:5000/services`).then((res) => res.json())
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
  const imageStorageKey = `f26a8878d26810881658787352cb5dcd`;
  const onSubmit = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const image = result.data.url;
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialization,
            image: image,
          };
          //sent doctor object to the database
          fetch(`http://localhost:5000/doctor`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          }).then((res) =>
            res.json().then((data) => {
              if (data.acknowledged) {
                toast.success("Doctor is added", {
                  toastId: "doctor-add",
                });
                reset();
              } else {
                toast.error("Failed to add a Doctor", {
                  toastId: "failed",
                });
              }
            })
          );
        }
      });
  };
  return (
    <>
      <div className="w-1/2 mx-auto block">
        <h1 className="text-3xl text-violet-500 text-center">Add a Doctor</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Name</label>
          <input
            type={"text"}
            {...register("name", { required: true })}
            className="input w-full border-gray-300 border-2 mb-4"
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
            className="input w-full border-gray-300 border-2 mb-4"
            type={"email"}
          />
          {errors.email && (
            <p className="text-red-500">
              This field is required {errors?.email?.message}
            </p>
          )}
          <label htmlFor="specialization">Specialization</label>
          <select
            {...register("specialization")}
            className="select w-full border-gray-300 border-2 mb-4"
          >
            {services.map((service) => (
              <option key={service._id} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
          <label htmlFor="image">Image</label>
          <input
            type={"file"}
            {...register("image", { required: true })}
            className="w-full mb-4"
          />
          {errors.image && (
            <p className="text-red-500">This field is required</p>
          )}
          <input
            type="submit"
            value="Add Doctor"
            className="block btn-accent mx-auto w-full py-2 my-3 rounded-lg cursor-pointer uppercase"
          />
        </form>
      </div>
    </>
  );
};

export default AddDoctor;
