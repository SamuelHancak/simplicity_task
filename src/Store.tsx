import { createContext, useContext, useState } from "react";
import { NoticeType } from "./components/Table/Table.types.ts";

const DEFAULT_DATA: NoticeType[] = [
  {
    id: "notice-0",
    title: "Notice 1",
    content: "This is a notice",
    publicationDate: new Date("2022-01-01T10:20:30Z"),
    lastUpdate: new Date("2022-01-02T11:30:45Z"),
    categories: ["City", "Health"],
    link: "https://example.com/notice-1",
  },
  {
    id: "notice-1",
    title: "Notice 2",
    content: "This is another notice",
    publicationDate: new Date("2022-02-03T12:40:50Z"),
    lastUpdate: new Date("2022-02-04T13:50:55Z"),
    categories: ["Science", "Technology"],
    link: "https://example.com/notice-2",
  },
  {
    id: "notice-2",
    title: "Notice 3",
    content: "This is a third notice",
    publicationDate: new Date("2022-03-05T14:00:00Z"),
    lastUpdate: new Date("2022-03-06T15:10:15Z"),
    categories: ["City"],
    link: "https://example.com/notice-3",
  },
  {
    id: "notice-3",
    title: "Notice 4",
    content: "This is a fourth notice",
    publicationDate: new Date("2022-04-07T16:20:25Z"),
    lastUpdate: new Date("2022-04-08T17:30:35Z"),
    categories: ["Health", "Science"],
    link: "https://example.com/notice-4",
  },
];

const StoreContext = createContext<
  | {
      data: NoticeType[];
      addItem: (newData: NoticeType) => void;
      getItem: (id?: string) => NoticeType | undefined;
      updateItem: (id: string, newData: NoticeType) => void;
    }
  | undefined
>(undefined);

export const StoreProvider = ({ children }: { children: any }) => {
  const [data, setData] = useState(DEFAULT_DATA);

  const addItem = (newData: NoticeType) => {
    setData((prevData) => [...prevData, newData]);
  };

  const getItem = (id?: string) =>
    id ? data.find((item) => item.id === id) : undefined;

  const updateItem = (id: string, newData: NoticeType) => {
    setData((prevData) =>
      prevData.map((item) => (item.id === id ? newData : item)),
    );
  };

  return (
    <StoreContext.Provider value={{ data, addItem, getItem, updateItem }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
};
