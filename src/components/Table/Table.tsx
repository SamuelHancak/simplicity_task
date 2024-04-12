import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import "./Table.css";
import { format } from "date-fns";
import { DATE_FORMAT, NoticeType } from "./Table.types";
import { Pencil } from "lucide-react";
import { Link } from "react-router-dom";
import { useStore } from "../../Store.tsx";

const columnHelper = createColumnHelper<NoticeType>();

const COLUMNS = [
  columnHelper.accessor("title", {
    id: "title",
    header: "Title",
  }),
  columnHelper.accessor("publicationDate", {
    id: "publicationDate",
    cell: (cell) => formatDate(cell.getValue()),
    header: "Publication Date",
  }),
  columnHelper.accessor("lastUpdate", {
    id: "lastUpdate",
    cell: (cell) => formatDate(cell.getValue()),
    header: "Last Update",
    sortingFn: "datetime",
  }),
  columnHelper.accessor("categories", {
    id: "categories",
    header: "Categories",
  }),
  columnHelper.display({
    id: "link",
    cell: (cell) => (
      <Link
        className="link-button"
        style={{ display: "flex", justifyContent: "flex-end" }}
        to={`/announcements/${cell.row.original.id}`}
      >
        <Pencil size={15} />
      </Link>
    ),
  }),
];

const formatDate = (date: Date) => {
  return format(date, DATE_FORMAT);
};

const Table = () => {
  const { data } = useStore();
  const table = useReactTable({
    data,
    columns: COLUMNS,
    getCoreRowModel: getCoreRowModel(),
    debugTable: true,
    initialState: {
      sorting: [
        {
          id: "lastUpdate",
          desc: true,
        },
      ],
    },
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
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
      <div />
    </>
  );
};

export default Table;
