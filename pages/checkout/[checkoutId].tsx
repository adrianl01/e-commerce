import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SearchForm } from "@/ui/forms";
import { Body } from "@/ui/typography/inter";
import { useRouter } from "next/router";

export default function CheckoutPage() {
  const router = useRouter();
  console.log(router);
  return (
    <Body>
      <Header />
      <SearchForm />
      {/* <Item checkoutId={router} /> */}
      <Footer />
    </Body>
  );
}
