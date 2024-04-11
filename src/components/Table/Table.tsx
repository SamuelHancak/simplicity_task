import React from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import "./Table.css";
import { format } from "date-fns";

type CategoriesType = "City" | "Health" | "Science" | "Technology";

type NoticeType = {
  id: string;
  title: string;
  publicationDate: Date;
  lastUpdate: Date;
  categories: CategoriesType[];
  link: string;
};

const defaultData: NoticeType[] = [
  {
    id: "notice-0",
    title: "Notice 1",
    publicationDate: new Date("2022-01-01T10:20:30Z"),
    lastUpdate: new Date("2022-01-02T11:30:45Z"),
    categories: ["City", "Health"],
    link: "https://example.com/notice-1",
  },
  {
    id: "notice-1",
    title: "Notice 2",
    publicationDate: new Date("2022-02-03T12:40:50Z"),
    lastUpdate: new Date("2022-02-04T13:50:55Z"),
    categories: ["Science", "Technology"],
    link: "https://example.com/notice-2",
  },
  {
    id: "notice-2",
    title: "Notice 3",
    publicationDate: new Date("2022-03-05T14:00:00Z"),
    lastUpdate: new Date("2022-03-06T15:10:15Z"),
    categories: ["City"],
    link: "https://example.com/notice-3",
  },
  {
    id: "notice-3",
    title: "Notice 4",
    publicationDate: new Date("2022-04-07T16:20:25Z"),
    lastUpdate: new Date("2022-04-08T17:30:35Z"),
    categories: ["Health", "Science"],
    link: "https://example.com/notice-4",
  },
];

const columnHelper = createColumnHelper<NoticeType>();

const columns = [
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
  }),
  columnHelper.accessor("categories", {
    id: "categories",
    header: "Categories",
  }),
  columnHelper.display({
    id: "link",
    cell: (cell) => <span>{cell.row.id}</span>,
  }),
];

const formatDate = (date: Date) => {
  return format(date, "MM/dd/yyyy HH:mm");
};

const TableComponent = () => {
  const [data, _setData] = React.useState(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
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

export default TableComponent;
