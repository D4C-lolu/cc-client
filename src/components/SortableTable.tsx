import { MouseEventHandler, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { Data } from "../data";
import moment from "moment";
export type DataArr = Data[];

type SortKeys = keyof DataArr[0];

type SortOrder = "ascn" | "desc";

const formatDate = (date: Date) => {
  const formattedDate = moment(date).format("MMMM Do YYYY");
  return formattedDate;
};

function sortData({
  tableData,
  sortKey,
  reverse,
  data,
}: {
  tableData: DataArr;
  sortKey: SortKeys;
  reverse: boolean;
  data: DataArr;
}) {
  if (!sortKey) return tableData;

  const sortedData = data.sort((a, b) => {
    return a[sortKey] > b[sortKey] ? 1 : -1;
  });

  if (reverse) {
    return sortedData.reverse();
  }

  return sortedData;
}

function SortButton({
  sortOrder,
  columnKey,
  sortKey,
  onClick,
}: {
  sortOrder: SortOrder;
  columnKey: SortKeys;
  sortKey: SortKeys;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      onClick={onClick}
      className={`${
        sortKey === columnKey && sortOrder === "desc"
          ? "sort-button sort-reverse"
          : "sort-button"
      }`}
    >
      ▲
    </button>
  );
}

function SortableTable({ data }: { data: DataArr }) {
  const [sortKey, setSortKey] = useState<SortKeys>("user_name");
  const [sortOrder, setSortOrder] = useState<SortOrder>("ascn");

  const headers: { key: SortKeys; label: string }[] = [
    { key: "account_number", label: "Account Number" },
    { key: "user_name", label: "User name" },
    { key: "balance", label: "Account Balance" },
    { key: "created_at", label: "Date Created" },
    { key: "updated_at", label: "Date Updated" },
  ];

  const sortedData = useCallback(
    () =>
      sortData({
        tableData: data,
        sortKey,
        reverse: sortOrder === "desc",
        data,
      }),
    [data, sortKey, sortOrder]
  );

  function changeSort(key: SortKeys) {
    setSortOrder(sortOrder === "ascn" ? "desc" : "ascn");

    setSortKey(key);
  }

  return (
    <table>
      <thead>
        <tr className="bg-white">
          {headers.map((row) => {
            return (
              <td key={row.key}>
                {row.label}{" "}
                <SortButton
                  columnKey={row.key}
                  onClick={() => changeSort(row.key)}
                  {...{
                    sortOrder,
                    sortKey,
                  }}
                />
              </td>
            );
          })}
        </tr>
      </thead>

      <tbody>
        {sortedData().map((account) => {
          return (
            <tr key={account.account_number}>
              <td>{account.account_number}</td>
              <td>{account.user_name}</td>
              <td>
                <Link
                  to={`/account/${account.account_number}`}
                  className="text-blue-600"
                >
                  {account.balance}
                </Link>
              </td>
              <td>{formatDate(account?.created_at)}</td>
              <td>{formatDate(account?.updated_at)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default SortableTable;
