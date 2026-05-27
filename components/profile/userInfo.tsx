"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

import { fetchProfile } from "@/redux/slices/profileSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";

import { retrieveToken } from "@/lib/storage";

const labels = [
  { label: "First name", key: "firstName" },
  { label: "Last name", key: "lastName" },
  { label: "Age", key: "userAge" },
  { label: "Phone", key: "phoneNumber" },
  { label: "Address", key: "address" },
] as const;

function getValue(data: any, key: string) {
  if (key === "address") return data.address;
  return data.additionalUserData?.[key];
}

export function UserInfo({
  setter,
}: {
  setter: (v: boolean) => void;
}) {
  const dispatch = useAppDispatch();

  const { data, status } = useAppSelector(
    (s) => s.profile
  );

  const token = retrieveToken();

  useEffect(() => {
    if (token && status === "idle") {
      dispatch(fetchProfile());
    }
  }, [token, status, dispatch]);

  if (status === "loading" || !data) {
    return (
      <div className="flex h-[300px] items-center justify-center text-[#9A7E62]">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      <button
        onClick={() => setter(true)}
        className="w-fit rounded-xl bg-[#7A5C3F] px-6 py-3 text-[14px] font-medium text-[#FAF7F2] transition-colors hover:bg-[#5E4530]"
      >
        Edit profile
      </button>

      <div className="grid gap-4 md:grid-cols-2">
        {labels.map((item) => (
          <motion.div
            key={item.key}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="rounded-xl border border-[#D9CFC0] bg-[#FAF7F2] p-5"
          >
            <div className="mb-2 text-[13px] uppercase tracking-[0.8px] text-[#9A7E62]">
              {item.label}
            </div>

            <div className="text-[18px] font-medium text-[#3B2A1A]">
              {getValue(data, item.key) || "-"}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}