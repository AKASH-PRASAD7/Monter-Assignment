import { FileDown } from "lucide-react";
import React from "react";

const data = [
  {
    date: "2024-04-19",
    reportName: "Monthly Sales Report",
    download: "https://example.com/monthly-sales-report.pdf",
  },
  {
    date: "2024-04-18",
    reportName: "Quarterly Financial Statement",
    download: "https://example.com/quarterly-financial-statement.pdf",
  },
  {
    date: "2024-04-17",
    reportName: "Annual Marketing Analysis",
    download: "https://example.com/annual-marketing-analysis.pdf",
  },
  {
    date: "2024-04-19",
    reportName: "Monthly Sales Report",
    download: "https://example.com/monthly-sales-report.pdf",
  },
  {
    date: "2024-04-18",
    reportName: "Quarterly Financial Statement",
    download: "https://example.com/quarterly-financial-statement.pdf",
  },
  {
    date: "2024-04-17",
    reportName: "Annual Marketing Analysis",
    download: "https://example.com/annual-marketing-analysis.pdf",
  },
  {
    date: "2024-04-19",
    reportName: "Monthly Sales Report",
    download: "https://example.com/monthly-sales-report.pdf",
  },
  {
    date: "2024-04-18",
    reportName: "Quarterly Financial Statement",
    download: "https://example.com/quarterly-financial-statement.pdf",
  },
  {
    date: "2024-04-17",
    reportName: "Annual Marketing Analysis",
    download: "https://example.com/annual-marketing-analysis.pdf",
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
