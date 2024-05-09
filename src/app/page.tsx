"use client";

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

type TData = { id: number; name: string; age: number };

const data = [
  { id: 1, name: "kim", age: 29 },
  { id: 2, name: "kim", age: 29 },
  { id: 3, name: "kim", age: 29 },
  { id: 4, name: "kim", age: 29 },
  { id: 5, name: "kim", age: 29 },
  { id: 6, name: "kim", age: 29 },
];

const columns = [
  { header: "ID", accessorKey: "id" },
  { header: "Name", accessorKey: "name" },
  { header: "Age", accessorKey: "age" },
];

export default function Home() {
  const tableInstance = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <main>
      <div>
        <table>
          <thead>
            {tableInstance.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  // console.log(
                  //   header.column.columnDef.header,
                  //   header.getContext(),
                  // );
                  return (
                    <th key={header.id}>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
        </table>
      </div>
    </main>
  );
}
