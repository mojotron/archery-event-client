import { ChangeEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";
// api
import { postForgotPassword } from "../lib/api";
// components
import PageHeading from "../components/ui/PageHeading";
import AuthForm from "../components/auth/AuthForm";
import AuthInput from "../components/auth/AuthInput";
import Button from "../components/ui/Button";
import InputErrors, { InputError } from "../components/auth/InputErrors";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const { mutate, isPending, isError, error, isSuccess } = useMutation({
    mutationFn: () => postForgotPassword(email),
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  if (isSuccess) {
    return (
      <div className="p-4 flex flex-col items-center">
        <p className="text-md text-main-300 font-inter">
          Email sent! check your inbox for further instructions.
        </p>
      </div>
    );
  }

  return (
    <div className="p-4 flex flex-col items-center">
      <PageHeading>Reset your password</PageHeading>
      <AuthForm handler={mutate}>
        {isError && <InputErrors error={error as unknown as InputError} />}
        <AuthInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <Button
          type="submit"
          label="reset password"
          isLoading={isPending}
          isDisabled={!email}
        />
      </AuthForm>
    </div>
  );
};

export default ForgotPassword;
