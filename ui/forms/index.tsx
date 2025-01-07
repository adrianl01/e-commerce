import { useRouter } from "next/router";
import { SearchButton2 } from "../buttons";
import { FormDiv, InputBody2, InputSignUp, SignUpFormLabel } from "./style";
import Form from "next/form";
import { getToken, validateEmail } from "@/lib/api";

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
    <Form
      className="flex flex-col gap-4 w-[100%]"
      action=""
      onSubmit={handlerHomeForm}
    >
      <input
        className={props.classInput}
        name="query"
        placeholder="Encontrá tu producto Ideal"
      />
      <button className={props.classButton} type="submit">
        Buscar
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
export function SignUpForm() {
  const SignUpHandler = (e: any) => {
    e.preventDefault();
    const email = e.target.email.value;
    const res = validateEmail(email);
    res.then((r) => console.log(r));
  };
  return (
    <Form className="signUpFormDiv" action="" onSubmit={SignUpHandler}>
      <SignUpFormLabel>Email</SignUpFormLabel>
      <InputSignUp name="email" />
      <SearchButton2 type="submit">Continuar</SearchButton2>
    </Form>
  );
}
export function SignUpCodeForm() {
  const SignUpCodeHandler = (e: any) => {
    const code = e.target.code.value;
    const res = getToken(code);
    res.then((r) => console.log(r));
  };
  return (
    <Form className="signUpFormDiv" action="" onSubmit={SignUpCodeHandler}>
      <InputSignUp name="code" />
      <FormDiv>Te enviamos un código a tu email</FormDiv>
      <SearchButton2 type="submit">Ingresar</SearchButton2>
    </Form>
  );
}
