"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatedButton, SearchButton2 } from "../buttons";
import { signIn } from "next-auth/react";
import {
  FormDiv,
  InputBody2,
  InputSignUp,
  SignUpFormLabel,
} from "../inputs/index";
import { getToken, validateEmail } from "@/lib/api";
import { saveEmail } from "@/lib";

interface HomeFormProps {
  className?: string;
  classInput?: string;
  classButton?: string;
  placeholder?: string;
}

export function HomeForm({
  className,
  classButton,
  classInput,
  placeholder,
}: HomeFormProps) {
  const router = useRouter();
  const handlerHomeForm = (e: any) => {
    e.preventDefault();
    const q = e.target.query.value as string;
    if (q === "") {
      throw console.log({ message: "search vacío" });
    } else if (q.length >= 3) {
      router.push("/search?query=" + q + "&offset=0");
    }
  };
  return (
    <form className={className} action="" onSubmit={handlerHomeForm}>
      <input
        className={classInput}
        name="query"
        placeholder={placeholder ? placeholder : "Click here to search"}
      />
      <AnimatedButton type="submit" buttonText="Search" className={classButton} />
    </form>
  );
}

interface FormProps {
  className?: string;
}
export function SearchForm({ className }: FormProps) {
  const router = useRouter();
  const formClass =
    "flex flex-col w-full p-3 gap-4 bg-black pt-0 md:hidden" +
    (className ? ` ${className}` : "");
  const handlerSearchForm = (e: any) => {
    e.preventDefault();
    const q = e.target.query.value;
    if (q === "") {
      throw console.log({ message: "search vacío" });
    } else {
      router.push("/search?query=" + q + "&offset=0");
    }
  };
  return (
    <form className={formClass} action="" onSubmit={handlerSearchForm}>
      <InputBody2 name="query" placeholder="Click here to search" />
      <SearchButton2 type="submit">Search</SearchButton2>
    </form>
  );
}

interface SignUpFormProps {
  setter: (data: any) => void;
}
export function SignUpForm({ setter }: SignUpFormProps) {
  const setData = setter;
  const [error, setError] = useState(""); // <-- Add error state

  const SignUpHandler = (e: any) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (email === "") {
      setError("Email cannot be empty"); // <-- Set error message
      return;
    }
    if (email.includes(" ")) {
      setError("Email cannot contain spaces"); // <-- Set error message
      return;
    }
    if (!email.includes("@")) {
      setError("Email must contain '@'"); // <-- Set error message
      return;
    }
    setError(""); // <-- Clear error if not empty
    const res = validateEmail(email);
    res.then((r) => {
      if (r) {
        console.log(r);
        saveEmail(email);
        setData("ready");
      }
    });
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <form
        className="flex flex-col max-w-[450px] gap-[10px]"
        action=""
        onSubmit={SignUpHandler}
      >
        <SignUpFormLabel>Email</SignUpFormLabel>
        <InputSignUp name="email" />
        {error && (
          <div className="text-red-500 text-[18px] font-semibold">{error}</div>
        )}
        <AnimatedButton type="submit" buttonText="Continue" />
      </form>
      Or
      <button
        className="text-blue-500 underline"
        type="button"
        onClick={() =>
          signIn("google", {
            callbackUrl: "/",
            prompt: "select_account", // 👈 fuerza selector de cuentas
          })
        }
      >
        Sign in with Google
      </button>
    </div>
  );
}

interface SignUpCodeFormProps {
  setCode: (code: number) => void;
}

export function SignUpCodeForm({ setCode }: SignUpCodeFormProps) {
  console.log("SignUpCodeForm rendered");
  const router = useRouter();
  const SignUpCodeHandler = (e: any) => {
    e.preventDefault();
    const code = e.target.code.value;
    const numberCode = parseInt(code, 10);
    console.log("Code entered:", numberCode);
    setCode(numberCode);
  };
  return (
    <form className="signUpFormDiv" action="" onSubmit={SignUpCodeHandler}>
      <InputSignUp name="code" />
      <FormDiv>We've sent you a code via email</FormDiv>
      <AnimatedButton type="submit" buttonText="Sign In" />
    </form>
  );
}
