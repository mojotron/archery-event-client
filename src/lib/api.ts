import API from "../config/apiClient";

// register user
type RegisterParams = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};
export const postRegisterUser = async (data: RegisterParams) =>
  API.post("/auth/register", data);
// verify user email
export const getVerifyEmail = async (verificationCode: string) =>
  API.get(`/auth/email/verify/${verificationCode}`);
// login user
type LoginParams = {
  email: string;
  password: string;
};
export const postLoginUser = async (data: LoginParams) =>
  API.post("/auth/login", data);
