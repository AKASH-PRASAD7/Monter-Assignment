import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import { Filter, X } from "lucide-react";
export default function Home() {
  return (
    <main className=" relative mx-8 mt-8">
      <section className="flex  justify-center items-center">
        <p className="text-xl font-semibold"> Recently Generated Reports</p>
        <span className="flex gap-4 absolute right-10 ">
          <Filter
            size={34}
            className="border-2 cursor-pointer border-gray-500 text-gray-500 border-2xl rounded-lg p-1 "
          />
          <X
            size={34}
            className="border-2 cursor-pointer border-gray-500 text-gray-500 border-2xl rounded-lg p-1 "
          />
        </span>
      </section>
      <section className="mt-4 flex flex-col items-center gap-4 justify-center">
        <Table />
        <Pagination />
      </section>
    </main>
  );
}
