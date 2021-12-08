import { ReactNode } from "react";
import { Header } from "../components/layout/Header";

interface Props {
  children: ReactNode;
}

export const AppLayout = (props: Props) => {
  const { children } = props;
  return (
    <>
      <header>
        <Header />
      </header>
      <main>{children}</main>
    </>
  );
};
