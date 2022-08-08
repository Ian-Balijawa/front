import { API_URL } from "./constant";

export const routes = {
  register: `${API_URL}/auth/register`,
  login: `${API_URL}/auth/login`,
  profile: `${API_URL}/auth/profile`,
  logout: `${API_URL}/auth/logout`,
  forgotpassord: `${API_URL}/auth/forgot-passord`,
  resetpasword: `${API_URL}/auth/reset-passord`,
};
