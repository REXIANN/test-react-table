"use client";

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";

type TData = { id: number; name: string; age: number };

const columnHelper = createColumnHelper();

const data = [
  { id: 1, name: "kim", age: 29 },
  { id: 2, name: "kim", age: 29 },
  { id: 3, name: "kim", age: 29 },
  { id: 4, name: "kim", age: 29 },
  { id: 5, name: "kim", age: 29 },
  { id: 6, name: "kim", age: 29 },
];

const columns = [
  columnHelper.accessor("id", {
    header: "ID",
  }),
  { accessorKey: "name", header: "NAME" },
  { accessorKey: "age", header: "AGE" },
];

export default function Home() {
  const tableInstance = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    enableRowSelection: true,
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
                    <th key={header.id} colSpan={header.colSpan}>
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
          <tbody>
            {tableInstance.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
