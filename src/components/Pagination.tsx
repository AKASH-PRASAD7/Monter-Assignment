import { ChevronFirst, ChevronLast } from "lucide-react";
import React from "react";

const Pagination = () => {
  return (
    <>
      <main className="flex justify-between w-4/12 items-center mb-8">
        <section className="flex justify-center items-center  gap-4">
          <span className="flex text-gray-700 cursor-pointer justify-center items-center ">
            <ChevronFirst size={32} />
            Prev
          </span>
          <span className="text-white  cursor-pointer bg-orange-500 px-2 text-lg  rounded-lg">
            1
          </span>
          <span className="flex text-gray-700 justify-center cursor-pointer items-center ">
            Next
            <ChevronLast size={32} />
          </span>
        </section>

        <section className="flex text-gray-700 gap-4">
          <span>Rows per page</span>
          <select className="rounded-md cursor-pointer border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
            <option>10</option>
            <option>20</option>
            <option>30</option>
          </select>
        </section>
      </main>
    </>
  );
};

export default Pagination;
