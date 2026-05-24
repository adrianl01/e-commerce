"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { retrieveToken } from "@/lib";
import { SignUp } from "./forms";
import { SignUpCode } from "./forms";

type AuthState =
  | "email"
  | "code"
  | "error";

export function LogIn() {
  const token = retrieveToken();
  const [state, setState] = useState<AuthState>("email");

  if (token) {
    return (
      <section className="mx-auto flex min-h-[70vh] max-w-[960px] items-center justify-center px-6">
        <div className="rounded-2xl border border-[#D9CFC0] bg-white p-10 text-center">
          <h2 className="mb-3 text-[28px] font-medium text-[#3B2A1A]">
            You're already logged in
          </h2>
          <p className="text-[#9A7E62]">
            Log out if you want to switch accounts.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto flex min-h-[70vh] max-w-[960px] items-center justify-center px-6 py-14">
      <AnimatePresence mode="wait">
        <motion.div
          key={state}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.2 }}
        >
          {state === "email" && (
            <SignUp setter={setState} />
          )}

          {state === "code" && (
            <SignUpCode />
          )}

          {state === "error" && (
            <div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center">
              <p className="text-red-600">
                Something went wrong. Please try again.
              </p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}