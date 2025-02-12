import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const PageHeading = ({ children }: Props) => {
  return <h1>{children}</h1>;
};

export default PageHeading;
