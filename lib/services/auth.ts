import { fetchAPI } from "../api";

import {
  getEmail,
  saveToken,
} from "../storage";

export async function validateEmail(
  email: string
) {
  return fetchAPI("auth", {
    method: "POST",
    body: JSON.stringify({ email }),
  });
}

export async function verifyCode(
  code: number
) {
  const email = getEmail();

  if (!email) {
    throw new Error(
      "Email not found"
    );
  }

  const data = await fetchAPI<{
    token: string;
    status?: number;
  }>("auth/token", {
    method: "POST",
    body: JSON.stringify({
      email,
      code,
    }),
  });

  if (!data.token) {
    throw new Error(
      "Token not found in response"
    );
  }
  saveToken(data.token);
  return data;
}