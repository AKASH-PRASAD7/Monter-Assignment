"use client";
import { useAppSelector, useAppDispatch } from "@/Globalredux/store";
import { ChevronFirst, ChevronLast } from "lucide-react";
import React, { useState } from "react";
import {
  nextPage,
  prevPage,
  setPage,
  setRowsPerPage,
} from "@/Globalredux/tableSlice";

const Pagination = () => {
  const dispatch = useAppDispatch();
  const { page, rowsPerPage, total } = useAppSelector((state) => state.table);
  const [selectedValue, setSelectedValue] = useState(10);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    setSelectedValue(+newValue);
    dispatch(setRowsPerPage(+newValue));
  };

  return (
    <>
      <main className="flex justify-between  mt-2 items-center mb-24">
        <section className="flex justify-center items-center mx-2 gap-4">
          <span
            onClick={() => dispatch(prevPage())}
            className="flex text-gray-700 xs:text-sm sm:text-sm  md:text-lg lg:text-xl  cursor-pointer  justify-center items-center "
          >
            <ChevronFirst size={32} />
            Prev
          </span>
          <div className="flex gap-2">
            {total / rowsPerPage >= 5
              ? Array(Math.ceil(total / rowsPerPage))
                  .fill("")
                  .map(
                    (_, index) =>
                      index <= 5 && (
                        <span
                          key={index}
                          onClick={() => dispatch(setPage(index + 1))}
                          className={`${
                            page === index + 1
                              ? "bg-orange-500 text-xl text-white"
                              : "border-1 border-slate-500 text-slate-500"
                          } cursor-pointer  px-2   rounded-lg`}
                        >
                          {index + 1}
                        </span>
                      )
                  )
              : Array(Math.ceil(total / rowsPerPage))
                  .fill("")
                  .map((_, index) => (
                    <span
                      key={index}
                      onClick={() => dispatch(setPage(index + 1))}
                      className={`${
                        page === index + 1
                          ? "bg-orange-500 text-xl  text-white"
                          : "border-2  border-slate-500 text-slate-500"
                      } cursor-pointer px-2 rounded-lg`}
                    >
                      {index + 1}
                    </span>
                  ))}
          </div>
          <span
            onClick={() => dispatch(nextPage())}
            className="flex xs:text-sm sm:text-sm  md:text-lg lg:text-xl   cursor-pointer text-gray-700 justify-center items-center "
          >
            Next
            <ChevronLast size={32} />
          </span>
        </section>

        <section className="flex xs:text-sm sm:text-sm mx-2 md:text-lg lg:text-xl  text-gray-700 gap-4">
          <p>Rows per page</p>
          <select
            onChange={(e) => handleSelectChange(e)}
            value={selectedValue}
            className="rounded-md cursor-pointer border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </select>
        </section>
      </main>
    </>
  );
};

export default Pagination;
