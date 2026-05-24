import { fetchAPI } from "../api";

export interface UserData {
  firstName: string;
  lastName: string;
  userAge: number;
  phoneNumber: number;
  address: string;
}

export async function getProfile() {
  return fetchAPI("me");
}

export async function updateProfile(
  additionalUserData: UserData
) {
  return fetchAPI("me", {
    method: "PATCH",
    body: JSON.stringify({
      additionalUserData,
    }),
  });
}

export async function updateAddress(
  address: string
) {
  return fetchAPI("me/address", {
    method: "PATCH",
    body: JSON.stringify({
      address,
    }),
  });
}