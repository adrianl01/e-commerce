import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Profile } from "@/components/profile";
import { Body } from "@/ui/typography/inter";

export default function ProfilePage() {
  return (
    <Body>
      <Header />
      <Profile />
      <Footer />
    </Body>
  );
}
