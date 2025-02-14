export type InputError = {
  message: string;
  inputErrors: { message: string }[];
};

const InputErrors = ({ error }: { error: InputError }) => {
  return (
    <ul className="text-error text-sm font-inter space-y-1">
      {error.inputErrors.map((err, i) => (
        <li key={i}>{err.message}</li>
      ))}
    </ul>
  );
};

export default InputErrors;
