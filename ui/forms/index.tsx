import { useRouter } from "next/navigation";
import { SearchButton2 } from "../buttons";
import { FormDiv, InputBody2, InputSignUp, SignUpFormLabel } from "./style";
import Form from "next/form";
import { getToken, validateEmail } from "@/lib/api";
import { saveEmail } from "@/lib";

export function HomeForm(props: any) {
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
    <Form className={props.class} action="" onSubmit={handlerHomeForm}>
      <input
        className={props.classInput}
        name="query"
        placeholder="Find your product"
      />
      <button className={props.classButton} type="submit">
        Search
      </button>
    </Form>
  );
}
export function SearchForm() {
  const router = useRouter();
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
    <Form className="homeFormDiv2" action="" onSubmit={handlerSearchForm}>
      <InputBody2 name="query" placeholder="Click here to search" />
      <SearchButton2 type="submit">Search</SearchButton2>
    </Form>
  );
}
export function SignUpForm(props: any) {
  const setData = props.setter;
  const SignUpHandler = (e: any) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log(email);
    const res = validateEmail(email);
    res.then((r) => {
      console.log(r);
      if (r) {
        saveEmail(email);
        setData(true);
      }
    });
  };
  return (
    <Form className="signUpFormDiv" action="" onSubmit={SignUpHandler}>
      <SignUpFormLabel>Email</SignUpFormLabel>
      <InputSignUp name="email" />
      <button
        className="bg-[#d14e6d] rounded-lg py-1 text-black w-[100%]"
        type="submit"
      >
        Continue
      </button>{" "}
    </Form>
  );
}

export function SignUpCodeForm(prop: any) {
  const router = useRouter();
  const SignUpCodeHandler = (e: any) => {
    const code = e.target.code.value;
    const res = getToken(code);
    res.then((r) => {
      console.log("getTokenRes:", r);
      router.push("/");
    });
  };
  return (
    <Form className="signUpFormDiv" action="" onSubmit={SignUpCodeHandler}>
      <InputSignUp name="code" />
      <FormDiv>We sent you a code via email</FormDiv>
      <button
        className="bg-[#d14e6d] rounded-lg py-1 text-black w-[100%]"
        type="submit"
      >
        Sign In
      </button>{" "}
    </Form>
  );
}
