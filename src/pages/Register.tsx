import { ChangeEvent, useState } from "react";
import FormInput from "../components/auth/AuthInput";
import FormContainer from "../components/auth/AuthForm";
import SubmitButton from "../components/ui/Button";
import PageHeading from "../components/ui/PageHeading";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormData((oldState) => ({ ...oldState, [name]: value }));
  };

  return (
    <div className="p-4 flex flex-col items-center">
      <PageHeading>create new account</PageHeading>

      <FormContainer handler={() => console.log(formData)}>
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

        <SubmitButton label="Create Account" type="submit" isDisabled={false} />
      </FormContainer>
    </div>
  );
};

export default Register;
