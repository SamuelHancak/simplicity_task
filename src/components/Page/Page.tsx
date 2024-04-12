import { FC } from "react";
import { Outlet } from "react-router-dom";
import { PageProps } from "./Page.types.ts";

const Page: FC<PageProps> = ({ children, title }) => (
  <>
    <h2>{title}</h2>
    {children}
    <Outlet />
  </>
);

export default Page;
