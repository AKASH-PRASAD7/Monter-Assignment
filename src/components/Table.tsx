import { FileDown } from "lucide-react";
import React from "react";

const data = [
  {
    date: "19.04.2020",
    reportName: "APP_URL_202004_Sales.csv",
    download: true,
  },
  {
    date: "18.04.2020",
    reportName: "APP_URL_202004_Profit.csv",
    download: true,
  },
  {
    date: "17.04.2020",
    reportName: "APP_URL_202004_Expenses.csv",
    download: true,
  },
  {
    date: "16.04.2020",
    reportName: "APP_URL_202004_Customers.csv",
    download: true,
  },
];

const columns = [
  {
    Header: "Date",
    accessor: "date",
  },
  {
    Header: "Report Name",
    accessor: "reportName",
  },
  {
    Header: "Download",
    accessor: "download",
  },
];

const Table = () => {
  return (
    <>
      <section className="w-11/12">
        <table className="w-full ">
          <thead className="bg-slate-200">
            <tr className="text-slate-500">
              {columns.map((column) => (
                <th key={column.accessor}>{column.Header}</th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-slate-100">
            {data.map((row: any) => (
              <tr key={row.date}>
                {columns.map((column) => (
                  <td className="text-center" key={column.accessor}>
                    {column.accessor === "download" ? (
                      <FileDown
                        size={32}
                        className=" cursor-pointer mx-auto text-gray-500  "
                      />
                    ) : (
                      row[column.accessor]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Table;
