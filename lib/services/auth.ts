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
  }>("auth/token", {
    method: "POST",
    body: JSON.stringify({
      email,
      code,
    }),
  });

  saveToken(data.token);

  return data;
}