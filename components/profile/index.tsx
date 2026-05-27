"use client";

import { useState } from "react";
import { updateAddress, updateProfile } from "@/redux/slices/profileSlice";
import { useAppDispatch } from "@/redux/store";
import { EditForm } from "./editUserForm";
import { UserInfo } from "./userInfo";
import type { userData } from "@/lib";


export function Profile() {
  const dispatch = useAppDispatch();
  const [edit, setEdit] = useState(false);

  const formHandler = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const get = (name: string) =>
      (form.elements.namedItem(name) as HTMLInputElement)?.value;

    const additionalUserData: userData = {
      firstName: get("firstName"),
      lastName: get("lastName"),
      userAge: Number(get("userAge")),
      phoneNumber: Number(get("tel")),
      address: get("address"),
    };

    dispatch(updateProfile(additionalUserData));
    dispatch(updateAddress(get("address")));

    setEdit(false);
  };

  return (
    <section className="mx-auto min-h-[70vh] max-w-[960px] px-6 py-14">
      <div className="rounded-2xl border border-[#D9CFC0] bg-white p-8">
        <div className="mb-8">
          <h1 className="text-[36px] font-medium text-[#3B2A1A]">
            My profile
          </h1>

          <p className="mt-2 text-[15px] text-[#9A7E62]">
            Manage your personal information.
          </p>
        </div>

        {edit ? (
          <EditForm
            handler={formHandler}
            cancel={() => setEdit(false)}
          />
        ) : (
          <UserInfo setter={setEdit} />
        )}
      </div>
    </section>
  );
}