import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

type LoginValues = {
  user_name: string;
  password: string;
};

const Form = () => {
  const validationSchema = Yup.object().shape({
    user_name: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginValues>({ resolver: yupResolver(validationSchema) });

  const onSubmit = (data: any) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <div className="py-10 text-center">
        <p className="text-white text-4xl">Log In</p>
      </div>

      <form
        className="flex flex-col justify-center py-4 mx-auto  md:w-1/2 bg-black items-center border-gray-50 border-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col items-center">
          <label
            htmlFor="user_name"
            className="text-white text-3xl py-4 self-start"
          >
            Username
          </label>
          <input
            id="user_name"
            {...register("user_name", { required: true })}
            placeholder="Username"
            aria-invalid={errors.user_name ? "true" : "false"}
            className="w-100 px-4 py-2 border border-gray-300 outline-none  focus:border-gray-400 rounded-md"
          />

          <p role="alert" className="text-white py-2 text-center">
            {errors.user_name?.message}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <label
            htmlFor="password"
            className="text-white text-3xl py-4 self-start"
          >
            Password
          </label>
          <input
            id="password"
            {...register("password", { required: true })}
            aria-invalid={errors.password ? "true" : "false"}
            placeholder="Password"
            className="w-100 px-4 py-2 border border-gray-300 outline-none  focus:border-gray-400 rounded-md"
          />

          <p role="alert" className="text-white py-2 text-center">
            {errors.password?.message}
          </p>
        </div>
        <div className="flex flex-col items-center py-5">
          <button
            type="submit"
            className="relative text-2xl bg-white rounded-lg text-black  p-3 hover:bg-light-gray"
          >
            Sign In
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
