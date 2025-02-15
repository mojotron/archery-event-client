import { ChangeEvent, useState } from "react";
import PageHeading from "../components/ui/PageHeading";
import AuthForm from "../components/auth/AuthForm";
import FormInput from "../components/auth/AuthInput";
import Button from "../components/ui/Button";
import LinkCard from "../components/auth/LinkCard";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((oldState) => ({ ...oldState, [name]: value }));
  };

  const buttonDisabled = !formData.email || !formData.password;

  return (
    <div className="p-4 flex flex-col items-center">
      <PageHeading>Login to your Account</PageHeading>
      <AuthForm handler={() => console.log("hello")}>
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

        <Button
          label="Login"
          type="submit"
          isLoading={false}
          isDisabled={buttonDisabled}
        />
      </AuthForm>

      <LinkCard
        message="Don't have an account?"
        linkPath="/register"
        linkText="Register."
      />
    </div>
  );
};

export default Login;
