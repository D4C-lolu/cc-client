import SortableTable, { DataArr } from "./SortableTable";
import axios from "axios";
import { useEffect, useState } from "react";

const API_URL = process.env.REACT_APP_API_URL as string;

const AccountsTable = () => {
  const [data, setData] = useState<DataArr>([]);
  useEffect(() => {
    axios
      .get(API_URL + "/accounts")
      .then((res) => res.data)
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);
  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="text-center">
          <p className="text-3xl  tracking-tight my-2 text-white border-b-lg border-white">
            Edit Accounts
          </p>
        </div>
        <div className="text-center mx-auto">
          <SortableTable data={data} />
        </div>
      </div>
    </>
  );
};

export default AccountsTable;
