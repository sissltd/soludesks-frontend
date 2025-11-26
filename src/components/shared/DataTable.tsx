"use client";

import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  ColumnDef,
  flexRender,
  RowData,
} from "@tanstack/react-table";

type DataTableProps<T extends RowData> = {
  data: T[];
  columns: ColumnDef<T, any>[];
  initialPageSize?: number;

  /** Makes the first column perfectly aligned */
  compactSelectColumn?: boolean;
};

export default function DataTable<T extends RowData>({
  data,
  columns,
  initialPageSize = 10,
  compactSelectColumn = false,
}: DataTableProps<T>) {
  // Pagination state
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

  // Build page numbers array
  const pageNumbers = Array.from({ length: pageCount }, (_, i) => i);

  return (
    <div
      className="rounded-xl border bg-card p-4"
      style={{ borderColor: "var(--border)" }}
    >
      {/* Table */}
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
            {/* No records */}
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

            {/* Rows */}
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="odd:bg-transparent even:bg-white/50">
                {row.getVisibleCells().map((cell) => {
                  const accessorKey = (cell.column.columnDef as any)
                    .accessorKey;
                  const isSelect = accessorKey === "select";

                  return (
                    <td
                      key={cell.id}
                      className={
                        isSelect && compactSelectColumn
                          ? "w-[48px] text-center"
                          : "py-4 px-4"
                      }
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

      {/* Pagination Footer */}
      <div className="mt-6 flex items-center justify-between">
        {/* Page size selector */}
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <label>Show</label>

          <select
            value={pagination.pageSize}
            onChange={(e) =>
              setPagination((prev) => ({
                ...prev,
                pageSize: Number(e.target.value),
              }))
            }
            className="rounded-md border px-3 py-1 bg-white text-sm"
            style={{ borderColor: "var(--border)" }}
          >
            {[5, 10, 20, 50].map((s) => (
              <option key={s} value={s}>
                {s}/page
              </option>
            ))}
          </select>
        </div>

        {/* Paging */}
        <div className="flex items-center gap-3 text-sm">
          {/* Prev */}
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="text-gray-600 disabled:text-gray-300"
          >
            Prev
          </button>

          {/* Page numbers */}
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
                  className={`w-8 h-8 rounded-full flex items-center justify-center border transition
                    ${
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

          {/* Next */}
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

// "use client";

// import React from "react";
// import {
//   useReactTable,
//   getCoreRowModel,
//   getPaginationRowModel,
//   ColumnDef,
//   flexRender,
//   RowData,
// } from "@tanstack/react-table";

// type DataTableProps<T extends RowData> = {
//   data: T[];
//   columns: ColumnDef<T, any>[];
//   initialPageSize?: number;
// };

// export default function DataTable<T extends RowData>({
//   data,
//   columns,
//   initialPageSize = 10,
// }: DataTableProps<T>) {
//   // Pagination state (correct for TanStack React Table v8)
//   const [pagination, setPagination] = React.useState({
//     pageIndex: 0,
//     pageSize: initialPageSize,
//   });

//   const table = useReactTable({
//     data,
//     columns,
//     state: { pagination },
//     onPaginationChange: setPagination,
//     getCoreRowModel: getCoreRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//   });

//   const pageCount = table.getPageCount();
//   const current = pagination.pageIndex;

//   /** Build pagination page array (first 5, last page, ellipsis) */
//   const pageNumbers = Array.from({ length: pageCount }, (_, i) => i);

//   return (
//     <div
//       className="rounded-xl border bg-card p-4"
//       style={{ borderColor: "var(--border)" }}
//     >
//       {/* table */}
//       <div className="overflow-x-auto">
//         <table className="w-full min-w-[720px] table-fixed text-sm">
//           <thead className="text-left text-xs text-muted-foreground">
//             {table.getHeaderGroups().map((hg) => (
//               <tr key={hg.id}>
//                 {hg.headers.map((h) => (
//                   <th key={h.id} className="py-3 px-4 font-medium">
//                     {h.isPlaceholder
//                       ? null
//                       : flexRender(h.column.columnDef.header, h.getContext())}
//                   </th>
//                 ))}
//               </tr>
//             ))}
//           </thead>

//           <tbody className="divide-y">
//             {table.getRowModel().rows.length === 0 && (
//               <tr>
//                 <td
//                   colSpan={columns.length}
//                   className="py-8 text-center text-muted-foreground"
//                 >
//                   No records found
//                 </td>
//               </tr>
//             )}

//             {table.getRowModel().rows.map((row) => (
//               <tr key={row.id} className="odd:bg-transparent even:bg-white/50">
//                 {row.getVisibleCells().map((cell) => (
//                   <td key={cell.id} className="py-4 px-4 align-top">
//                     {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* footer / pagination */}
//       <div className="mt-6 flex items-center justify-between">
//         {/* Page size selector */}
//         <div className="flex items-center gap-3 text-sm text-muted-foreground">
//           <label>Show</label>

//           <select
//             value={pagination.pageSize}
//             onChange={(e) =>
//               setPagination((prev) => ({
//                 ...prev,
//                 pageSize: Number(e.target.value),
//               }))
//             }
//             className="rounded-md border px-3 py-1 bg-white text-sm"
//             style={{ borderColor: "var(--border)" }}
//           >
//             {[5, 10, 20, 50].map((s) => (
//               <option key={s} value={s}>
//                 {s}/page
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Pagination control */}
//         <div className="flex items-center gap-3 text-sm">
//           {/* Prev */}
//           <button
//             onClick={() => table.previousPage()}
//             disabled={!table.getCanPreviousPage()}
//             className="text-gray-600 disabled:text-gray-300"
//           >
//             Prev
//           </button>

//           {/* Page numbers */}
//           <div className="flex items-center gap-2">
//             {pageNumbers.map((num, idx) => {
//               const show = idx < 5 || idx === pageCount - 1 || idx === current;

//               if (!show) return null;

//               // Insert ellipsis once before final page
//               if (idx === 5) {
//                 return (
//                   <span key="ellipsis" className="text-gray-400 px-2">
//                     …
//                   </span>
//                 );
//               }

//               const active = num === current;

//               return (
//                 <button
//                   key={num}
//                   onClick={() =>
//                     setPagination((prev) => ({ ...prev, pageIndex: num }))
//                   }
//                   className={`w-8 h-8 rounded-full flex items-center justify-center border transition
//                 ${
//                   active
//                     ? "bg-blue-600 text-white border-blue-600"
//                     : "text-blue-600 border-blue-300 hover:bg-blue-50"
//                 }`}
//                 >
//                   {String(num + 1).padStart(2, "0")}
//                 </button>
//               );
//             })}
//           </div>

//           {/* Next */}
//           <button
//             onClick={() => table.nextPage()}
//             disabled={!table.getCanNextPage()}
//             className="text-gray-600 disabled:text-gray-300"
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
