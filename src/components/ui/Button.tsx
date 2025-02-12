type Props = {
  label: string;
  type?: "button" | "submit";
  isDisabled?: boolean;
  clickHandler?: () => void;
};

const SubmitButton = ({
  label,
  type = "button",
  isDisabled = false,
  clickHandler,
}: Props) => {
  return (
    <button type={type} disabled={isDisabled} onClick={clickHandler}>
      {label}
    </button>
  );
};

export default SubmitButton;
