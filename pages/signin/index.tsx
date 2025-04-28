import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SignIn } from "@/components/signin";
import { SignUpDiv } from "@/components/signin/style";
import { getToken, validateEmail } from "@/lib/api";
import { useEmail } from "@/lib/hooks";
import { FormDiv, InputSignUp, SignUpFormLabel } from "@/ui/forms/style";
import { Body } from "@/ui/typography/inter";
import Form from "next/form";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignInPage() {
  return (
    <Body>
      <Header />
      <SignIn />
      <Footer />
    </Body>
  );
}
