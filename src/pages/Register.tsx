// hooks
import { ChangeEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";
// api
import { postRegisterUser } from "../lib/api";
// components
import FormInput from "../components/auth/AuthInput";
import AuthForm from "../components/auth/AuthForm";
import Button from "../components/ui/Button";
import PageHeading from "../components/ui/PageHeading";
import LinkCard from "../components/auth/LinkCard";
import InputErrors, { InputError } from "../components/auth/InputErrors";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { mutate, isPending, isSuccess, isError, error } = useMutation({
    mutationFn: () => postRegisterUser({ ...formData }),
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormData((oldState) => ({ ...oldState, [name]: value }));
  };

  const buttonDisabled =
    !formData.firstName ||
    !formData.lastName ||
    !formData.email ||
    !formData.password ||
    formData.password !== formData.confirmPassword;

  if (isSuccess) {
    return (
      <div className="p-4 flex flex-col items-center">
        <LinkCard
          message="Account created successfully, we sent you verification email. Please verify email to finish registration."
          linkPath="/login"
          linkText="Go to login page!"
        />
      </div>
    );
  }

  return (
    <div className="p-4 flex flex-col items-center">
      <PageHeading>create new account</PageHeading>

      <AuthForm handler={mutate}>
        {isError && error.message === "Form input error" && (
          <InputErrors error={error as unknown as InputError} />
        )}

        <FormInput
          type="text"
          label="first name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />

        <FormInput
          type="text"
          label="last name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />

        <FormInput
          type="email"
          label="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <FormInput
          type="password"
          label="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <FormInput
          type="password"
          label="confirm password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        <Button
          label="Create Account"
          type="submit"
          isLoading={isPending}
          isDisabled={buttonDisabled}
        />
      </AuthForm>

      <LinkCard
        message="Already have account?"
        linkPath="/login"
        linkText="Login!"
      />
    </div>
  );
};

export default Register;
