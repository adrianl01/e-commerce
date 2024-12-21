import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SignUp, SignUpCode } from "@/components/signin";
import { Body } from "@/ui/typography/inter";

export default function SignInPage() {
  const email = "";

  return (
    <Body>
      <Header />
      {email ? <SignUpCode /> : <SignUp />}
      <Footer />
    </Body>
  );
}
