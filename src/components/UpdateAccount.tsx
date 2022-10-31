import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Data } from "../data";
import { useNavigate } from "react-router-dom";

type UpdateAccountValue = {
  balance: number;
};

const API_URL = process.env.REACT_APP_API_URL as string;

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

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const onSubmit = (data: any) => {
    axios
      .patch(API_URL + "/accounts", {
        account_number: parseFloat(id as string),
        balance: data.balance,
      })

      .catch((err) => {
        return err;
      });
    reset();
    navigate("/");
  };

  const [account, setAccount] = useState<Data>();

  useEffect(() => {
    axios
      .get(API_URL + "/accounts/" + id)
      .then((res) => res.data)
      .then((res) => setAccount(res))
      .catch((err) => err);
  }, [id]);

  return (
    <>
      <div className="py-10 text-center">
        <p className="text-white text-4xl border-b-lg border-white">
          Update Account Balance
        </p>
      </div>
      <div className="text-center">
        <div className="text-white text-2xl py-4 self-start ">
          Account Name: {account?.user_name}
        </div>
      </div>
      <div className="text-center pt-4">
        <div className="text-white text-2xl py-4 self-start">
          Account Number: {account?.account_number}
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
        <div className="flex justify-around  w-full py-5">
          <button
            type="submit"
            className="relative text-2xl bg-white rounded-lg text-black  p-3 hover:bg-light-gray"
          >
            Update
          </button>
          <button
            className="relative text-2xl bg-white rounded-lg text-black  p-3 hover:bg-light-gray"
            onClick={(e) => {
              e.preventDefault();
              axios.delete(API_URL + "/accounts/" + id).catch((err) => {
                return err;
              });

              navigate("/");
            }}
          >
            Delete
          </button>
        </div>
      </form>
      <div className="flex justify-around  w-full py-5">
        <button
          className="relative text-2xl bg-white rounded-lg text-black  p-3 hover:bg-light-gray"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
        >
          Back
        </button>
      </div>
    </>
  );
};

export default UpdateAccount;
