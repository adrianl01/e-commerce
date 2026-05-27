import Footer from "@/components/footer/Footer";
import Header from "@/components/header";
import { Profile } from "@/components/profile";
import { Body } from "@/components/ui/typography/inter";

export default function ProfilePage() {
  return (
    <Body>
      <Header />
      <Profile />
      <Footer />
    </Body>
  );
}
