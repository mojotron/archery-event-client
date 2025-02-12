import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  handler: () => void;
};

const FormContainer = ({ handler, children }: Props) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handler();
      }}
    >
      {children}
    </form>
  );
};

export default FormContainer;
