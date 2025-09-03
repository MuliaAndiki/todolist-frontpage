'use client';

import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';
import { TodolistType } from '@/app/types/components';
import { todoColumns } from '@/app/components/table-colums';

type TodoTableProps = {
  data: TodolistType[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
};

export default function TodoTable({ data, onEdit, onDelete }: TodoTableProps) {
  const table = useReactTable({
    data,
    columns: todoColumns(onEdit, onDelete),
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="border rounded-lg overflow-x-auto">
      <table className="w-full border-collapse">
        <thead className="bg-muted">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="border p-2 text-left font-bold">
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="hover:bg-accent">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border p-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
