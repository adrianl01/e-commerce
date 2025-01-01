import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SignUp, SignUpCode } from "@/components/signin";
import { useEmail } from "@/lib/hooks";
import { Body } from "@/ui/typography/inter";

export default function SignInPage() {
  const email = useEmail();
  console.log("pageEmail:", email);

  return (
    <Body>
      <Header />
      {email ? <SignUpCode /> : <SignUp />}
      <Footer />
    </Body>
  );
}
