import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

type AccountValues = {
  user_name: string;
  balance: number;
};

const AccountForm = () => {
  const validationSchema = Yup.object().shape({
    user_name: Yup.string().required("Username is required"),
    balance: Yup.number().required("Account balance is required"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AccountValues>({ resolver: yupResolver(validationSchema) });

  const onSubmit = (data: any) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <div className="py-10 text-center">
        <p className="text-white text-4xl">Create New Account</p>
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
            type="text"
            {...register("user_name", { required: true })}
            placeholder="Account name"
            aria-invalid={errors.user_name ? "true" : "false"}
            className="w-100 px-4 py-2 border border-gray-300 outline-none  focus:border-gray-400 rounded-md"
          />
          {errors.user_name?.type === "required" && (
            <p role="alert" className="text-white py-2 text-center">
              Please input a valid Account Name
            </p>
          )}
        </div>
        <div className="flex flex-col items-center">
          <label
            htmlFor="balance"
            className="text-white text-3xl py-4 self-start"
          >
            Balance
          </label>
          <input
            id="balance"
            type="text"
            {...register("balance", { required: true })}
            aria-invalid={errors.balance ? "true" : "false"}
            placeholder="Balance"
            className="w-100 px-4 py-2 border border-gray-300 outline-none  focus:border-gray-400 rounded-md"
          />
          {errors.balance?.type === "required" ? (
            <p role="alert" className="text-white py-2 text-center">
              Please input a valid Account Balance
            </p>
          ) : (
            ""
          )}
          {errors.balance?.type === "typeError" ? (
            <p role="alert" className="text-white py-2 text-center">
              Please input a valid Account Balance
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-col items-center py-5">
          <button
            type="submit"
            className="relative text-2xl bg-white rounded-lg text-black  p-3 hover:bg-light-gray"
          >
            Create Account
          </button>
        </div>
      </form>
    </>
  );
};

export default AccountForm;
