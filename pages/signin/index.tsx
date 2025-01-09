import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
// import { SignUp, SignUpCode } from "@/components/signin";
import { SignUpDiv } from "@/components/signin/style";
import { getToken, validateEmail } from "@/lib/api";
import { useEmail } from "@/lib/hooks";
import { SearchButton2 } from "@/ui/buttons";
// import { SignUpCodeForm, SignUpForm } from "@/ui/forms";
import { FormDiv, InputSignUp, SignUpFormLabel } from "@/ui/forms/style";
import { Body } from "@/ui/typography/inter";
import Form from "next/form";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignInPage() {
  const email = useEmail();
  const router = useRouter();
  const [data, setData] = useState(false);
  const home = () => {
    router.push("/");
  };
  console.log("pageEmail:", email);

  function SignUpForm() {
    const SignUpHandler = (e: any) => {
      e.preventDefault();
      const email = e.target.email.value;
      const res = validateEmail(email);
      res.then((r) => {
        console.log(r);
        setData(true);
      });
    };
    return (
      <Form className="signUpFormDiv" action="" onSubmit={SignUpHandler}>
        <SignUpFormLabel>Email</SignUpFormLabel>
        <InputSignUp name="email" />
        <SearchButton2 type="submit">Continuar</SearchButton2>
      </Form>
    );
  }

  function SignUpCodeForm(prop: any) {
    const SignUpCodeHandler = (e: any) => {
      const code = e.target.code.value;
      const res = getToken(code);
      res.then((r) => {
        console.log(r);
        router.push("/");
      });
    };
    return (
      <Form className="signUpFormDiv" action="" onSubmit={SignUpCodeHandler}>
        <InputSignUp name="code" />
        <FormDiv>Te enviamos un código a tu email</FormDiv>
        <SearchButton2 type="submit">Ingresar</SearchButton2>
      </Form>
    );
  }

  return (
    <Body>
      <Header />
      {data ? (
        <div>
          <SignUpDiv>
            <h4 className="text-4xl text-left font-bold">Código</h4>
            <SignUpCodeForm action={home} />
          </SignUpDiv>
        </div>
      ) : (
        <div>
          <SignUpDiv>
            <h4 className="text-4xl text-left font-bold">Ingresar</h4>
            <SignUpForm />
          </SignUpDiv>
        </div>
      )}
      <Footer />
    </Body>
  );
}
