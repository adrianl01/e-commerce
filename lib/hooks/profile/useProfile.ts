// /lib/hooks/profile/useProfile.ts

"use client";

import useSWR from "swr";

import {
  getProfile,
  updateProfile,
  updateAddress,
} from "@/lib/services/profile";

export interface UserData {
  firstName: string;
  lastName: string;
  userAge: number;
  phoneNumber: number;
  address: string;
}

export interface ProfileResponse {
  id?: string;
  email?: string;
  address?: string;
  additionalUserData?: UserData;
}

// export function useProfile() {
//   const {
//     data,
//     error,
//     isLoading,
//     mutate,
//   } = useSWR<ProfileResponse>(
//     "profile",
//     getProfile
//   );

//   async function updateUserProfile(
//     userData: UserData
//   ) {
//     const res = await updateProfile(
//       userData
//     );

//     await mutate();

//     return res;
//   }

//   async function updateUserAddress(
//     address: string
//   ) {
//     const res =
//       await updateAddress(address);

//     await mutate();

//     return res;
//   }

//   return {
//     data: data ?? null,
//     error,
//     isLoading,

//     updateUserProfile,
//     updateUserAddress,

//     mutate,
//   };
// }