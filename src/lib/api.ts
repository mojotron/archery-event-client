import API from "../config/apiClient";
import { ResponseSessionsType } from "../types/sessionType";

import { ResponseUserType } from "../types/userType";
//AUTH
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
// forgot password
export const postForgotPassword = async (email: string) =>
  API.post("/auth/password/forgot", { email });
// reset password
type ResetPasswordParams = {
  verificationCode: string;
  password: string;
};
export const postResetPassword = async (data: ResetPasswordParams) =>
  API.post("/auth/password/reset", data);
// logout
export const getLogout = async () => API.get("/auth/logout");

// USER
// get user data
export const getUser = async (): Promise<ResponseUserType> => API.get("/user");

//SESSIONS
// get all sessions
export const getSessions = async (): Promise<ResponseSessionsType> =>
  API.get("/sessions");
// delete session
export const deleteSession = async (sessionId: string) =>
  API.delete(`/sessions/${sessionId}`);
