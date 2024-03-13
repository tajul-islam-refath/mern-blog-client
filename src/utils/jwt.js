import { jwtDecode } from "jwt-decode";

export const decodeJwt = (payload) => {
  return jwtDecode(payload);
};
