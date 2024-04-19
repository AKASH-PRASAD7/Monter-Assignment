"use client";
import { FileDown } from "lucide-react";
import React from "react";
import { useAppSelector } from "@/Globalredux/store";

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
  const { data, page, rowsPerPage, total } = useAppSelector(
    (state) => state.table
  );

  const start = (page - 1) * rowsPerPage;
  const end = page * rowsPerPage;
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
            {data.map(
              (row, index) =>
                index >= start &&
                index <= end && (
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
                )
            )}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Table;
