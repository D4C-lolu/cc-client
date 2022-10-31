import SortableTable from "./SortableTable";
import data from "../data.json";

const AccountsTable = () => {
  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="text-center">
          <p className="text-3xl  tracking-tight my-2 text-white">
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
