import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

type UpdateAccountValue = {
  balance: number;
};

const UpdateAccount = () => {
  const validationSchema = Yup.object().shape({
    balance: Yup.number().required("Account balance is required"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UpdateAccountValue>({ resolver: yupResolver(validationSchema) });

  const onSubmit = (data: any) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <div className="py-10 text-center">
        <p className="text-white text-4xl">Update Account Balance</p>
      </div>
      <div className="text-center">
        <div className="text-white text-3xl py-4 self-start">
          Account: Username
        </div>
      </div>
      <div className="text-center pt-4">
        <div className="text-white text-3xl py-4 self-start">
          Account Number: Number
        </div>
      </div>
      <form
        className="flex flex-col justify-center py-4 mx-auto  md:w-1/2 bg-black items-center border-gray-50 border-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col items-center">
          <label
            htmlFor="balance"
            className="text-white text-3xl py-4 self-start"
          >
            Balance
          </label>
          <input
            id="balance"
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
            // onClick={() => customFunc()}

            className="relative text-2xl bg-white rounded-lg text-black  p-3 hover:bg-light-gray"
          >
            Update
          </button>
        </div>
      </form>
    </>
  );
};

export default UpdateAccount;
