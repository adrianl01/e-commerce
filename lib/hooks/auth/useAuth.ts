// /lib/hooks/auth/useAuth.ts

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  validateEmail,
  verifyCode,
} from "@/lib/services/auth";

import {
  retrieveToken,
  saveEmail,
  logout,
} from "@/lib/storage";

type AuthStep =
  | "email"
  | "code"
  | "authenticated";

export function useAuth() {
  const router = useRouter();

  const token =
    typeof window !== "undefined"
      ? retrieveToken()
      : null;

  const [step, setStep] =
    useState<AuthStep>(
      token
        ? "authenticated"
        : "email"
    );

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState<string | null>(null);

  async function sendCode(
    email: string
  ) {
    try {
      setLoading(true);
      setError(null);

      const cleanEmail =
        email.trim();

      if (!cleanEmail) {
        throw new Error(
          "Email is required"
        );
      }

      const valid =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
          cleanEmail
        );

      if (!valid) {
        throw new Error(
          "Invalid email"
        );
      }

      await validateEmail(
        cleanEmail
      );

      saveEmail(cleanEmail);

      setStep("code");

      return true;
    } catch (err: any) {
      setError(
        err?.message ||
          "Failed to send code"
      );

      return false;
    } finally {
      setLoading(false);
    }
  }

  async function signInWithCode(
    code: number
  ) {
    try {
      setLoading(true);
      setError(null);

      if (!code) {
        throw new Error(
          "Invalid code"
        );
      }

      await verifyCode(code);

      setStep(
        "authenticated"
      );

      router.push("/");

      return true;
    } catch (err: any) {
      setError(
        err?.message ||
          "Invalid or expired code"
      );

      return false;
    } finally {
      setLoading(false);
    }
  }

  function signOut() {
    logout();

    setStep("email");

    router.push("/");
  }

  return {
    token,
    authenticated: !!token,
    step,
    setStep,
    loading,
    error,
    sendCode,
    signInWithCode,
    signOut,
  };
}