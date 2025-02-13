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
    <button
      type={type}
      disabled={isDisabled}
      onClick={clickHandler}
      className="cursor-pointer py-2.5 px-5 me-2 mb-2 text-sm font-md focus:outline-none rounded-lg border border-gray-200 focus:z-10 focus:ring-2 focus:ring-sec-blue-500 bg-main-500 text-main-300 dark:border-gray-600 hover:text-main-100 hover:bg-gray-500"
    >
      {label}
    </button>
  );
};

export default SubmitButton;
