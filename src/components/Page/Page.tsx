import Sidebar from "../Sidebar/Sidebar.tsx";
import "./Page.css";
import { FC, ReactElement } from "react";

export type PageProps = {
  children: ReactElement;
  title: string;
};

const Page: FC<PageProps> = (props) => {
  const { children, title } = props;

  return (
    <div className="page">
      <Sidebar />
      <div className="content">
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default Page;
