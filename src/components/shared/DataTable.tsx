"use client";

import React, { Fragment } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  ColumnDef,
  flexRender,
  RowData,
} from "@tanstack/react-table";
import { Listbox, Transition } from "@headlessui/react";
import { ArrowDown2 } from "iconsax-react";

type DataTableProps<T extends RowData> = {
  data: T[];
  columns: ColumnDef<T, any>[];
  initialPageSize?: number;
  compactSelectColumn?: boolean;
  onRowClick?: (row: T) => void;
  clickableRows?: boolean;

  /** NEW */
  className?: string;
};

export default function DataTable<T extends RowData>({
  data,
  columns,
  initialPageSize = 10,
  compactSelectColumn = false,
  onRowClick,
  clickableRows = false,
  className,
}: DataTableProps<T>) {
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: initialPageSize,
  });

  const table = useReactTable({
    data,
    columns,
    state: { pagination },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const pageCount = table.getPageCount();
  const current = pagination.pageIndex;

  const pageNumbers = Array.from({ length: pageCount }, (_, i) => i);

  return (
    <div
      className={`border bg-card p-4 ${className ?? ""}`}
      style={{ borderColor: "var(--border)" }}
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] table-fixed text-sm">
          <thead className="text-left text-xs text-muted-foreground">
            {table.getHeaderGroups().map((hg) => (
              <tr key={hg.id}>
                {hg.headers.map((h) => {
                  const accessorKey = (h.column.columnDef as any).accessorKey;
                  const isSelect = accessorKey === "select";

                  return (
                    <th
                      key={h.id}
                      className={
                        isSelect && compactSelectColumn
                          ? "w-[48px] text-center"
                          : "py-3 px-4 font-medium"
                      }
                    >
                      {h.isPlaceholder
                        ? null
                        : flexRender(h.column.columnDef.header, h.getContext())}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>

          <tbody className="divide-y">
            {table.getRowModel().rows.length === 0 && (
              <tr>
                <td
                  colSpan={columns.length}
                  className="py-8 text-center text-muted-foreground"
                >
                  No records found
                </td>
              </tr>
            )}

            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                onClick={() =>
                  clickableRows && onRowClick ? onRowClick(row.original) : null
                }
                className={`odd:bg-transparent even:bg-white/50 ${
                  clickableRows ? "cursor-pointer hover:bg-blue-50/40" : ""
                }`}
              >
                {row.getVisibleCells().map((cell) => {
                  const accessorKey = (cell.column.columnDef as any)
                    .accessorKey;
                  const isSelect = accessorKey === "select";

                  return (
                    <td
                      key={cell.id}
                      className={`${
                        isSelect && compactSelectColumn
                          ? "w-[48px] text-center"
                          : "py-4 px-4"
                      } ${clickableRows ? "hover:underline" : ""}`}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex items-center justify-between">
        <Listbox
          value={pagination.pageSize}
          onChange={(value) =>
            setPagination((prev) => ({ ...prev, pageSize: value }))
          }
        >
          <div className="relative">
            {/* Button */}
            <Listbox.Button
              className="
        flex items-center justify-between gap-2
        rounded-full border bg-white px-4 py-2 
        text-sm text-gray-700 cursor-pointer
        min-w-[150px]
      "
            >
              <span className="flex items-center gap-2">
                <span className="text-gray-500">Show</span>
                <span className="font-medium">{pagination.pageSize}/page</span>
              </span>

              {/* Down Arrow Icon */}
              <ArrowDown2 size={16} variant="Linear" color="#6B7280" />
            </Listbox.Button>

            {/* OPTIONS DROPDOWN — OPENS UPWARD */}
            <Transition
              as={Fragment}
              enter="transition duration-150"
              enterFrom="opacity-0 -translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition duration-100"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-1"
            >
              <Listbox.Options
                className="
          absolute bottom-12   /* <-- opens upward */
          w-full 
          rounded-lg border bg-white shadow 
          text-sm z-50
        "
              >
                {[5, 10, 20, 50].map((size) => (
                  <Listbox.Option
                    key={size}
                    value={size}
                    className={({ active }) =>
                      `cursor-pointer px-4 py-2 ${active ? "bg-gray-100" : ""}`
                    }
                  >
                    {size}/page
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>

        {/* PAGE NUMBERS */}
        <div className="flex items-center gap-3 text-sm">
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="text-gray-600 disabled:text-gray-300"
          >
            Prev
          </button>

          <div className="flex items-center gap-2">
            {pageNumbers.map((num, idx) => {
              const show =
                idx < 5 ||
                idx === pageCount - 1 ||
                idx === current ||
                Math.abs(idx - current) <= 1;

              if (!show) return null;

              if (idx === 5 && pageCount > 6) {
                return (
                  <span key="ellipsis" className="text-gray-400 px-2">
                    …
                  </span>
                );
              }

              const active = num === current;

              return (
                <button
                  key={num}
                  onClick={() =>
                    setPagination((prev) => ({
                      ...prev,
                      pageIndex: num,
                    }))
                  }
                  className={`w-8 h-8 rounded-full flex items-center justify-center border transition ${
                    active
                      ? "bg-blue-600 text-white border-blue-600"
                      : "text-blue-600 border-blue-300 hover:bg-blue-50"
                  }`}
                >
                  {String(num + 1).padStart(2, "0")}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="text-gray-600 disabled:text-gray-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
