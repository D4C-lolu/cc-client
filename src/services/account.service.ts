import axios from "axios";

const API_URL = "http://localhost:4000/";

//GET ALL ACCOUNTS
const getAllAccounts = () => {
  return axios
    .get(API_URL + "accounts", {
      withCredentials: true,
    })
    .then((res) => res.data)
    .catch((err) => err);
};

const getAccountById = (id: number) => {
  return axios
    .get(API_URL + `accounts/{id}`, {
      withCredentials: true,
    })
    .then((res) => res.data)
    .catch((err) => err);
};

const editAccountBalance = ({
  id,
  balance,
}: {
  id: number;
  balance: number;
}) => {
  return axios
    .patch(
      API_URL + "/accounts",
      {
        account_number: id,
        balance,
      },
      { withCredentials: true }
    )
    .catch((err) => {
      return err;
    });
};

const createAccount = ({ id, balance }: { id: number; balance: number }) => {
  return axios
    .post(
      API_URL + "/accounts",
      {
        account_number: id,
        balance,
      },
      { withCredentials: true }
    )
    .catch((err) => {
      return err;
    });
};

const deleteAccount = (id: number) => {
  return axios.delete(API_URL + `/accounts/${id}`).catch((err) => {
    return err;
  });
};

const AccountService = {
  createAccount,
  getAllAccounts,
  getAccountById,
  editAccountBalance,
  deleteAccount,
};

export default AccountService;
