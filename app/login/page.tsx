import Footer from "@/components/footer/Footer";
import Header from "@/components/header";
import { LogIn } from "@/components/login/Login";
import { Body } from "@/components/ui/typography/inter";

export default function LogInPage() {
  return (
    <Body>
      <Header />
      <LogIn />
      <Footer />
    </Body>
  );
}
