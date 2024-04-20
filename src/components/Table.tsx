"use client";
import { FileDown } from "lucide-react";
import React from "react";
import { useAppSelector } from "@/Globalredux/store";

interface RowType {
  date: string;
  reportName: string;
  download: boolean;
  time: string;
}

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
      <section className="w-11/12 ">
        <table className="w-full  ">
          <thead className="bg-slate-200">
            <tr className="text-slate-500">
              {columns.map((column) => (
                <th key={column.accessor}>{column.Header}</th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-slate-100">
            {data.map(
              (row: RowType, index: number) =>
                index >= start &&
                index <= end && (
                  <tr key={row.date}>
                    {columns.map((column) => (
                      <td className="text-center" key={column.accessor}>
                        {column.accessor === "download" ? (
                          <FileDown
                            size={32}
                            className=" cursor-pointer mx-auto  "
                          />
                        ) : (
                          <span className="xs:text-xs sm:text-sm  md:text-lg lg:text-xl">
                            {column.accessor === "date" ? (
                              <>
                                {row[column.accessor as keyof RowType]}
                                <p className="text-xs text-slate-500">
                                  {row.time}
                                </p>
                              </>
                            ) : (
                              <>{row[column.accessor as keyof RowType]}</>
                            )}
                          </span>
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
