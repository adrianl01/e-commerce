import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatedButton, SearchButton2 } from "../buttons";
import {
  FormDiv,
  InputBody2,
  InputSignUp,
  SignUpFormLabel,
} from "../inputs/index";
import { getToken, validateEmail } from "@/lib/api";
import { saveEmail } from "@/lib";
type HomeFormProps = {
  className?: string;
  classInput?: string;
  classButton?: string;
};

export function HomeForm({
  className,
  classButton,
  classInput,
}: HomeFormProps) {
  const router = useRouter();
  const handlerHomeForm = (e: any) => {
    e.preventDefault();
    const q = e.target.query.value;
    if (q === "") {
      throw console.log({ message: "search vacío" });
    } else {
      router.push("/search?query=" + q + "&offset=0");
    }
  };
  return (
    <form className={className} action="" onSubmit={handlerHomeForm}>
      <input
        className={classInput}
        name="query"
        placeholder="Find your product"
      />
      <AnimatedButton type="submit" buttonText="Search" />
    </form>
  );
}

type FormProps = {
  className?: string;
};
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

type SignUpFormProps = { setter: (data: any) => void };
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
    <form
      className="flex flex-col max-w-[450px] gap-[15px]"
      action=""
      onSubmit={SignUpHandler}
    >
      <SignUpFormLabel>Email</SignUpFormLabel>
      <InputSignUp name="email" />
      {error && (
        <div className="text-red-500 text-[18px] font-semibold">{error}</div>
      )}
      <AnimatedButton type="submit" buttonText="Sign Up" />
    </form>
  );
}

export function SignUpCodeForm() {
  const router = useRouter();
  const SignUpCodeHandler = (e: any) => {
    e.preventDefault();
    const code = e.target.code.value;
    const res = getToken(code);
    res.then((r) => {
      console.log("getTokenRes:", r);
      router.push("/");
    });
  };
  return (
    <form className="signUpFormDiv" action="" onSubmit={SignUpCodeHandler}>
      <InputSignUp name="code" />
      <FormDiv>We've sent you a code via email</FormDiv>
      <AnimatedButton type="submit" buttonText="Sign In" />
    </form>
  );
}
