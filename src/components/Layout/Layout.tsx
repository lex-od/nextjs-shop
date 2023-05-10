import { FC, PropsWithChildren } from "react";
import clsx from "clsx";
import Header from "./Header/Header";
import { titillium } from "@/styles/fonts";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={clsx(titillium.variable, titillium.className)}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
