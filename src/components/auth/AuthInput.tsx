import { ChangeEvent } from "react";

type Props = {
  label: string;
  type: "text" | "email" | "password";
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const FormInput = ({ label, type, name, value, onChange }: Props) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default FormInput;
